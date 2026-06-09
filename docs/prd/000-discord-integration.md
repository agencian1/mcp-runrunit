# PRD: Discord bot integration for mcp-runrunit

## 1. Product overview

### 1.1 Document title and version

- PRD: Discord bot integration for mcp-runrunit
- Version: 1.0

### 1.2 Product summary

This document describes the first phase of a Discord bot that works alongside the mcp-runrunit MCP server to maintain execution history per project. The bot will eventually mirror Runrun.it task comments into Discord so teams can follow activity in a dedicated channel.

In this phase we deliver only the Discord-side building blocks: domain types, application services, a Discord REST API adapter, and MCP tools (send message, create channel, list channels, get-or-create channel per client). No integration with Runrun.it flows (e.g. no automatic posting when a comment is created) is in scope; that bridge will be implemented in a later phase.

The channel model is one Discord channel per client, with channels created on demand as needed.

## 2. Goals

### 2.1 Business goals

- Enable a single place (Discord) to see Runrun.it activity per client without changing Runrun.it usage.
- Prepare the codebase for a future phase that automatically posts task comments to Discord.
- Keep Discord tooling consistent with mcp-runrunit architecture (domain, application, adapters).

### 2.2 User goals

- Use MCP tools to send messages to Discord from agents or workflows.
- Use MCP tools to create and list Discord channels and to get or create a channel for a given client.
- Rely on a clear, documented contract (env vars, tools, errors) for configuration and operations.

### 2.3 Non-goals

- Automatically posting to Discord when a Runrun.it task receives a comment (later phase).
- Discord slash commands, gateway events, or real-time subscriptions in this phase.
- User-facing Discord bot UI or interactive flows beyond what the MCP tools expose.

## 3. User personas

### 3.1 Key user types

- Agent/automation (Cursor, MCP client): invokes Discord tools to send messages and manage channels.
- Operator: configures the bot token and Discord server/channel via environment variables.
- Developer: extends or debugs the Discord integration using the same layers as the rest of mcp-runrunit.

### 3.2 Basic persona details

- **Automation consumer**: Uses MCP tools to post Runrun.it–related updates to Discord (e.g. after creating a comment, in a future phase) or to ensure a client channel exists before posting.
- **Operator**: Sets `BOT_RUNRUNIT_REPORT`, `DISCORD_CHANNEL_ID`, and optionally `DISCORD_GUILD_ID` so the bot can authenticate and target the correct server and default channel.

### 3.3 Role-based access

- **MCP client**: Can call the Discord tools when the server is configured with valid env vars; no separate Discord role model in this phase beyond bot permissions (VIEW_CHANNEL, SEND_MESSAGES, MANAGE_CHANNELS).

## 4. Functional requirements

- **Discord REST client** (Priority: P0)
  - Authenticate with Discord using a bot token from environment.
  - Use Discord REST API v10 base URL and headers (Authorization: Bot &lt;token&gt;).
  - Respect rate limits (per-route and global) and surface rate-limit or API errors clearly.

- **Send message** (Priority: P0)
  - Send a text message to a given Discord channel by channel ID.
  - Support plain text; optional future support for embeds or formatting is out of scope for this phase.

- **Create channel** (Priority: P0)
  - Create a new text channel in the configured Discord server (guild), with a given name and optional configuration (e.g. topic, category).

- **List channels** (Priority: P0)
  - List channels in the configured Discord server (guild), with optional filter by type (e.g. text) so callers can find existing client channels.

- **Get-or-create channel for client** (Priority: P0)
  - Given a client identifier (e.g. client name or ID), return the existing Discord channel for that client if one exists (e.g. by name or stored mapping); otherwise create a new channel and return it. Channel naming convention (e.g. `client-{id}` or `runrunit-{name}`) is defined in implementation and documented.
  - **Category "Tasks" rule:** When creating channels in the Discord category **Tasks**, only create a new channel if the project does not already have one. Always search by **project name** first (e.g. list channels in that category and match by project name); use the existing channel if found, otherwise create the new channel under the Tasks category.

- **Environment configuration** (Priority: P0)
  - Document and use: `BOT_RUNRUNIT_REPORT` (bot token), `DISCORD_CHANNEL_ID` (target server default channel for fallback or operations), and `DISCORD_GUILD_ID` (server ID for channel list/create and get-or-create) as needed for server operations.

## 5. User experience

### 5.1 Entry points and first-time user flow

- Operator adds Discord env vars to the MCP server config (e.g. `.env` or MCP client env).
- No first-time Discord OAuth or user login; the bot runs with server-side token only.

### 5.2 Core experience

- **Invoke send message**: Caller provides channel ID and message text; tool returns the created message or an error (e.g. missing token, channel not found, rate limit).
- **Invoke create channel**: Caller provides channel name (and optional options); tool returns the new channel object (id, name, etc.).
- **Invoke list channels**: Caller optionally filters by type; tool returns a list of channels in the guild.
- **Invoke get-or-create channel for client**: Caller provides client identifier; tool returns the channel (existing or newly created), so downstream flows can use the channel ID for sending messages.

### 5.3 Advanced features and edge cases

- Rate limits: Back off or return a clear error so callers can retry.
- Missing env: Return a clear error indicating which variable is missing.
- Invalid channel or guild ID: Return a clear API error (e.g. 404) rather than generic failure.
- Channel naming conflicts: Define behavior (e.g. create with suffix or idempotent by name) and document it.

### 5.4 UI/UX highlights

- No dedicated UI in this phase; all interaction is via MCP tools and documented env vars. Error messages should be explicit enough for operators and agents to fix configuration or retry.

## 6. Narrative

An operator configures the Discord bot token and server/channel IDs once. Agents or future automation can then send Runrun.it–related updates to Discord and ensure each client has a dedicated channel. In a later phase, when a comment is added to a Runrun.it task, the system will post that comment to the corresponding Discord channel, giving teams a single place to follow execution history per client without leaving Discord.

## 7. Success metrics

### 7.1 User-centric metrics

- MCP tools complete successfully when env is valid and Discord API is reachable.
- Errors for missing/invalid config or rate limits are understandable and actionable.

### 7.2 Business metrics

- Discord integration can be enabled for any Runrun.it workspace by setting env vars; no code fork required.
- Foundation is in place for the future task-comment → Discord bridge.

### 7.3 Technical metrics

- Discord calls use REST API v10 and respect rate limits.
- New code follows mcp-runrunit layering (domain, application, adapters); no Runrun.it flows are modified in this phase.

## 8. Technical considerations

### 8.1 Architecture alignment with mcp-runrunit

- **Domain** (`src/domain`): Define DTOs and types for Discord (e.g. channel, message, client–channel mapping or naming contract). Application and adapters consume from domain only.
- **Application** (`src/application`): Implement use cases that drive the Discord side: sendMessage(channelId, content), createChannel(guildId, name, options?), listChannels(guildId, options?), getOrCreateChannelForClient(clientIdOrName). These call the driven adapter and do not depend on Runrun.it.
- **Adapters – driven** (`src/adapters/driven`): Discord REST API client (e.g. `discord_api.ts` or similar): read env for bot token, perform HTTP requests to Discord REST v10, handle auth header and errors. Keep token in env only; never log or expose it.
- **Adapters – driving** (`src/adapters/driving/app.ts`): Register MCP tools (e.g. `runrunit_discord_send_message`, `runrunit_discord_create_channel`, `runrunit_discord_list_channels`, `runrunit_discord_get_or_create_channel`) and delegate to application layer. Tool schemas must document required/optional parameters (channel_id, content, guild_id, channel_name, client_id/name, etc.).
- **No changes** to existing Runrun.it flows: do not call Discord from `runrunit_create_comment` or any other Runrun.it handler in this phase.

### 8.2 Integration points

- Discord REST API v10 (e.g. `https://discord.com/api/v10`): create message, create guild channel, list guild channels. Use bot token in `Authorization: Bot <token>`.
- References: Discord Developer Platform (https://docs.discord.com/developers/intro), Bots & Companion Apps, Server and Channel Management. Permissions: VIEW_CHANNEL, SEND_MESSAGES, MANAGE_CHANNELS.

### 8.3 Data storage and privacy

- Bot token and channel/guild IDs live in environment variables only; no persistence of tokens in code or logs.
- No PII storage in this phase; client identifier passed to get-or-create is used only for channel naming or lookup.

### 8.4 Scalability and performance

- Respect Discord rate limits (per-route and global); implement simple backoff or return 429-style errors with clear messaging.
- Get-or-create can be implemented with list channels + filter by name, then create if not found; avoid unnecessary create calls when channel already exists.

### 8.5 Potential challenges

- Rate limits under high comment volume in a future phase; this phase only needs to handle moderate tool usage.
- Mapping Runrun.it client to Discord channel: this phase uses an explicit client identifier (e.g. name or ID) passed into get-or-create; a future phase may need a stable mapping (e.g. from Runrun.it project/client API) and can extend the same tool or add a mapping layer.

## 9. Milestones and sequencing

### 9.1 Project estimate

- Small: one focused implementation slice (domain + application + Discord adapter + MCP tools), no Runrun.it wiring.

### 9.2 Team size and composition

- One developer familiar with mcp-runrunit and Discord API is sufficient; optional review by someone who owns the repo structure.

### 9.3 Suggested phases

- **Phase 1 (this PRD)**: Discord tools and classes only.
  - Domain types for Discord (channel, message, options).
  - Discord REST adapter (auth, send message, create channel, list channels).
  - Application: sendMessage, createChannel, listChannels, getOrCreateChannelForClient.
  - MCP tools: send message, create channel, list channels, get-or-create channel for client.
  - Documentation: env vars (BOT_RUNRUNIT_REPORT, DISCORD_CHANNEL_ID, DISCORD_GUILD_ID), tool schemas, and CONTEXTO-AGENTE or similar update.
- **Phase 2 (later)**: Bridge task comment → Discord (e.g. on runrunit_create_comment or webhook), mapping task/project/client to Discord channel and posting comment content.

## 10. User stories

### 10.1 Send a message to a Discord channel

- **ID**: DS-001
- **Description**: As an MCP client (e.g. an agent), I want to send a text message to a specific Discord channel by ID so that I can post Runrun.it–related updates there.
- **Acceptance criteria**:
  - An MCP tool accepts `channel_id` (required) and `content` (required, text).
  - The tool uses the bot token from `BOT_RUNRUNIT_REPORT` and Discord REST API v10 to create a message in the channel.
  - On success, the tool returns the created message object (or a minimal representation with id and channel_id).
  - On failure (missing token, invalid channel, rate limit, etc.), the tool returns a clear error message without exposing the token.
  - Bot has SEND_MESSAGES and VIEW_CHANNEL in the target channel.

### 10.2 Create a Discord channel in the server

- **ID**: DS-002
- **Description**: As an MCP client, I want to create a new text channel in the configured Discord server so that we can have one channel per client.
- **Acceptance criteria**:
  - An MCP tool accepts at least `name` (required) and optionally `guild_id` (default from `DISCORD_GUILD_ID`), and optional fields (e.g. topic, parent_id).
  - The tool uses the bot token and creates a guild text channel via Discord REST API v10.
  - On success, the tool returns the new channel (id, name, guild_id, etc.).
  - On failure (missing token, missing guild, permission MANAGE_CHANNELS, rate limit), the tool returns a clear error.
  - Bot has MANAGE_CHANNELS permission in the guild.

### 10.3 List Discord channels in the server

- **ID**: DS-003
- **Description**: As an MCP client, I want to list channels in the Discord server so that I can find an existing client channel or inspect configuration.
- **Acceptance criteria**:
  - An MCP tool accepts optional `guild_id` (default from `DISCORD_GUILD_ID`) and optional filter (e.g. channel type).
  - The tool returns a list of channels (e.g. id, name, type, parent_id) for the guild.
  - On failure (missing token, invalid guild, rate limit), the tool returns a clear error.
  - Bot has VIEW_CHANNEL (and list channels) permission in the guild.

### 10.4 Get or create a Discord channel for a client

- **ID**: DS-004
- **Description**: As an MCP client, I want to get an existing Discord channel for a given client or create one if it does not exist, so that I can always have a target channel for posting without manual setup.
- **Acceptance criteria**:
  - An MCP tool accepts a client identifier (e.g. `client_id` or `client_name`) and optional `guild_id` (default from `DISCORD_GUILD_ID`).
  - The tool looks up an existing channel by a defined convention (e.g. name equals `runrunit-{client_name}` or stored mapping); if not found, creates a new channel with that name and returns it.
  - On success, the tool returns the channel object (id, name, etc.) so the caller can use the channel id for send message.
  - Naming convention and idempotency behavior are documented (e.g. in CONTEXTO-AGENTE or tool description).
  - On failure (missing token, guild, or permissions), the tool returns a clear error.

### 10.5 Configuration and security

- **ID**: DS-005
- **Description**: As an operator, I want the bot to use only environment variables for secrets and server/channel IDs so that tokens are never hardcoded or logged.
- **Acceptance criteria**:
  - Bot token is read from `BOT_RUNRUNIT_REPORT`; if missing, all Discord tools return a clear error (e.g. "Missing BOT_RUNRUNIT_REPORT").
  - `DISCORD_CHANNEL_ID` is documented as the default or fallback channel ID when needed (e.g. for operations that need a target channel).
  - `DISCORD_GUILD_ID` is documented and used for list channels, create channel, and get-or-create channel when a guild is required.
  - Token is never logged or included in error messages or tool responses.
  - Env vars are documented in `.env.example` and in the PRD/docs.

## 11. Out of scope (this phase)

- Automatically posting to Discord when a Runrun.it task receives a comment (e.g. from `runrunit_create_comment` or a webhook). This will be implemented in a later phase.
- Any change to Runrun.it application or adapter code that triggers Discord calls.
- Discord Gateway (events, presence); only REST API is used.
- Slash commands or other Discord interaction types.
- Persistent mapping store (e.g. database) for client → channel; get-or-create may use naming convention or in-memory lookup only in this phase.

## 12. References

- Discord Developer Platform: https://docs.discord.com/developers/intro
- Discord Bots & Companion Apps, Server and Channel Management (docs.discord.com)
- Discord REST API v10: base URL and resource paths for channels and messages
- Best practices: token in env only; permissions VIEW_CHANNEL, SEND_MESSAGES, MANAGE_CHANNELS; respect rate limits; use REST API v10
- mcp-runrunit architecture: DTOs and types in `src/domain`; application in `src/application`; adapters in `src/adapters` (driving = MCP tools, driven = external API client). See AGENTS.md and existing modules (e.g. tasks, comments, api.ts).

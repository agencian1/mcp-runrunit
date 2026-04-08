/**
 * Application layer: Discord use cases.
 * Sends messages, creates channels, lists channels, and resolves or creates a channel per client.
 * Depends on domain types and the driven adapter (Discord API).
 */

import type {
  CreateChannelParams,
  DiscordChannel,
} from "../domain/discord.js";
import * as discordApi from "../adapters/driven/discord.js";

export async function sendMessage(
  channelId: string,
  content: string,
  options?: { taskId?: number; projectId?: number }
): Promise<{ id: string; channel_id: string }> {
  return discordApi.sendMessage(channelId, content, options);
}

export async function createChannel(
  params: CreateChannelParams
): Promise<DiscordChannel> {
  return discordApi.createChannel(params);
}

export async function listChannels(guildId: string): Promise<DiscordChannel[]> {
  return discordApi.listGuildChannels(guildId);
}

/**
 * Get default guild ID from env (DISCORD_GUILD_ID).
 * If not set, resolves from DISCORD_CHANNEL_ID by fetching the channel.
 */
export async function getDefaultGuildId(): Promise<string> {
  const guildId = process.env.DISCORD_GUILD_ID?.trim();
  if (guildId) return guildId;
  const channelId = process.env.DISCORD_CHANNEL_ID?.trim();
  if (channelId) {
    try {
      const channel = await discordApi.getChannel(channelId);
      if (channel.guild_id) return channel.guild_id;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(
        `Could not resolve guild from DISCORD_CHANNEL_ID (${msg}). Set DISCORD_GUILD_ID in .env with your server ID (Discord: right-click server name → Copy Server ID) to list/create channels.`
      );
    }
  }
  throw new Error(
    "Missing DISCORD_GUILD_ID or DISCORD_CHANNEL_ID. Set one so the bot can resolve the server (guild) for listing/creating channels."
  );
}

/**
 * Get or create a text channel for a client (1 channel per client).
 * Channel name is derived from clientId/clientName (e.g. slug of name like 'livemode', 'canetas-crown', 'resonant').
 * If a channel with that name already exists in the guild, returns it; otherwise creates it.
 */
export async function getOrCreateChannelForClient(params: {
  clientId?: number | string;
  clientName?: string;
  guildId?: string;
}): Promise<{ channelId: string; channelName: string; created: boolean }> {
  const guildId =
    params.guildId ?? (await getDefaultGuildId());
  const channelName = resolveChannelNameForClient(
    params.clientId,
    params.clientName
  );

  const channels = await discordApi.listGuildChannels(guildId);
  const textChannels = channels.filter((c) => c.type === 0);
  const existing = textChannels.find(
    (c) => c.name?.toLowerCase() === channelName.toLowerCase()
  );
  if (existing) {
    return {
      channelId: existing.id,
      channelName: existing.name ?? channelName,
      created: false,
    };
  }

  const created = await discordApi.createChannel({
    name: channelName,
    guildId,
    topic: params.clientName
      ? `Runrun.it client: ${params.clientName}`
      : undefined,
  });
  return {
    channelId: created.id,
    channelName: created.name ?? channelName,
    created: true,
  };
}

function resolveChannelNameForClient(
  clientId?: number | string,
  clientName?: string
): string {
  if (clientName?.trim()) {
    return clientName
      .trim()
      .replace(/[^a-z0-9-_]/gi, "-")
      .replace(/-+/g, "-")
      .slice(0, 100);
  }
  if (clientId != null && String(clientId).trim() !== "") {
    return String(clientId)
      .trim()
      .replace(/[^a-z0-9-_]/gi, "-")
      .replace(/-+/g, "-")
      .slice(0, 100);
  }
  throw new Error(
    "Missing clientName or clientId to resolve Discord channel name. Provide a project/client name (e.g. 'livemode', 'canetas-crown', 'resonant')."
  );
}

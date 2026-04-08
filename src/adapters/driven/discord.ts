/**
 * Driven adapter: Discord REST API client.
 * Uses BOT_RUNRUNIT_REPORT (token) and DISCORD_GUILD_ID from env.
 * Never logs or exposes the token.
 */

import type { CreateChannelParams, DiscordChannel } from "../../domain/discord.js";

const DISCORD_API_BASE = "https://discord.com/api/v10";

function getToken(): string {
  const token =
    process.env.BOT_RUNRUNIT_REPORT?.trim() ||
    process.env.BOT_RUNRUNIT_REPORT_PRIVATE_KEY?.trim();
  if (!token) {
    throw new Error(
      "Missing BOT_RUNRUNIT_REPORT or BOT_RUNRUNIT_REPORT_PRIVATE_KEY. Set one in your MCP client config or environment for Discord tools."
    );
  }
  return token;
}

type DiscordFetchOptions = Omit<RequestInit, "body"> & { body?: object };

async function discordFetch<T>(
  path: string,
  options: DiscordFetchOptions = {}
): Promise<T> {
  const { body, ...init } = options;
  const headers: Record<string, string> = {
    Authorization: `Bot ${getToken()}`,
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string>),
  };

  const url = `${DISCORD_API_BASE}${path}`;
  const fetchBody: BodyInit | undefined =
    body !== undefined ? JSON.stringify(body) : undefined;
  const res = await fetch(url, {
    ...init,
    headers,
    body: fetchBody,
  });

  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (res.status === 429) {
    const retryAfter = (data as { retry_after?: number })?.retry_after ?? 1;
    throw new Error(
      `Discord rate limit. Retry after ${retryAfter}s. Respect rate limits to avoid throttling.`
    );
  }

  if (!res.ok) {
    const errBody = data as { message?: string; code?: number };
    throw new Error(
      `Discord API error: ${res.status} ${errBody?.message ?? res.statusText}${errBody?.code != null ? ` (code ${errBody.code})` : ""}`
    );
  }

  return data as T;
}

/**
 * Send a message to a channel.
 */
export async function sendMessage(
  channelId: string,
  content: string,
  _options?: { taskId?: number; projectId?: number }
): Promise<{ id: string; channel_id: string }> {
  const payload: { content: string } = { content };
  if (content.length > 2000) {
    throw new Error("Discord message content must be 2000 characters or less.");
  }
  const result = await discordFetch<{ id: string; channel_id: string }>(
    `/channels/${channelId}/messages`,
    { method: "POST", body: payload }
  );
  return result;
}

/**
 * Create a text channel in a guild.
 * Channel type 0 = GUILD_TEXT.
 */
export async function createChannel(
  params: CreateChannelParams
): Promise<DiscordChannel> {
  const body: {
    name: string;
    type: number;
    parent_id?: string;
    topic?: string;
  } = {
    name: params.name.replace(/[^a-z0-9-_]/gi, "-").slice(0, 100) || "channel",
    type: 0,
  };
  if (params.parentId) body.parent_id = params.parentId;
  if (params.topic) body.topic = params.topic.slice(0, 1024);

  const channel = await discordFetch<DiscordChannel>(
    `/guilds/${params.guildId}/channels`,
    { method: "POST", body }
  );
  return channel;
}

/**
 * List channels in a guild.
 */
export async function listGuildChannels(
  guildId: string
): Promise<DiscordChannel[]> {
  const channels = await discordFetch<DiscordChannel[]>(
    `/guilds/${guildId}/channels`
  );
  return channels;
}

/**
 * Get a single channel (e.g. to resolve guild_id from channel_id).
 */
export async function getChannel(channelId: string): Promise<DiscordChannel> {
  return discordFetch<DiscordChannel>(`/channels/${channelId}`);
}

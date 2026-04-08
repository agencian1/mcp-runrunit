/**
 * Domain types for Discord: DTOs and contracts for the Discord REST API.
 * Application and adapters consume these types; no Discord API details leak outside adapters.
 */

export type SendMessageParams = {
  channelId: string;
  content: string;
  /** Optional metadata for execution history (e.g. task_id, project_id). */
  taskId?: number;
  projectId?: number;
};

export type CreateChannelParams = {
  name: string;
  guildId: string;
  parentId?: string;
  topic?: string;
};

export type DiscordChannel = {
  id: string;
  name: string;
  type: number;
  guild_id?: string;
  parent_id?: string | null;
  topic?: string | null;
};

export type ClientChannelMapping = {
  clientId: number | string;
  clientName?: string;
  channelId: string;
  channelName: string;
};

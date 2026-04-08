import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { uploadImage as uploadImageCloudinary } from "../../application/cloudinary.js";
import * as comments from "../../application/comments.js";
import * as discord from "../../application/discord.js";
import { detectPlatformFromTask } from "../../application/detect_platform.js";
import * as devSuggestions from "../../application/dev_suggestions.js";
import * as projects from "../../application/projects.js";
import * as tasks from "../../application/tasks.js";
import { taskUpdateToApiPayload } from "../../infrastructure/mappers/custom_fields_mapper.js";
import { installCursorSkills } from "../../application/install-cursor-skills.js";
import { installCursorAgents } from "../../application/install-cursor-agents.js";
import { RunrunitAPIError } from "../driven/api.js";
  

export const TOOLS = [
  /**
   * @namedTools runrunit_list_projects
   */
  {
    name: "runrunit_list_projects",
    description:
      "List all projects from Runrun.it. Optional filters: client_id, project_group_id, is_closed, is_active, page, limit.",
    inputSchema: {
      type: "object" as const,
      properties: {
        client_id: { type: "number", description: "Filter by client ID" },
        project_group_id: { type: "number", description: "Filter by project group ID" },
        is_closed: { type: "boolean", description: "Filter by closed state" },
        is_active: { type: "boolean", description: "Filter by active state" },
        page: { type: "number", description: "Page number (default 1)" },
        limit: { type: "number", description: "Items per page (1-100)" },
      },
      required: [],
    },
  },
  /**
   * @namedTools runrunit_list_tasks
   */
  {
    name: "runrunit_list_tasks",
    description:
      "List tasks from Runrun.it. Optional filters: ids, user_id, follower_id, responsible_id, assignee_id, filter_id, board_stage_id, project_id, is_closed, is_working_on, sort, sort_dir, page, limit.",
    inputSchema: {
      type: "object" as const,
      properties: {
        ids: { type: "string", description: "Comma-separated task IDs" },
        user_id: { type: "string", description: "Creator user ID" },
        follower_id: { type: "string", description: "Follower user ID" },
        responsible_id: { type: "string", description: "Responsible/assignee user ID (e.g. for 'Minhas partes abertas')" },
        assignee_id: { type: "string", description: "Assignee/executor principal user ID" },
        filter_id: { type: "number", description: "ID of a task filter (e.g. 'Minhas partes abertas')" },
        board_stage_id: { type: "number", description: "Filter by board stage (e.g. Ongoing)" },
        project_id: { type: "number", description: "Project ID" },
        is_closed: { type: "boolean", description: "Filter by delivered tasks" },
        is_working_on: { type: "boolean", description: "Filter by in progress" },
        sort: { type: "string", description: "Sort field (e.g. close_date, queue_position)" },
        sort_dir: { type: "string", enum: ["asc", "desc"], description: "Sort direction" },
        page: { type: "number", description: "Page number (default 1)" },
        limit: { type: "number", description: "Items per page (1-100)" },
      },
      required: [],
    },
  },
  {
    name: "runrunit_list_task_filters",
    description:
      "List all task filters available to the current user. Use to find filter_id for 'Minhas partes abertas' or other filters.",
    inputSchema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  {
    name: "runrunit_list_board_stages",
    description:
      "List board stages (Task, Ongoing, Manager Validation, etc.). Use board_id from a task. Returns stages with id and name — use with runrunit_move_task_stage when moving tasks by stage name.",
    inputSchema: {
      type: "object" as const,
      properties: {
        board_id: { type: "number", description: "Board ID (from task.board_id)" },
      },
      required: ["board_id"],
    },
  },
  /**
   * @namedTools runrunit_move_task_stage
   */
  {
    name: "runrunit_move_task_stage",
    description:
      "Moves a task to a board stage (column). Tasks must only advance; backward move is allowed only to 'Task' or 'Blocked Task' (e.g. impediment or not finished). Use board_stage_name or board_stage_id. For stages that require 'Link da branch', fill it first with runrunit_update_task.",
    inputSchema: {
      type: "object" as const,
      properties: {
        task_id: { type: "number", description: "Task ID to move" },
        board_stage_name: {
          type: "string",
          description: "Stage name (e.g. 'Task', 'Ongoing', 'Manager Validation', 'Ready for production'). Partial match, case-insensitive.",
        },
        board_stage_id: { type: "number", description: "Stage ID (from runrunit_list_board_stages)" },
      },
      required: ["task_id"],
    },
  },
  {
    name: "runrunit_get_task",
    description: "Get a single task by ID from Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { id: { type: "number", description: "Task ID" } },
      required: ["id"],
    },
  },
  /**
   * @namedTools runrunit_list_subtasks
   */
  {
    name: "runrunit_list_subtasks",
    description: "Use for listing subtasks of a task from Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { task_id: { type: "number", description: "Parent task ID" } },
      required: ["task_id"],
    },
  },
  /**
   * @namedTools runrunit_create_task
   */
  {
    name: "runrunit_create_task",
    description:
      "Create a task on Runrun.it in board Ongoing (ID: 96356) in column Task by default and assignee from who is call the tool. Requires title (eg.: [project_name] - task_name) and type_id. Optional: description (rich description via Task Description API, appended to any existing text), project_id, assignments, desired_date, etc.",
    inputSchema: {
      type: "object" as const,
      properties: {
        title: { type: "string", description: "Task title" },
        type_id: { type: "number", description: "Task type ID" },
        description: {
          type: "string",
          description:
            "Task description body (optional). Stored via PUT /tasks/:id/description after create; new text is appended after any content already on the task, never replacing it outright.",
        },
        project_id: { type: "number", description: "Project ID" },
        project_name: { type: "string", description: "Project name" },
        board_name: { type: "string", description: "Board name" },
        board_stage_name: { type: "string", description: "Board stage name" },
        on_going: { type: "boolean", description: "Ongoing task" },
        desired_date: { type: "string", description: "Desired delivery date (ISO)" },
        desired_start_date: { type: "string", description: "Desired start date (ISO)" },
        tag_list: { type: "string", description: "Comma-separated tags" },
        assignments: {
          type: "array",
          items: {
            type: "object",
            properties: {
              assignee_id: { type: "string" },
              team_id: { type: "number" },
            },
            required: ["assignee_id"],
          },
          description: "Assignments",
        },
      },
      required: ["title", "type_id"],
    },
  },
  /**
   * @namedTools runrunit_update_task
   */
  {
    name: "runrunit_update_task",
    description:
      "Update a task on Runrun.it. Pass task ID and an object with fields to update (e.g. title, desired_date). For the PR/branch link use link_da_branch (URL); it is stored in the custom field 'Link da branch' (custom_32). To move a task between columns (Task, Ongoing, Manager Validation), use runrunit_move_task_stage.",
    inputSchema: {
      type: "object" as const,
      properties: {
        id: { type: "number", description: "Task ID" },
        task: {
          type: "object",
          description:
            "Fields to update (e.g. { title: 'New title' }, { link_da_branch: 'https://github.com/.../pull/21' }). link_da_branch maps to custom field Link da branch.",
          properties: {
            title: { type: "string", description: "Task title" },
            desired_date: { type: "string", description: "Desired date (ISO)" },
            link_da_branch: {
              type: "string",
              description: "URL of the PR or branch (stored in custom field 'Link da branch', e.g. https://github.com/org/repo/pull/21)",
            },
          },
          additionalProperties: true,
        },
      },
      required: ["id", "task"],
    },
  },
  /**
   * @namedTools runrunit_delete_task
   */
  {
    name: "runrunit_delete_task",
    description: "Delete a task on Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { id: { type: "number", description: "Task ID" } },
      required: ["id"],
    },
  },
  /**
   * @namedTools runrunit_create_workflow
   */
  {
    name: "runrunit_create_workflow",
    description: "Create a workflow for a task (starts tracking eligibility). Task must not be closed, ongoing, or already have a workflow.",
    inputSchema: {
      type: "object" as const,
      properties: { task_id: { type: "number", description: "Task ID" } },
      required: ["task_id"],
    },
  },
  /**
   * @namedTools runrunit_assignment_play
   */
  {
    name: "runrunit_assignment_play",
    description: "Start tracking work on a task (play). Pauses current task if assignee is already working on another. Always ensure that the task is in the Ongoing column (board_stage_id: 96356) before calling this tool.",
    inputSchema: {
      type: "object" as const,
      properties: {
        task_id: { type: "number", description: "Task ID" },
        assignment_id: { type: "string", description: "Assignment ID (from task.assignments[].id)" },
      },
      required: ["task_id", "assignment_id"],
    },
  },
  {
    name: "runrunit_list_task_comments",
    description: "List all comments on a task in Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { task_id: { type: "number", description: "Task ID" } },
      required: ["task_id"],
    },
  },
  /**
   * @namedTools runrunit_get_comment
   */
  {
    name: "runrunit_get_comment",
    description: "Get a single comment by ID from Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { id: { type: "number", description: "Comment ID" } },
      required: ["id"],
    },
  },
  /**
   * @namedTools runrunit_create_comment
   */
  {
    name: "runrunit_create_comment",
    description:
      "Create a comment on a task in Runrun.it. Format: plain text and raw URLs only (no Markdown). Optional url_antes + url_depois: when both are provided, (1) capture visual evidence (skill registrar-evidencias), (2) upload images (e.g. Cloudinary), (3) append to text plain labels and image URLs (e.g. 'Antes: <url>' and 'Depois: <url>'), (4) call this tool with the enriched text.",
    inputSchema: {
      type: "object" as const,
      properties: {
        task_id: { type: "number", description: "Task ID" },
        text: { type: "string", description: "Comment text (can be enriched with an evidence block when url_antes/url_depois are used)" },
        url_antes: { type: "string", description: "Optional. URL of the page in the 'before' state; when provided with url_depois, agent should capture evidence and append it to text" },
        url_depois: { type: "string", description: "Optional. URL of the page in the 'after' state; when provided with url_antes, agent should capture evidence and append it to text" },
      },
      required: ["task_id", "text"],
    },
  },
  /**
   * @namedTools runrunit_update_comment
   */
  {
    name: "runrunit_update_comment",
    description: "Update a comment's text on Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: {
        id: { type: "number", description: "Comment ID" },
        text: { type: "string", description: "New comment text" },
      },
      required: ["id", "text"],
    },
  },
  /**
   * @namedTools runrunit_delete_comment
   */
  {
    name: "runrunit_delete_comment",
    description: "Delete a comment on Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: { id: { type: "number", description: "Comment ID" } },
      required: ["id"],
    },
  },
  /**
   * @namedTools runrunit_comment_reaction
   */
  {
    name: "runrunit_comment_reaction",
    description: "Add a reaction (emoji) to a comment on Runrun.it.",
    inputSchema: {
      type: "object" as const,
      properties: {
        comment_id: { type: "number", description: "Comment ID" },
        emoji: { type: "string", description: "Emoji character (e.g. 👍)" },
      },
      required: ["comment_id", "emoji"],
    },
  },
  /**
   * @namedTools runrunit_create_external_comment
   */
  {
    name: "runrunit_create_external_comment",
    description:
      "For create a comment in the external/guest channel on a task in Runrun.it, use only text simple, without Markdown. Use this for comments shared with external clients (channel_name: guest).",
    inputSchema: {
      type: "object" as const,
      properties: {
        task_id: { type: "number", description: "Task ID" },
        text: { type: "string", description: "Comment text" },
      },
      required: ["task_id", "text"],
    },
  },
  /**
   * @namedTools runrunit_suggest_devs_with_free_queue
   */
  {
    name: "runrunit_suggest_devs_with_free_queue",
    description:
      "Sugere desenvolvedores com fila mais livre com base em tarefas na coluna Task, considerando estimativas e filtros opcionais (time, projeto, tags).",
    inputSchema: {
      type: "object" as const,
      properties: {
        limit: {
          type: "number",
          description: "Número máximo de devs sugeridos (1 a 10, padrão 3).",
          minimum: 1,
          maximum: 10,
        },
        team_id: {
          type: "string",
          description: "ID de time para filtrar desenvolvedores.",
        },
        tribe_id: {
          type: "string",
          description: "ID de tribo para filtrar desenvolvedores.",
        },
        squad_id: {
          type: "string",
          description: "ID de squad para filtrar desenvolvedores.",
        },
        project_tag: {
          type: "string",
          description: "Tag de projeto para filtrar tarefas.",
        },
        project_id: {
          type: "number",
          description: "ID de projeto para filtrar tarefas.",
        },
        developer_ids: {
          type: "array",
          items: { type: "string" },
          description:
            "Lista explícita de IDs de desenvolvedores candidatos (Runrun.it).",
        },
        only_active_devs: {
          type: "boolean",
          description:
            "Se verdadeiro, tenta considerar apenas desenvolvedores ativos (por exemplo, não de férias).",
        },
        board_id: {
          type: "number",
          description:
            "ID do board Kanban onde está a coluna Task. Necessário se task_stage_ids não for informado.",
        },
        task_stage_ids: {
          type: "array",
          items: { type: "number" },
          description:
            "IDs de estágios/colunas que representam a coluna Task. Se não informado, tenta identificar por convenção de nome no board informado.",
        },
        load_strategy: {
          type: "string",
          enum: ["tasks_and_time", "only_tasks", "only_time"],
          description:
            "Estratégia de cálculo de carga: tasks_and_time (padrão), only_tasks ou only_time.",
        },
        include_zero_tasks: {
          type: "boolean",
          description:
            "Se verdadeiro, inclui devs elegíveis sem tarefas na coluna Task (padrão true).",
        },
        only_developers: {
          type: "boolean",
          description:
            "Se verdadeiro, considera apenas desenvolvedores; exclui Gestor, Social, Inovação, etc. (padrão true).",
        },
      },
      required: [],
    },
  },
  /**
   * @namedTools runrunit_project_detect_platform
   */
  {
    name: "runrunit_project_detect_platform",
    description:
      "Identifies the project platform based on task tags in Runrun.it (Node, Python, Ruby, Go, Rust, etc.) and suggests the command to upload the development environment. The platform is defined by task tags (tags_data/tag_list), not by repository files.",
    inputSchema: {
      type: "object" as const,
      properties: {
        task_id: {
          type: "number",
          description: "ID da task no Runrun.it. As tags dessa task definem a plataforma (ex.: node, react, python).",
        },
      },
      required: ["task_id"],
    },
  },
  /**
   * @namedTools runrunit_install_cursor_skills
   */
  {
    name: "runrunit_install_cursor_skills",
    description:
      "Copies bundled Cursor skills from the mcp-runrunit package (cursor-skills/) into the user's Cursor skills directory (~/.cursor/skills on any OS: uses os.homedir). Use to onboard teammates or sync team SKILL.md workflows. Prefer dry_run:true first to preview. Optional skill_names limits which folders to copy; target:global (default) or project with project_root for .cursor/skills in a repo; source_dir overrides auto-discovery of cursor-skills.",
    inputSchema: {
      type: "object" as const,
      properties: {
        dry_run: {
          type: "boolean",
          description:
            "If true, only lists what would be copied (no writes). Recommended before first sync.",
        },
        skill_names: {
          type: "array",
          items: { type: "string" },
          description:
            "Optional folder names under cursor-skills to copy (e.g. registrar-evidencias). If omitted, copies every subfolder that contains SKILL.md.",
        },
        target: {
          type: "string",
          enum: ["global", "project"],
          description:
            "global = ~/.cursor/skills (default). project = <project_root>/.cursor/skills — requires project_root when target is project.",
        },
        project_root: {
          type: "string",
          description:
            "Absolute path to the project root when target is project. Ignored when target is global.",
        },
        source_dir: {
          type: "string",
          description:
            "Optional absolute path to a cursor-skills directory. If omitted, resolves next to the installed mcp-runrunit package.",
        },
      },
      required: [],
    },
  },
  /**
   * @namedTools runrunit_install_cursor_agents
   */
  {
    name: "runrunit_install_cursor_agents",
    description:
      "Copies bundled Cursor agent markdown files from the mcp-runrunit package (cursor-agents/) into ~/.cursor/agents (flat files: preserves each source basename, including .agent.md). Use dry_run:true first. Optional agent_names filters by destination filename; target:global (default) or project with project_root for .cursor/agents in a repo; source_dir overrides auto-discovery of cursor-agents.",
    inputSchema: {
      type: "object" as const,
      properties: {
        dry_run: {
          type: "boolean",
          description:
            "If true, only lists what would be copied (no writes). Recommended before first sync.",
        },
        agent_names: {
          type: "array",
          items: { type: "string" },
          description:
            "Optional destination basenames to copy (e.g. mentor.agent.md, kieran-typescript-reviewer.md). Stems without .md are accepted. If omitted, copies every root *.md and every subfolder with exactly one markdown file.",
        },
        target: {
          type: "string",
          enum: ["global", "project"],
          description:
            "global = ~/.cursor/agents (default). project = <project_root>/.cursor/agents — requires project_root when target is project.",
        },
        project_root: {
          type: "string",
          description:
            "Absolute path to the project root when target is project. Ignored when target is global.",
        },
        source_dir: {
          type: "string",
          description:
            "Optional absolute path to a cursor-agents directory. If omitted, resolves next to the installed mcp-runrunit package.",
        },
      },
      required: [],
    },
  },
  /**
   * @namedTools runrunit_upload_image_cloudinary
   */
  {
    name: "runrunit_upload_image_cloudinary",
    description:
      "Faz upload de uma imagem para a Cloudinary e retorna a URL pública (secure_url). Usa as variáveis CLOUDINARY_* já configuradas no MCP (ex.: em mcp.json). Use para screenshots, evidências, PRs e comentários.",
    inputSchema: {
      type: "object" as const,
      properties: {
        file_path: {
          type: "string",
          description: "Caminho absoluto ou relativo do arquivo de imagem no disco (ex.: path retornado por browser_take_screenshot).",
        },
        public_id: {
          type: "string",
          description: "ID público opcional na Cloudinary (ex.: pr-evidencia-desktop, docs-screenshot-1).",
        },
      },
      required: ["file_path"],
    },
  },
  /**
   * @namedTools runrunit_discord_send_message
   */
  {
    name: "runrunit_discord_send_message",
    description:
      "Send a message to a Discord channel. Use for execution history or notifications. Requires BOT_RUNRUNIT_REPORT and channel_id.",
    inputSchema: {
      type: "object" as const,
      properties: {
        channel_id: { type: "string", description: "Discord channel ID" },
        content: { type: "string", description: "Message text (max 2000 characters)" },
        task_id: { type: "number", description: "Optional Runrun.it task ID for context" },
        project_id: { type: "number", description: "Optional project ID for context" },
      },
      required: ["channel_id", "content"],
    },
  },
  /**
   * @namedTools runrunit_discord_create_channel
   */
  {
    name: "runrunit_discord_create_channel",
    description:
      "Create a text channel in the Discord server (guild) if not exists, use comparison with name 'Client 1' -> 'client-1' to avoid create duplicate channels. Use guild_id from env (DISCORD_GUILD_ID) or pass explicitly. One channel per client pattern.",
    inputSchema: {
      type: "object" as const,
      properties: {
        name: { type: "string", description: "Channel name (slug, e.g. client-name alaways for legible, ex: 'Client 1' -> 'client-1')" },
        guild_id: { type: "string", description: "Discord guild (server) ID (optional if DISCORD_GUILD_ID set)" },
        parent_id: { type: "string", description: "Category channel ID (optional)" },
        topic: { type: "string", description: "Channel topic (optional)" },
      },
      required: ["name"],
    },
  },
  /**
   * @namedTools runrunit_discord_list_channels
   */
  {
    name: "runrunit_discord_list_channels",
    description:
      "List channels in the Discord server. Uses DISCORD_GUILD_ID or resolves from DISCORD_CHANNEL_ID.",
    inputSchema: {
      type: "object" as const,
      properties: {
        guild_id: { type: "string", description: "Discord guild ID (optional if env set)" },
      },
      required: [],
    },
  },
  /**
   * @namedTools runrunit_discord_get_or_create_channel
   */
  {
    name: "runrunit_discord_get_or_create_channel",
    description:
      "Get or create a Discord text channel for a Runrun.it client (1 channel per client, use client_name always avaliable transform to slug. ex: 'Client 1' -> 'client-1'). Returns channel_id and channel_name. Use before runrunit_discord_send_message to ensure the channel exists.",
    inputSchema: {
      type: "object" as const,
      properties: {
        client_id: { type: "string", description: "Runrun.it client ID (or number as string)" },
        client_name: { type: "string", description: "Client name (used for channel name if client_id not provided)" },
        guild_id: { type: "string", description: "Discord guild ID (optional)" },
      },
      required: [],
    },
  },
];

function textContent(text: string): { type: "text"; text: string }[] {
  return [{ type: "text", text }];
}

/** Stages allowed when moving backward (return). Only these two are permitted. */
const ALLOWED_BACKWARD_STAGE_NAMES = ["task", "blocked task"];

function resolveStageByName(
  stages: Array<{ id: number; name: string }>,
  name: string,
): number | null {
  const normalized = name.trim().toLowerCase();
  const exact = stages.find((s) => s.name.toLowerCase() === normalized);
  if (exact) return exact.id;
  const partial = stages.find(
    (s) =>
      s.name.toLowerCase().includes(normalized) ||
      normalized.includes(s.name.toLowerCase()),
  );
  return partial?.id ?? null;
}

type StageWithPosition = { id: number; name: string; position: number };

/**
 * Validates move: tasks must only advance. Backward move is allowed only to
 * "Task" or "Blocked Task" (impediment / not finished). Returns error message or null if allowed.
 */
function validateStageMove(
  currentStage: StageWithPosition,
  targetStage: StageWithPosition,
): string | null {
  if (currentStage.id === targetStage.id) {
    return "Task is already in this stage. No move needed.";
  }
  const isForward = targetStage.position > currentStage.position;
  if (isForward) return null;
  const targetNameNorm = targetStage.name.trim().toLowerCase();
  const allowed = ALLOWED_BACKWARD_STAGE_NAMES.some(
    (n) => targetNameNorm === n || targetNameNorm.includes(n) || n.includes(targetNameNorm),
  );
  if (allowed) return null;
  return `Moving backward is only allowed to 'Task' or 'Blocked Task' (e.g. impediment). Cannot move from '${currentStage.name}' back to '${targetStage.name}'. Tasks should only advance stages.`;
}

/**
 * Cria e configura a instância do MCP Server com todas as tools Runrun.it.
 * Usado tanto pelo entry stdio (index.ts) quanto pelo servidor HTTP (server.ts).
 */
export function createMcpServer(): Server {
  const server = new Server(
    {
      name: "mcp-runrunit",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: TOOLS,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const a = (args || {}) as Record<string, unknown>;

    try {
      let result: unknown;

      switch (name) {
        case "runrunit_list_projects": {
          const params = {
            client_id: a.client_id as number | undefined,
            project_group_id: a.project_group_id as number | undefined,
            is_closed: a.is_closed as boolean | undefined,
            is_active: a.is_active as boolean | undefined,
            page: a.page as number | undefined,
            limit: a.limit as number | undefined,
          };
          result = await projects.listProjects(params);
          break;
        }
        case "runrunit_list_tasks": {
          const params = {
            ids: a.ids as string | undefined,
            user_id: a.user_id as string | undefined,
            follower_id: a.follower_id as string | undefined,
            responsible_id: a.responsible_id as string | undefined,
            assignee_id: a.assignee_id as string | undefined,
            filter_id: a.filter_id as number | string | undefined,
            board_stage_id: a.board_stage_id as number | undefined,
            project_id: a.project_id as number | undefined,
            is_closed: a.is_closed as boolean | undefined,
            is_working_on: a.is_working_on as boolean | undefined,
            sort: a.sort as string | undefined,
            sort_dir: a.sort_dir as "asc" | "desc" | undefined,
            page: a.page as number | undefined,
            limit: a.limit as number | undefined,
          };
          result = await tasks.listTasks(params);
          break;
        }
        case "runrunit_list_task_filters":
          result = await tasks.listTaskFilters();
          break;
        case "runrunit_list_board_stages":
          result = await tasks.listBoardStages(Number(a.board_id));
          break;
        case "runrunit_move_task_stage": {
          const taskId = Number(a.task_id);
          const boardStageId = a.board_stage_id as number | undefined;
          const boardStageName = a.board_stage_name as string | undefined;
          if (
            (boardStageId == null || !Number.isInteger(boardStageId)) &&
            (boardStageName == null || String(boardStageName).trim() === "")
          ) {
            result = {
              error: "Provide either board_stage_id or board_stage_name to move the task.",
              task_id: taskId,
            };
            break;
          }
          const task = (await tasks.getTask(taskId)) as {
            board_id?: number;
            board_stage_id?: number;
          };
          const boardId = task?.board_id;
          if (boardId == null || !Number.isInteger(boardId)) {
            result = {
              error:
                "Task has no board_id; cannot resolve or validate stage. Use board_stage_id from runrunit_list_board_stages.",
              task_id: taskId,
            };
            break;
          }
          const stagesRaw = (await tasks.listBoardStages(boardId)) as Array<{
            id?: number;
            name?: string;
            position?: number;
          }>;
          const stagesWithPosition: StageWithPosition[] = stagesRaw.map((s) => ({
            id: Number(s.id),
            name: String(s.name ?? ""),
            position: Number(s.position ?? 0),
          }));
          const stages = stagesWithPosition.map((s) => ({ id: s.id, name: s.name }));
          let targetStage: StageWithPosition | null = null;
          if (boardStageId != null && Number.isInteger(boardStageId)) {
            targetStage = stagesWithPosition.find((s) => s.id === boardStageId) ?? null;
            if (targetStage == null) {
              result = {
                error: `board_stage_id ${boardStageId} not found on this board. Use runrunit_list_board_stages to see valid stages.`,
                task_id: taskId,
                board_id: boardId,
              };
              break;
            }
          } else if (boardStageName != null && String(boardStageName).trim() !== "") {
            const resolvedId = resolveStageByName(stages, boardStageName);
            if (resolvedId == null) {
              result = {
                error: `No board stage matching '${boardStageName}'. Available stages: ${stages.map((s) => `${s.name} (id: ${s.id})`).join(", ")}`,
                task_id: taskId,
                board_id: boardId,
              };
              break;
            }
            targetStage = stagesWithPosition.find((s) => s.id === resolvedId) ?? null;
          }
          if (targetStage == null) {
            result = {
              error: "Could not resolve target stage.",
              task_id: taskId,
            };
            break;
          }
          const currentStageId = task?.board_stage_id;
          const currentStage =
            currentStageId != null
              ? stagesWithPosition.find((s) => s.id === currentStageId)
              : null;
          if (currentStage == null) {
            result = await tasks.moveTask(taskId, targetStage.id);
            break;
          }
          const validationError = validateStageMove(currentStage, targetStage);
          if (validationError != null) {
            result = {
              error: validationError,
              task_id: taskId,
              current_stage: currentStage.name,
              target_stage: targetStage.name,
            };
            break;
          }
          result = await tasks.moveTask(taskId, targetStage.id);
          break;
        }
        case "runrunit_get_task":
          result = await tasks.getTask(Number(a.id));
          break;
        case "runrunit_list_subtasks":
          result = await tasks.listSubtasks(Number(a.task_id));
          break;
        case "runrunit_create_task": {
          result = await tasks.createTask({
            task: {
              title: String(a.title),
              type_id: Number(a.type_id),
              ...(a.description != null && String(a.description).length > 0
                ? { description: String(a.description) }
                : {}),
              board_stage_id: Number(a.board_stage_id),
              board_name: String(a.board_name),
              board_stage_name: String(a.board_stage_name),
              project_id: a.project_id != null ? Number(a.project_id) : undefined,
              project_name: String(a.project_name),
              on_going: a.on_going as boolean | undefined,
              desired_date: a.desired_date != null ? String(a.desired_date) : undefined,
              desired_start_date: a.desired_start_date != null ? String(a.desired_start_date) : undefined,
              tag_list: a.tag_list != null ? String(a.tag_list) : undefined,
              assignments: a.assignments as Array<{ assignee_id: string; team_id?: number }> | undefined,
            },
          });
          break;
        }
        case "runrunit_update_task": {
          const taskPayload = taskUpdateToApiPayload(a.task as Record<string, unknown>);
          result = await tasks.updateTask(Number(a.id), { task: taskPayload });
          break;
        }
        case "runrunit_delete_task":
          await tasks.deleteTask(Number(a.id));
          result = { deleted: true, id: a.id };
          break;
        case "runrunit_create_workflow":
          result = await tasks.createWorkflow(Number(a.task_id));
          break;
        case "runrunit_assignment_play":
          result = await tasks.assignmentPlay(Number(a.task_id), String(a.assignment_id));
          break;
        case "runrunit_list_task_comments":
          result = await comments.listTaskComments(Number(a.task_id));
          break;
        case "runrunit_get_comment":
          result = await comments.getComment(Number(a.id));
          break;
        case "runrunit_create_comment":
          result = await comments.createComment({
            task_id: Number(a.task_id),
            text: String(a.text),
          });
          break;
        case "runrunit_update_comment":
          result = await comments.updateComment(Number(a.id), String(a.text));
          break;
        case "runrunit_delete_comment":
          await comments.deleteComment(Number(a.id));
          result = { deleted: true, id: a.id };
          break;
        case "runrunit_comment_reaction":
          result = await comments.commentReaction(Number(a.comment_id), String(a.emoji));
          break;
        case "runrunit_create_external_comment":
          result = await comments.createExternalComment(
            Number(a.task_id),
            String(a.text),
          );
          break;
        case "runrunit_suggest_devs_with_free_queue": {
          const params = {
            limit: a.limit as number | undefined,
            team_id: a.team_id as string | undefined,
            tribe_id: a.tribe_id as string | undefined,
            squad_id: a.squad_id as string | undefined,
            project_tag: a.project_tag as string | undefined,
            project_id: a.project_id as number | undefined,
            developer_ids: a.developer_ids as string[] | undefined,
            only_active_devs: a.only_active_devs as boolean | undefined,
            board_id: a.board_id as number | undefined,
            task_stage_ids: a.task_stage_ids as number[] | undefined,
            load_strategy: a.load_strategy as
              | "tasks_and_time"
              | "only_tasks"
              | "only_time"
              | undefined,
            include_zero_tasks: a.include_zero_tasks as boolean | undefined,
            only_developers: a.only_developers as boolean | undefined,
          };
          result = await devSuggestions.suggestDevsWithFreeQueue(params);
          break;
        }
        case "runrunit_project_detect_platform": {
          const taskId = Number(a.task_id);
          if (!Number.isInteger(taskId) || taskId < 1) {
            result = {
              detected: false,
              message: "task_id deve ser um número inteiro positivo (ID da task no Runrun.it).",
            };
            break;
          }
          const task = (await tasks.getTask(taskId)) as Parameters<typeof detectPlatformFromTask>[0];
          const detected = detectPlatformFromTask(task);
          if (detected === null) {
            result = {
              detected: false,
              message:
                "Nenhuma plataforma conhecida encontrada nas tags da task. Adicione tags como node, react, python, php, go, rust, etc. na task no Runrun.it para identificar a plataforma.",
              task_id: taskId,
            };
          } else {
            result = {
              detected: true,
              platform: detected.platform,
              platform_label: detected.platformLabel,
              start_command: detected.startCommand,
              alternate_commands: detected.alternateCommands,
              package_manager: detected.packageManager,
              detected_by: detected.detectedBy,
              hint: detected.hint,
              task_id: taskId,
            };
          }
          break;
        }
        case "runrunit_upload_image_cloudinary": {
          result = await uploadImageCloudinary(
            String(a.file_path),
            a.public_id != null ? String(a.public_id) : undefined
          );
          break;
        }
        case "runrunit_install_cursor_skills": {
          const targetRaw = a.target != null ? String(a.target).trim() : "";
          const target =
            targetRaw === "project"
              ? ("project" as const)
              : ("global" as const);
          result = installCursorSkills({
            dry_run: a.dry_run === true,
            skill_names: Array.isArray(a.skill_names)
              ? (a.skill_names as unknown[]).map((x) => String(x))
              : undefined,
            target,
            project_root:
              a.project_root != null ? String(a.project_root) : undefined,
            source_dir:
              a.source_dir != null ? String(a.source_dir) : undefined,
          });
          break;
        }
        case "runrunit_install_cursor_agents": {
          const targetAgentsRaw =
            a.target != null ? String(a.target).trim() : "";
          const targetAgents =
            targetAgentsRaw === "project"
              ? ("project" as const)
              : ("global" as const);
          result = installCursorAgents({
            dry_run: a.dry_run === true,
            agent_names: Array.isArray(a.agent_names)
              ? (a.agent_names as unknown[]).map((x) => String(x))
              : undefined,
            target: targetAgents,
            project_root:
              a.project_root != null ? String(a.project_root) : undefined,
            source_dir:
              a.source_dir != null ? String(a.source_dir) : undefined,
          });
          break;
        }
        case "runrunit_discord_send_message": {
          result = await discord.sendMessage(
            String(a.channel_id),
            String(a.content),
            {
              taskId: a.task_id != null ? Number(a.task_id) : undefined,
              projectId: a.project_id != null ? Number(a.project_id) : undefined,
            }
          );
          break;
        }
        case "runrunit_discord_create_channel": {
          const guildId =
            (a.guild_id as string | undefined)?.trim() ||
            (await discord.getDefaultGuildId());
          result = await discord.createChannel({
            name: String(a.name),
            guildId,
            parentId: (a.parent_id as string | undefined)?.trim() || undefined,
            topic: (a.topic as string | undefined)?.trim() || undefined,
          });
          break;
        }
        case "runrunit_discord_list_channels": {
          const guildId =
            (a.guild_id as string | undefined)?.trim() ||
            (await discord.getDefaultGuildId());
          result = await discord.listChannels(guildId);
          break;
        }
        case "runrunit_discord_get_or_create_channel": {
          result = await discord.getOrCreateChannelForClient({
            clientId: (a.client_id as string | undefined)?.trim() || undefined,
            clientName: (a.client_name as string | undefined)?.trim() || undefined,
            guildId: (a.guild_id as string | undefined)?.trim() || undefined,
          });
          break;
        }
        default:
          return {
            content: textContent(`Unknown tool: ${name}`),
            isError: true,
          };
      }

      return {
        content: textContent(JSON.stringify(result, null, 2)),
      };
    } catch (err) {
      const message =
        err instanceof RunrunitAPIError
          ? `${err.message}${err.body ? ` ${JSON.stringify(err.body)}` : ""}`
          : err instanceof Error
            ? err.message
            : String(err);
      return {
        content: textContent(`Error: ${message}`),
        isError: true,
      };
    }
  });

  return server;
}

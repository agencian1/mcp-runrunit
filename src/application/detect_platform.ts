/**
 * Detecção de plataforma a partir das **tags da task** no Runrun.it.
 * A entidade que identifica a plataforma do projeto é a task; as tags da task
 * indicam em qual stack/plataforma o trabalho está (ex.: node, react, python).
 * @see docs/Tasks.md (tags_data, tag_list, tags)
 */

export type DetectedPlatform = {
  platform: string;
  platformLabel: string;
  startCommand: string;
  alternateCommands?: string[];
  packageManager?: string;
  detectedBy: string;
  hint?: string;
};

export type TaskWithTags = {
  tags_data?: Array<{ name: string; color?: string }>;
  tag_list?: string;
  tags?: Array<{ name?: string }>;
};

type TagMapping = {
  tagNames: string[];
  platform: string;
  platformLabel: string;
  startCommand: string;
  alternateCommands?: string[];
  packageManager?: string;
  hint?: string;
};

const TAG_TO_PLATFORM: TagMapping[] = [
  {
    tagNames: ["node", "nodejs", "npm", "yarn", "pnpm", "bun", "react", "next", "vue", "angular", "nestjs", "express"],
    platform: "node",
    platformLabel: "Node.js (npm/yarn/pnpm/bun)",
    startCommand: "npm run dev",
    alternateCommands: ["npm run start", "yarn dev", "pnpm dev", "bun run dev"],
    packageManager: "npm",
    hint: "Se o projeto usar yarn/pnpm/bun, use o lockfile correspondente (yarn.lock, pnpm-lock.yaml, bun.lockb).",
  },
  {
    tagNames: ["shopify"],
    platform: "shopify",
    platformLabel: "Shopify",
    startCommand: "shopify theme dev --live-reload=full-page --store=url-da-loja.myshopify.com",
    packageManager: "shopify",
    hint: "Lembre-se de atualizar a url no comando, se o projeto usar yarn/pnpm/bun, use o lockfile correspondente (yarn.lock, pnpm-lock.yaml, bun.lockb).",
  },
  {
    tagNames: ["VTEXIO", "vtex io", "vtex"],
    platform: "vtex",
    platformLabel: "VTEX",
    startCommand: "vtex link",
    packageManager: "vtex",
    hint: "Lembre-se de verificar o workspace e o account no comando vtex whoami",
  },
  {
    tagNames: ["python", "django", "flask", "fastapi", "uv"],
    platform: "python",
    platformLabel: "Python",
    startCommand: "uv run <seu-script>",
    packageManager: "uv",
    hint: "Recomendado: uv venv && source .venv/bin/activate (ou .venv\\Scripts\\activate no Windows).",
  },
  {
    tagNames: ["pip", "requirements"],
    platform: "python",
    platformLabel: "Python (pip)",
    startCommand: "pip install -r requirements.txt && python main.py",
    packageManager: "pip",
    hint: "Recomendado: python -m venv .venv && ativar o venv antes de pip install.",
  },
  {
    tagNames: ["ruby", "rails", "bundler"],
    platform: "ruby",
    platformLabel: "Ruby",
    startCommand: "bundle install && bundle exec ruby <app>",
    packageManager: "bundler",
  },
  {
    tagNames: ["rust", "cargo"],
    platform: "rust",
    platformLabel: "Rust",
    startCommand: "cargo run",
  },
  {
    tagNames: ["go", "golang"],
    platform: "go",
    platformLabel: "Go",
    startCommand: "go run .",
  },
  {
    tagNames: ["php", "composer", "laravel"],
    platform: "php",
    platformLabel: "PHP",
    startCommand: "composer install && php -S localhost:8000",
    packageManager: "composer",
  },
  {
    tagNames: ["dotnet", "csharp", ".net", "csproj"],
    platform: "dotnet",
    platformLabel: ".NET",
    startCommand: "dotnet run",
  },
  {
    tagNames: ["dart", "flutter"],
    platform: "dart",
    platformLabel: "Dart / Flutter",
    startCommand: "dart run",
  },
  {
    tagNames: ["java", "maven", "spring", "spring-boot"],
    platform: "maven",
    platformLabel: "Java (Maven)",
    startCommand: "mvn spring-boot:run",
    packageManager: "maven",
  },
  {
    tagNames: ["gradle", "gradlew"],
    platform: "gradle",
    platformLabel: "Java (Gradle)",
    startCommand: "./gradlew run",
    packageManager: "gradle",
  },
];

function extractTagNames(task: TaskWithTags): string[] {
  const names: string[] = [];
  if (Array.isArray(task.tags_data)) {
    for (const t of task.tags_data) {
      if (t?.name && typeof t.name === "string") names.push(t.name.trim().toLowerCase());
    }
  }
  if (typeof task.tag_list === "string" && task.tag_list.trim()) {
    const fromList = task.tag_list.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
    for (const n of fromList) {
      if (!names.includes(n)) names.push(n);
    }
  }
  if (Array.isArray(task.tags)) {
    for (const t of task.tags) {
      const name = (t as { name?: string })?.name;
      if (typeof name === "string" && name.trim()) {
        const lower = name.trim().toLowerCase();
        if (!names.includes(lower)) names.push(lower);
      }
    }
  }
  return names;
}

/**
 * Identifica a plataforma a partir das tags da task no Runrun.it.
 * Retorna a primeira correspondência entre as tags da task e o mapeamento tag → plataforma.
 */
export function detectPlatformFromTask(task: TaskWithTags): DetectedPlatform | null {
  const tagNames = extractTagNames(task);
  if (tagNames.length === 0) return null;

  const normalized = tagNames.map((n) => n.toLowerCase());
  for (const mapping of TAG_TO_PLATFORM) {
    const hasMatch = mapping.tagNames.some((t) =>
      normalized.some((n) => n === t || n.includes(t) || t.includes(n))
    );
    if (hasMatch) {
      return {
        platform: mapping.platform,
        platformLabel: mapping.platformLabel,
        startCommand: mapping.startCommand,
        alternateCommands: mapping.alternateCommands,
        packageManager: mapping.packageManager,
        detectedBy: "task_tags",
        hint: mapping.hint,
      };
    }
  }
  return null;
}

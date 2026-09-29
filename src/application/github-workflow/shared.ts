import type { WorkflowPlan } from '../../domain/github-workflow.js';

export function errorMessage(err: unknown): string {
  return err instanceof Error ? err.message : 'Falha inesperada.';
}

export function requireProjectRoot(projectRoot: string | undefined): string | null {
  const root = projectRoot?.trim();
  return root ? root : null;
}

export function rejected(skill: string, summary: string, warnings: string[] = []): WorkflowPlan {
  return {
    status: 'rejected',
    skill,
    summary,
    actions: [],
    warnings,
    next_tool: null,
  };
}

#!/usr/bin/env bash
# Rejeita commits cuja primeira linha fuja do formato da skill format-commit-message:
#   [numero da task] - [tipo] - [descrição]
# Tipos: feat, fix, docs, refactor, test, chore, perf
#
# Uso (hook commit-msg):
#   bash cursor-skills/platforms/github/format-commit-message/validate-commit-msg.sh "$1"
#
# Em branch task_[número], o número da mensagem tem de ser o da branch.
# Merges, reverts e fixup!/squash!/amend! passam direto.
# COMMIT_MSG_BRANCH sobrepõe a branch detectada (útil em testes).

set -euo pipefail

types='feat|fix|docs|refactor|test|chore|perf'

reject() {
  printf '\nCommit rejeitado:\n%s\n\n' "$1" >&2
  exit 1
}

expected_format() {
  cat <<'EOF'
Formato esperado: [numero da task] - [tipo] - [descrição]
Tipos: feat, fix, docs, refactor, test, chore, perf
Exemplo: 12345 - feat - adiciona suporte a cupom no carrinho
EOF
}

if [[ $# -lt 1 || -z "${1:-}" ]]; then
  echo 'Uso: validate-commit-msg.sh <ficheiro-da-mensagem>' >&2
  exit 1
fi

msg_file=$1
if [[ ! -f "$msg_file" ]]; then
  echo "Arquivo de mensagem não encontrado: $msg_file" >&2
  exit 1
fi

subject=''
IFS= read -r subject < "$msg_file" || true
subject=${subject#$'\ufeff'}
subject=${subject%$'\r'}
# trim
subject="${subject#"${subject%%[![:space:]]*}"}"
subject="${subject%"${subject##*[![:space:]]}"}"

if [[ -z "$subject" ]]; then
  reject 'A mensagem de commit não pode estar vazia.'
fi

subject_lower=$(printf '%s' "$subject" | tr '[:upper:]' '[:lower:]')
if [[ "$subject" =~ ^Merge[[:space:]] ]] \
  || [[ "$subject" =~ ^Revert[[:space:]]\" ]] \
  || [[ "$subject_lower" =~ ^(fixup!|squash!|amend!) ]]; then
  exit 0
fi

if [[ ! "$subject" =~ ^([0-9]+)\ -\ (${types})\ -\ ([^[:space:]].*)$ ]]; then
  reject "$(expected_format)"
fi

task="${BASH_REMATCH[1]}"

branch="${COMMIT_MSG_BRANCH:-}"
if [[ -z "$branch" ]]; then
  branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)
fi

if [[ "$branch" =~ ^task_([0-9]+)$ ]]; then
  expected="${BASH_REMATCH[1]}"
  if [[ "$task" != "$expected" ]]; then
    reject "$(printf '%s\n%s' \
      "A branch ${branch} exige o número ${expected} na mensagem." \
      "$(expected_format)")"
  fi
fi

exit 0

#!/bin/sh

commit_message=$(cat "$1")

regex="^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)\(TEAM-[0-9]+\): .{1,50}$"

if ! echo "$commit_message" | grep -Eq "$regex"; then
  echo "ERROR: Commit message does not follow Conventional Commits guidelines."
  echo ""
  echo "Commit message format:"
  echo "  <type>(TEAM-<jira-ticket-number>): <description>"
  echo ""
  echo "Example:"
  echo "  feat(TEAM-123): add login functionality"
  echo ""
  echo "Allowed types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert"
  exit 1
fi

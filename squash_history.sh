#!/bin/bash
set -e

# Safety: Create backup branch
git branch -f backup_main_v2 main

# 1. Checkout the parent of the 5th commit (6e3045a)
git checkout 6e3045a

# 2. Create orphan branch for new clean history
git checkout --orphan new_history_root

# 3. Commit this state as Initial Commit
git add -A
git commit -m "Initial commit"

# 4. Cherry pick the last 5 commits
# 6e3045a is the parent, so range 6e3045a..ca46d53 includes the 5 commits
git cherry-pick 6e3045a..ca46d53

# 5. Force update main branch to this new history
git branch -f main new_history_root

# 6. Checkout main
git checkout main

# 7. Print status
echo "History rewritten. usage: git push --force origin main"
git log --oneline -n 6

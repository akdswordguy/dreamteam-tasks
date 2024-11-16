# 01 sub2

Welcome to my Git exercises walkthrough! This journey included a series of tasks designed to enhance proficiency in Git's core functionalities. Each task provided an opportunity to reinforce practical skills, experiment with advanced commands, and tackle real-world scenarios in version control.

🏆 Exercises Completed

### Exercise 1: Push a Commit

Commands:

```bash
git start master
git verify
```

Notes: Initialized the master branch and verified the setup. It was a simple, yet essential foundation for the exercises ahead.

### Exercise 2: Commit One File

Commands:

```bash
git add A.txt
git commit -m "Commit A.txt file"
```

Challenge Faced: Nothing.

### Exercise 3: Commit One File of Two Currently Staged

Commands:

```bash
git reset A.txt
git commit -m "Commit B.txt file"
```

Challenge Faced: Nothing.

### Exercise 4: Ignore Unwanted Files

Commands:

```bash
echo _.o > .gitignore
echo _.exe >> .gitignore
echo \*.jar >> .gitignore
echo libraries/ >> .gitignore
git add .gitignore
git commit -m "Ignore binary files"
```

Challenge Faced: Configuring .gitignore effectively for cleaner repositories.

### Exercise 5: Chase Branch That Escaped

Commands:

```bash
git merge escaped
git merge another-piece-of-work
echo 2+3=5 > equation.txt
git add equation.txt
git commit --no-edit
```

Challenge Faced: Handling multiple merges efficiently and managing merge conflicts.

### Exercise 6: Saving Your Work

Commands:

```bash
git stash

# fixed a bug

git commit -am "Fix a bug"
git stash pop
echo "Finally, finished it!" >> bug.txt
git commit -am "Finish my work"
```

Challenge Faced: Leveraging stash to preserve work in progress before committing bug fixes.

### Exercise 7: Change Branch History

Commands:

```bash
git rebase hot-bugfix
```

Challenge Faced: Gained familiarity with rebase and history modifications, critical for collaborative environments.

### Exercise 8: Remove Ignored File

Commands:

```bash
git rm ignored.txt
git commit -am "Remove the file that should have been ignored"
```

### Exercise 9: Change Letter Case in Filename

Commands:

```bash
git mv File.txt file.txt
git commit -am "Lowercase file.txt"
```

Challenge Faced: Naming consistency is essential, and git mv proved useful for case-sensitive changes.

### Exercise 10: Fix Typo in Last Commit

Commands:

# Corrected the typo in file and amended commit

```bash
git commit -a --amend
```

Challenge Faced: Using --amend effectively to correct mistakes in the latest commit.

### Exercise 11: Forge Commit Date

Commands:

```bash
git commit --amend --no-edit --date="1987-08-03"
```

Challenge Faced: Amending dates for record-keeping accuracy.

### Exercise 12: Fix Typo in Older Commit

Commands:

```bash
git rebase -i HEAD^^
```

# Marked first commit with "edit," fixed typo, and continued

Challenge Faced: Interactive rebase was crucial for modifying specific commits in history.

### Exercise 13: Find Lost Commit

Commands:

```bash
git reflog
git reset --hard HEAD@{1}
```

Challenge Faced: Understanding reflog for recovering lost commits.

### Exercise 14: Split the Last Commit

Commands:

```bash
git reset HEAD^
git add first.txt
git commit -m "First.txt"
git add second.txt
git commit -m "Second.txt"
```

Challenge Faced: Mastering commit separation for a cleaner history.

### Exercise 15: Too Many Commits

Commands:

```bash
git rebase -i HEAD^^
```

# Used "squash" on the second commit

Challenge Faced: Combining multiple commits to reduce clutter in commit history.

### Exercise 16: Make File Executable by Default

Commands:

```bash
git update-index --chmod=+x script.sh
```

Challenge Faced: Setting executable permissions on files, which was crucial for scripts.

### Exercise 17: Commit Part of Work

Commands:

```bash
git add -p file.txt
```

# Staged selective changes

Challenge Faced: Leveraging partial staging to commit specific changes.

### Exercise 18: Pick Your Features

Commands:

```bash
git cherry-pick feature-a
git cherry-pick feature-b
git cherry-pick feature-c

# Resolved conflicts

git cherry-pick --continue
```

Challenge Faced: Selecting specific commits from other branches proved essential for isolated feature integration.

### Exercise 19: Rebase Complex

Commands:

```bash
git rebase issue-555 --onto your-master
```

Challenge Faced: Understanding rebase commands for complex branch management.

### Exercise 20: Change Commit Order

Commands:

```bash
git rebase -i HEAD~2
```

Challenge Faced: Reordering commits, useful for making history more logical.

### Exercise 21: Find Swear Words in Commits

Commands:

```bash
git log -S"swearword"
git rebase -i <found commit>^
```

Challenge Faced: Searching commit history effectively.

### Exercise 22: Find Commit That Introduced Bug

Commands:

```bash
git bisect start
git bisect bad HEAD
git bisect good 1.0
```

Challenge Faced: Used bisect to isolate problematic code.

🎉 Completion Screenshot
After successfully completing each exercise, I received a congratulatory message. Here’s a screenshot of my final achievement, as promised.

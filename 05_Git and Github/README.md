#  Git and Github

## Topics covered

- [Basic Cmds](#basic-git-cmds)
- [Push  code from local repo to remote](#pushing-a-local-repo-to-remote-repo)
- [Set git username and email](#set-username-and-email-for-git-globally)
- [Workflow](#workflow-on-git-and-github)
- [Branch cmds](#branch-related-cmds)
- [Merge code](#mergeing-code-from-two-branches)
    - [Using git cmds](#merging-using-git-cmds)
    - [Using github](#merging-using-github-creating-a-pr)
- [Fixing Mistakes](#commands-to-fix-mistakes)
    - [Stages Changes](#case-1-staged-changes)
    - [Commited changes: one commit](#case-2-commited-changes-only-one-commit)
    - [Commited changes: many commits](#case-3-commited-changes-for-many-commits)

<br>

## Git
- It is a free and open source version control system.
- A tool that  helps track changes made in the code.

<br>

## Github
- Website where we host all our local reepositories online

<br>
<br>

## Using Git
Three ways to use Git
- with Command line: [Git Bash/ terminal](https://git-scm.com/downloads)
- with IDE / Code Editors: [ex: VS Code](https://code.visualstudio.com/)
- GUI: Graphical user Interface: [ex: Github desktop or GitKraken](https://www.gitkraken.com/)

<br>
<br>

## Set Username and Email for Git: (Globally)

- To set username: `git config --global user.name "your_name"`

<br>

- To set email: `git config --global user.email "your_email`

<br>
<br>

## Basic Git Cmds

| no. | cmd | description |
| --- | --- | --- |
| 1 | `git clone <repo_link>` | copy or duplicate a repo | <br>
| 2 | `git status` | track changes made in repo |
| 3-1 | `git add <fileName>` | add new or changed files |
| 3-2 | `git add .` | add all the files at once |
| 4 | `git commit -m "msg"` | chnges to be staged |
| 5-1 | `git push origin main` | upload local repo content remote repo or / online |
| 5-2 | `git push -u origin main` | set upstream, then use only `git push` cmd to push your code |
| 6 | `git init` | initialize or create a new repo locally |
| 7 | `git commit -am "msg"` | add and commit at the same time |
| 8 | `git pull origin main` | pull data from remote to local |

<br>
<br>

**[push]**: **local** *(laptop/system)* >>> __*uploading*__ >>> **remote** *(github)*

<br>

**[pull]**: **remote** *(github)* >>> __*downloading*__ >>> **local** *(laptop/system)*

<br>
<br>

## Pushing a local repo to remote repo

- Create an empty local repo and initialize it
    - `mkdir <repo_name>`
    - `git init`

<br>

- Create an empty repo on github

<br>

- Add the remote repo origin link to the local repo
    - `git remote add origin <repo_link>`

<br>

- Verify the origin link
    - `git remote -v`

<br>

- Check the current branch you are on
    - `git branch`

<br>

- Change branch name to main
    - `git branch -M main`

<br>

- Add files or modift them, then commit the files

<br>

- Push the files to remote repo

<br>
<br>

## Workflow on Git and GitHub
**[Git]** >>> [code some changes] >>> [`add`: stage changes] >>> [`commit`: commit changes] >>> [`push`: push code to remote repo]

<br>

**[GitHub]** >>> [add file or modify] >>> [commit changes]

<br>
<br>

## Branch Related cmds

| no. | cmd | description |
| ----- | ----- | ----- |
| 1 | `git branch` | check current branch |
| 2 | `git branch -M main` | rename branch |
| 3 | `git checkout <branch_name>` | navigate to branch name |
| 4 | `git checkout -b <branch_name>` | create new branch |
| 5 | `git branch -d <branch_name>` | delete branch name |
| 6 | `git push --set-upstream origin <branch_name>` | push code on duplicate branch |

<br>
<br>

## Mergeing Code from two branches
Two ways to merge code from different branches
- Using Git cmds: [Git cmds](#merging-using-git-cmds)
- Using Github website: creating a pr: [Create PR](#merging-using-github-creating-a-pr)

### Merging Using Git cmds
- Compare the two branches you want to merge
    - `git diff <branch_name>`

<br>

- Merge the branches: write the name of branch you want to merge with
    - `git merge <branch_name>`

<br>
<br>

### Merging Using Github: Creating a PR
- Open a pull brequest on github
    - compare and pull branches

<br>

- Select the branches you want to merge
    - **[`base`: main]** <<< changes from *`compare`* going to *`base`* <<< **[`compare`: duplicate]

<br>

- Add title and message while merging. good practice

<br>

- create a Pull Request

<br>

- Conflicts are checked

<br>

- Merge Pull Request
    - Merging PR is a commit in itself

- Confirm Merge

<br>
<br>

## Commands to fix mistakes
### Case 1: Staged Changes
- we `add` the changes, not commit them. Maybe the added changes are unnecessary changes.

<br>

- to remove these unnecessary changes, we reset to previous state
    - `git reset <file_name>`: to change back a single file
    - `git reset`: to change back to a previous state

<br>

### Case 2: Commited Changes (only one commit)
- when we commit a change that  we didn't want / accidently happend to commit them

<br>

- we can reset one commit, go back one commit by this cmd
    - `git seset HEAD~1`: HEAD here points to the last commit we  made

<br>

### Case 3: Commited changes (for many commits)
- when we want to undo various number of commits

<br>

- we need **`commit hash`** in such scenarios
    - To get **`commit hash`** use cmd: `git log`
    - `git log`: gives history of commits made in reversed chronological order

<br>

- Copy the **`commit hash`**  of the commit you want to get back to and then use the following cmd:
    - `git reset <commit_hash>`

<br>

- If you want to remove all the changes made all along then you can hard reset:
    - `git reset --hard <commit_hash>`

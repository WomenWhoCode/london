# Contributing Guidelines
---


Firstly thanks for your contributions!!! :sparkling_heart::sparkling_heart:  


## PRE-REQUISITE

1. 📖 Read up on fork & pull request models
2. 🍴 Fork this repo to your account
3. 🌱 Create a branch for the change you intend to make in your fork
4. ✍️ Make your changes to the above created branch in your fork
5. 🔨 Follow the contributing guidelines below
6. 🔧 Send a pull request from your fork's branch to our `master` branch
7. 🎉 Get your pull request approved - success!

## ⭐ How To Make A Pull Request:

**1.** Start by making a Fork of the [**WomenWhoCode/london**](https://github.com/WomenWhoCode/london) repository. Click on the <a href="https://github.com/WomenWhoCode/london/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/london
```

**3.** Navigate to the newly created LinkFree project directory:

```bash
cd london
```


**4.** Create a new branch:

```bash
git checkout -b [fix/feat/doc]/YourBranchName
```

for example: `doc/add_resource_material`

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

**6.**  ### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:
```bash
git add <file/folder>
```

```bash
git commit 
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**11.** **Congratulations!** You've made your first contribution to [**WWCode-London mentorship program**](https://github.com/WomenWhoCode/WWCode-London/blob/main/CONTRIBUTING.md)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**


## Style Guide for Git Commit Messages :memo:

**How you can add more value to your contribution logs:**

- Use the present tense. (Example: "Add feature" instead of "Added feature")
- Use the imperative mood. (Example: "Move item to...", instead of "Moves item to...")
- Limit the first line (also called the Subject Line) to _50 characters or less_.
- Capitalize the Subject Line.
- Separate subject from body with a blank line.
- Do not end the subject line with a period.
- Wrap the body at _72 characters_.
- Use the body to explain the _what_, _why_, _vs_, and _how_.

## Best practices

- Write clear and meaningful git commit messages.
- If the PR will *completely* fix a specific issue, include `fixes #123` in the PR body (where 123 is the specific issue number the PR will fix. This will automatically close the issue when the PR is merged.
- Make sure you don't include `@mentions` or `fixes` keywords in your git commit messages. These should be included in the PR body instead.
- When you make a PR for small change (such as fixing a typo, style change, or grammar fix), please squash your commits so that we can maintain a cleaner git history.
- Make sure you include a clear and detailed PR description explaining the reasons for the changes, and ensuring there is sufficient information for the reviewer to understand your PR.
- Additional Readings:
    - [chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)
    - [github.com/blog/1506-closing-issues-via-pull-requests ](https://github.com/blog/1506-closing-issues-via-pull-requests)
    - [davidwalsh.name/squash-commits-git ](https://davidwalsh.name/squash-commits-git)


## Reporting issues OR suggesting changes/features to the existing repo:

1. In order to discuss changes, you are welcome to [open an issue](https://github.com/WomenWhoCode/london/issues) about what you would like to contribute. Enhancements are always encouraged and appreciated.
2. A repository owner will review the issue and provide feedback.

## All the best! 🥇
# Finvest Coach
### Table of Contents
- Workflow
- Next.js & NextUI Template
- Technologies Used
- Install dependencies
- Run the development server
- License

# Workflow
1. **Fork this repository**
  - Click the "Fork" button to create your own copy of the repository.
2. **Clone your fork**
  - Clone forked repository: git clone [forked repository URL]
3. **Create a New Branch**
  - Create a new branch for changes: git checkout -b feature-branch-name
4. **Make Changes and Commit**
  - Make changes
  - Stage and commit 
5. **Fetch and merge changes**
  - Before pushing changes, fetch the latest changes from the main repository and merge them into the feature branch
  - Resolve any merge conflicts locally
6. **Push Changes to Fork**
  - Push the feature branch to the fork on GitHub
7. **Create Pull Request**
  - On GitHub, navigate fork and create a pull request to merge feature-branch into the main branch of the main repository.

# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

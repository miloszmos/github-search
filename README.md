## Getting Started

React + TypeScript app using the GitHub V4 GraphQL API.

## Graphql Github API

You will need to generate a personal access token to connect to the GitHub GraphQL API.

To do this navigate to [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)

- and generate key for public usage

Replace your `NEXT_PUBLIC_ACCESS_TOKEN` with your token and rename `local.env` file to `.env.local`.

Run the development server:

```bash
npm i
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Pre-commit

Husky runs liters

### Graphql Gen

To make `graphql-codegen` to work configure `local.codegen.yml` file with your `github` access token and rename it to just `codegen.yml`

### Vercel - CI / CD

App is built on Next.js with Vercel deployment, live version can be found:
[https://github-search-sand.vercel.app/](https://https://github-search-sand.vercel.app/)

`master` branch is deployed automatically when merging feature branches, each `feature branch` can be tested separately thanks to Vercel atomic deployment

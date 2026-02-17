# aider-wrapper

Minimal VSCode extension scaffold using TypeScript, esbuild, Vitest, Yarn 4, and GitHub Actions CI.

## Development

```bash
corepack enable
yarn install --immutable
yarn build
```

## Scripts

- `yarn lint`
- `yarn typecheck`
- `yarn test --run`
- `yarn build`
- `yarn package`
- `yarn verify`

## Run Extension

1. Open this folder in VSCode.
2. Run the `Run Extension` launch target (Extension Development Host).
3. Open the `Aider` activity bar item to view the chat panel placeholder.

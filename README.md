# Sofia TMS project

## Node JS, Typescript, Express, Postgres, ORM

> TMS = ticket management system. Why Sofia? Nice question...

### Install

- install TS: `npm install --save-dev typescript ts-node @types/node`
- install Express: `npm install express`
- install types for Express `npm install --save-dev @types/express`
- install linter and formatter `npm install --save-dev eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier`

### Run

- `npx ts-node src/index.ts`

### Test

bash:
`curl localhost:3002/` should be return string

### Format and lint code

```bash
npm run format && npm run lint
```
# Sofia TMS project

## Node JS, Typescript, Express, Postgres, ORM

> TMS = ticket management system. Why Sofia? Nice question...

### Install

- install TS: `npm install --save-dev typescript ts-node @types/node`
- install Express: `npm install express`
- install types for Express `npm install --save-dev @types/express`
- install formatter `npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier`
- install linter `npm init @eslint/config@latest`
- install Jest `npm install --save-dev jest ts-jest @types/jest`

### Run

- `npx ts-node src/index.ts`

### Test

bash:
`curl localhost:3002/` should be return string

### Format and lint code

```bash
npm run format && npm run lint
```
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
- install Prisma ORM `npm install prisma --save-dev`
- install Prisma ORM Client `npm install @prisma/client`

### Run

- `npx ts-node src/index.ts`
- daemon run: `npm run dev`

### Test

bash:
`curl localhost:3002/` should be return string

### Format and lint code

`npm run format && npm run lint`

### Prisma ORM

[Prisma ORM guide](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

TODO:
- [x] Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
- [x] Write `prisma.schema`
- [x] Run `prisma db pull` to turn your database schema into a Prisma schema.
- [x] Run `prisma generate` to generate the Prisma Client. You can then start querying your database.

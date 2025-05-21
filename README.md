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

> Ticket status: `0 = NEW, 1 = IN_PROGRESS, 2 = COMPLETED, 3 = CANCELLED`

- init `npx prisma init --datasource-provider sqlite --output ../generated/prisma`
- migrate `npx prisma migrate dev --name init`
- pull `npx prisma db pull`
- client generate `npx prisma generate`
- to update database from prisma schema `npx prisma migrate dev`

[Prisma ORM guide](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

### TODO:

- [x] Ticker router
- [ ] Ticker controller
- [ ] Ticker repository

# Sofia TMS project

> TMS = ticket management system. Why Sofia? Nice question...

## Бэкенд приложение с использованием стека: `Node JS, Typescript, Express, SQdLite, Prisma ORM`.

База данных состоит из одной таблицы Ticket (обращение), в котором есть следующие столбцы:
1. id
2. topic (тема обращения)
3. message (текст обращения)
4. status (0 - новое обращение, 1 - в работе, 2 - завершено, 3 - отменено. Есть кастомный enum тип в файле ticket.types.ts)
5. resolution
6. cancelledReason
7. createdAt
8. updatedAt

Вся БД описана в файле `prisma/prisma.schema`. А сам файл появится в этой папке.

эндпоинты:
base url: `http://localhost:3002/api/tickets`
- POST /create (создать обращение, нужно передать тему (`topic`) и текст обращения (`message`))
- PUT /progress (взять обращение в работу, передать `id` обращения)
- PUT /complete (завершить обращение, передать `id` и решение `resolution`)
- PUT /cancel (отмена обращения, передать `id` и причину `cancelledReason`)
- PUT /cancel-all (отмена всех обращений которые в работе, передать `id` и причину `cancelledReason`)
- GET / (получить все обращения с фильтром по диапазону дат, передать дату начала `fromDate`, дату окончания `toDate` в формате `2025-05-22`)

### Quick start

- создать файл в корне `.env` похожий на `example.env`
- установить все пакеты `npm install`
- создать файл SQLite базы данных и инициировать `npx prisma migrate dev`
- запустить сервер в режиме разработки `npm run dev`
- сделать сборку и запустить сервер в режиме продакшн `npm run build && npm run prod`
- запустить все е2е тесты чтобы проверить все эндпоинты (сервер должен быть запущен) `npm run test`

### Format and lint code

`npm run format && npm run lint`

### Prisma ORM

> Ticket status: `0 = NEW, 1 = IN_PROGRESS, 2 = COMPLETED, 3 = CANCELLED`

- init `npx prisma init --datasource-provider sqlite --output ../generated/prisma`
- migrate `npx prisma migrate dev --name init`
- pull `npx prisma db pull`
- client generate `npx prisma generate`
- to update database from prisma schema `npx prisma migrate dev`
- status DB `npx prisma migrate status`

[Prisma ORM guide](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

### TODO:

- [x] Ticker router
- [x] Ticker controller
- [x] Ticker model
- [ ] Test #6 to dynamic date

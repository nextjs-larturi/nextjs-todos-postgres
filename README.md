# Todos App - Next 14 App Router

## Getting Started

1. Generate the .env based on .env.template

2. Start the Postgres database with Docker

```bash
docker compose up -d
```

3. Run the development server:

```bash
npm install

npm run dev
```

4. Prisma commands

```bash
npx prisma init

npx prisma migrate dev

npx prisma generate
```

5. Run seed to create fake todos in the database

```bash
localhost:3000/api/seed
```

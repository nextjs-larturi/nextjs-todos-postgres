# Todos App - Next 14 App Router

## Getting Started

**Generate the .env based on .env.template.**

**Start the Postgres database with Docker:**

```bash
docker compose up -d
```

**Install dependences and run the development server:**

```bash
npm install

npm run dev
```

**Prisma commands to generate the database:**

```bash
npx prisma migrate dev

npx prisma generate
```

**Run seed to create fake todos in the database:**

```bash
localhost:3000/api/seed
```

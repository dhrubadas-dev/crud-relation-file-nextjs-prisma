# 🚀 crud-relation-file-nextjs-prisma

> A compact, fast CRUD demo using **Next.js**, **Prisma**, and **SQLite** with a focus on relations and file-style structure. Perfect for learning or kickstarting small projects. ✨

---

## 🔍 Quick Overview

- **Author:** Dhruba Das
- **License:** MIT
- **Homepage:** https://github.com/dhrubadas-dev/crud-relation-file-nextjs-prisma

---

## 📦 Key Features

- ✅ Clean Next.js (app router) structure
- ✅ Prisma ORM with a simple **Teacher ↔ Student** relationship
- ✅ Tailwind CSS and component-driven UI
- ✅ Form handling with `react-hook-form` and validation (`zod`, `yup`)
- ✅ Small, single-file SQLite datasource for easy local use

---

## 🛠️ Quickstart (Interactive)

1. Install dependencies
   - npm: `npm install`
   - bun: `bun install`

2. Generate Prisma client and run migrations

```bash
npm run migrate     # runs prisma migrate dev && prisma generate
# or
npm run studio      # opens Prisma Studio
```

3. Run dev server

```bash
npm run dev         # next dev
# then open http://localhost:3000
```

Try these interactive actions in the UI:

- Add a Teacher ➕
- Add a Student linked to a Teacher 👩‍🏫 ➜ 👨‍🎓
- Toggle theme with the top-right button 🌗
- Use the Faker generator for sample data 🎲 (see `src/hooks/fakerGenerator.ts`)

---

## 🗂️ Project Structure (Highlights)

- `src/app` — Routes & pages (app router)
- `src/components` — UI components & forms
- `src/lib` — helpers, prisma client, zod schemas
- `prisma/schema.prisma` — DB schema (TeacherTable, StudentTable)
- `generated/prisma` — Prisma client output

---

## 📊 Versions & Environment

| Item           | Version / Requirement |
| -------------- | --------------------- |
| Project        | **1.0.0**             |
| Next.js        | **^16.1.0**           |
| React          | **^19.2.3**           |
| Prisma         | **^7.2.0**            |
| @prisma/client | **^7.2.0**            |
| TypeScript     | **^5.9.3**            |
| Tailwind CSS   | **^4.1.18**           |
| Node engine    | **>=22.x.x**          |
| npm            | **>=11.x.x**          |

> These versions are taken from `package.json` and `prisma/schema.prisma` at the time of writing.

---

## 🎛️ Notes & Tips

- Want prettier icons in your terminal or editor? Install a **Nerd Font** (e.g., JetBrainsMono Nerd Font or Fira Code Nerd Font) and enable it in your terminal emulator — useful for terminal UI and icons. 💡
  - Nerd Fonts: https://www.nerdfonts.com/
- If you rely on `bun`, the project also works with bun's installer and runner for development (`bun install`, `bun dev` if configured).

---

## 🧩 How to Contribute

- Clone the repo, create a feature branch, and open a PR.
- Run `npm run lint` and `npm run build` before submitting.

---

## ❤️ Thanks

If you enjoyed the repo, give it a ⭐ on GitHub and feel free to open issues or PRs. Happy hacking! 🛠️

---

_Generated README — updated with interactive/visual improvements, emoji accents, and a versions table._

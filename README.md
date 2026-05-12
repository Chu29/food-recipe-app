# Food Recipe App

A React recipe browser and personal cookbook built with Vite. The app includes a landing page, recipe catalog, favorites view, recipe detail modal, and local create/edit/delete workflows.

## Features

- Browse seeded recipes from `src/data/Data.json`
- Search recipes by name
- Add custom recipes with image URLs or uploaded local images
- Edit and delete recipes
- Mark recipes as favorites and view them on a dedicated favorites page
- View recipe details, ingredients, instructions, servings, prep time, ratings, and image galleries
- Persist recipe changes in browser local storage
- Client-side routing for `/`, `/recipes`, `/favorites`, and `/community`

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- TanStack Query
- ky
- lucide-react
- ESLint 9
- pnpm

## Getting Started

### Prerequisites

- Node.js 20 or newer
- pnpm 10.33.0 or compatible

### Run Locally

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Move into the project directory:

```bash
cd food-recipe-app
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Project Structure

```text
src/
  assets/              Static frontend assets
  components/          Reusable UI components grouped by atoms, molecules, organisms, and templates
  context/             Food context provider and shared recipe actions
  data/                Seed recipe data
  hooks/               Custom hooks for context access and local storage
  pages/               Route-level pages
  services/            API client helpers
  utils/               Shared constants
```

## Data and Persistence

The app starts with seeded recipe data from `src/data/Data.json`. User-created recipes, edits, deletes, and favorite selections are stored in browser local storage under the `foodData` key.

The `src/services` API helpers are configured for `https://dummyjson.com/recipes`, but the current recipe screens use the local context-backed data flow.

## Deployment

This project is ready for static deployment on Vercel. The `vercel.json` rewrite sends all routes to `index.html` so React Router can handle client-side navigation.

```bash
pnpm build
```

Deploy the generated `dist` output through Vercel or connect the repository to a Vercel project.

## Notes

- The `/community` route is currently a placeholder page.
- Uploaded recipe images are converted to data URLs and stored in local storage, so large images can increase browser storage usage.

## 👤 Author

**Developed by:** MUEGHE ABUEMKEZE CHU

Connect with me:

- 🐙 GitHub: [@chu29](https://github.com/chu29)
- 🐦 Twitter: [@unku_chu](https://twitter.com/unku_chu)
- 💼 LinkedIn: [MUEGHE ABUEMKEZE CHU](https://linkedin.com/in/chu-abuemkeze)
- 📧 Email: chu.amk22@gmail.com

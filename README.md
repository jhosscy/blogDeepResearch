# Deep Research Blog

Deep Research Blog is a content-focused website built with [Astro](https://astro.build) and using Deno as its JavaScript runtime. The project displays in-depth research articles written in Markdown.

## Overview

- **Markdown Posts:** Articles are stored in the `src/blogs` folder.
- **Dynamic Pages:** Each blog post is rendered dynamically using the `[slug].astro` route.
- **Modern Stack:** Built with Astro and Deno, it uses a clean layout, custom CSS, and interactive JavaScript for features like a table of contents.

## Project Structure

```plaintext
.
├── README.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── deno.lock
├── public
└── src
    ├── blogs
    ├── components
    ├── layouts
    └── pages
```

## Requirements

- [Deno](https://deno.land) must be installed.

## Setup and Commands

No installation of Node modules is needed. Instead, install the project with Deno:

```bash
deno install
```

Use the following Deno tasks to work with the project:

- **Development:**  
  ```bash
  deno task dev
  ```  
  This runs the local development server.

- **Build:**  
  ```bash
  deno task build
  ```  
  This builds the project for production.

- **Preview:**  
  ```bash
  deno task preview
  ```  
  This previews the production build (the command runs the server with full permissions).

## How It Works

- The **Layout** component (`src/layouts/Layout.astro`) sets up the header and overall page structure.
- The **Home Page** (`src/pages/index.astro`) shows a grid of blog articles using the **Article** component.
- The **Dynamic Blog Pages** (`src/pages/blog/[slug].astro`) load and render the Markdown content for each blog post along with a table of contents.

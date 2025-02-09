# Gloves Off Games

## 🚀 Project Overview

This is a Next.js-based website using **TypeScript**, **Tailwind CSS**, and **GraphQL** to fetch content from **Contentful**.

## 🛠️ Tech Stack

- **Next.js** – React framework for SSR and SSG
- **TypeScript** – Strictly typed JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Contentful** – Headless CMS for managing content
- **GraphQL** – Querying Contentful efficiently
- **ESLint & Prettier** – Code quality and formatting
- **Netlify** – Hosting and CI/CD

## 📦 Installation & Setup

Ensure you have **Node.js 18+** installed.

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/DouglasKGlover/gloves-off-games-next.git
cd gloves-off-games-next
```

### 2️⃣ Install Dependencies

```sh
npm install
# or
yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file (or copy the example) in the root directory and add:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### 4️⃣ Run the Development Server

```sh
npm run dev
# or
yarn dev
```

Access the site at **http://localhost:3000**.

## 📡 Fetching Content from Contentful

Content is retrieved using **GraphQL**. See the `/src/lib/` directory for the queries and functions.

## 🏗️ Development Guidelines

### Code Formatting

- Run ESLint & Prettier before committing:

```sh
npm run lint
npm run format
```

## 📜 License

This project is licensed under the **MIT License**.

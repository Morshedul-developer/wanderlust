<div align="center">

# 🌍 Wanderlust

**A modern travel discovery web application**
built with Next.js 16, React 19, HeroUI & Better Auth

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)](YOUR_LIVE_LINK_HERE)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)

🔗 **Backend Repo:** [wanderlust-server](https://github.com/Morshedul-developer/wanderlust-server)

</div>

---

## 🌟 Overview

Wanderlust is a full-stack travel discovery platform where users can explore destinations, plan trips, and share their travel experiences. Built with a modern decoupled architecture — Next.js frontend paired with a dedicated Express.js REST API backend.

---

## ✨ Features

- 🔐 **User Authentication** — Secure sign-up & login powered by Better Auth
- 🗺️ **Destination Discovery** — Browse and explore travel destinations
- 👤 **User Profiles** — Personalized user profile management
- 💫 **Modern UI** — Clean and responsive design with HeroUI components
- 📱 **Fully Responsive** — Mobile-friendly layout with Tailwind CSS v4
- ⚡ **Fast Performance** — Next.js App Router with server-side rendering

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| UI Library | React 19 |
| Component Library | HeroUI v3 |
| Styling | Tailwind CSS v4 |
| Authentication | Better Auth v1.6 |
| Database | MongoDB v7 |
| DB Adapter | @better-auth/mongo-adapter |
| Icons | React Icons, Gravity UI Icons |

---

## 📁 Project Structure

```
wanderlust/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   │   ├── api/          # Auth API routes
│   │   └── ...
│   ├── components/       # Reusable UI components
│   └── lib/              # Auth config & utilities
├── next.config.mjs
├── package.json
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account
- npm / yarn / pnpm
- Backend server running → [wanderlust-server](https://github.com/Morshedul-developer/wanderlust-server)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Morshedul-developer/wanderlust.git
cd wanderlust
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

Deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard
4. Deploy!

---

## 👨‍💻 Author

**Morshedul Islam Nijhum**

[![GitHub](https://img.shields.io/badge/GitHub-Morshedul--developer-181717?style=flat&logo=github)](https://github.com/Morshedul-developer)
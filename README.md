# JurassicVerse 🦖

An interactive digital museum for exploring dinosaurs, prehistoric eras, and paleontology — built for **Web Wonders 2026** under the **Jurassic Time** theme.

JurassicVerse lets visitors browse a full dinosaur database, explore an interactive geological timeline, walk through a full-screen virtual museum tour, view select species in interactive 3D, compare dinosaurs head-to-head, test their knowledge with a dynamically generated quiz, and log their own real-world fossil finds.

---

## Features

### Core
- **Dinosaur Collection** — browse, search, and filter dinosaurs by name, diet, or era
- **Detailed Dinosaur Pages** — full species profiles with images, stats, and descriptions
- **User Accounts** — separate Admin and User roles; anyone can register to take quizzes and log fossil finds
- **Admin Dashboard** — full CRUD management for dinosaurs and eras, including image uploads, 3D model assignment, and credit attribution
- **Fully Responsive** — desktop, tablet, and mobile, including a dedicated mobile navigation drawer
- **Server-side Validation** — every write endpoint validates input with Zod before touching the database
- **Accessibility** — keyboard focus indicators, skip-to-content link, Escape-to-close modals, alt text on all images

### Interactive & Bonus
- **Interactive Timeline** — a visual, scrollable journey through geological eras
- **Virtual Museum Tour** — a full-screen, scroll-driven walkthrough with one "exhibit hall" per era
- **3D Model Viewer** — select dinosaurs can be viewed as interactive, drag-to-rotate 3D models (Three.js), toggled alongside their photo
- **Dinosaur Quiz** — multiple-choice questions generated live from the real dinosaur database, with a persistent leaderboard
- **Fossil Finds** — logged-in users can upload photos and notes of their own "fossil discoveries," building a public community gallery
- **Compare Tool** — pick any two dinosaurs and see their stats side-by-side with animated comparison bars
- **"Which Dinosaur Are You?"** — a just-for-fun personality quiz mapping answers to a matching dinosaur

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, Vite, React Router, Tailwind CSS |
| **Animation & 3D** | Framer Motion, GSAP, React Three Fiber, Three.js / Drei |
| **Backend** | Node.js, Express 5, Prisma ORM, Zod |
| **Data & Auth** | MySQL, JSON Web Tokens, bcryptjs, Multer |

---

## Project Structure

```
Copy/
├── client/          React frontend (Vite)
│   └── src/
│       ├── pages/       Route-level pages (Home, Explore, Timeline, Quiz, Compare, Admin, ...)
│       ├── components/  Shared and feature-specific UI components
│       └── services/    API call wrappers
└── server/          Express backend
    └── src/
        ├── routes/       API route definitions
        ├── controllers/  Request handlers
        ├── services/     Business logic / database access
        ├── validations/  Zod schemas for input validation
        └── middleware/   Auth guards, upload handling
```

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MySQL running locally

### 1. Clone and install

```bash
git clone <repo-url>
cd Copy

cd server
npm install

cd ../client
npm install
```

### 2. Configure environment variables

**`server/.env`**
```
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/virtual_dino_museum"
JWT_SECRET=your_long_random_secret_here
JWT_EXPIRES_IN=7d
```

**`client/.env`**
```
VITE_API_URL=http://localhost:5000
```

### 3. Set up the database

```bash
cd server
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

This creates the database tables and a seeded admin account:
- **Email:** `admin@jurassicverse.com`
- **Password:** `admin123`

### 4. Run the app

```bash
# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev
```

The client runs at `http://localhost:5173`, the API at `http://localhost:5000`.

---

## Usage

- **Browse as a guest** — explore dinosaurs, the timeline, museum tour, compare tool, and about page without an account
- **Sign up** (`/register`) — create an account to take the quiz, appear on the leaderboard, and log fossil finds
- **Admin login** — use the seeded admin credentials above to access `/admin` and manage eras/dinosaurs

### Key Routes
| Route | Description |
|---|---|
| `/` | Homepage |
| `/explore` | Full dinosaur collection with search |
| `/timeline` | Geological era timeline |
| `/museum-tour` | Full-screen virtual walkthrough |
| `/compare` | Side-by-side dinosaur comparison |
| `/quiz` | Knowledge quiz (login required) |
| `/fossils` | Community fossil find gallery |
| `/which-dinosaur-are-you` | Fun personality quiz |
| `/admin` | Admin dashboard (admin only) |

---

## 3D Model Credits

3D model credits are managed per-dinosaur through the admin panel and displayed automatically wherever a model is used (footer and About page), satisfying CC-BY attribution requirements without any manual upkeep as more models are added.

---

## Built For

Web Wonders 2026 — Jurassic Time theme, a web development competition for first-year engineering students.

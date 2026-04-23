# VoiceNote

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,tailwind,nodejs,express,mongodb,cloudinary" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%2019-blue" />
  <img src="https://img.shields.io/badge/Backend-Node%20%2B%20Express-green" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/Auth-JWT%20Cookies-orange" />
  <img src="https://img.shields.io/badge/Status-Production--Ready-success" />
</p>

VoiceNote is a production-ready MERN notes platform focused on **secure authentication, user-owned data, and clean UX**.
Unlike basic CRUD demos, this project implements **real-world patterns** like cookie-based authentication, protected routes, structured API errors, and media lifecycle management.

---

## Live Demo

🔗 [View Live App](https://voicenote-alpha.vercel.app)

## Screenshots

### 🔐 Login / Landing Page

![Login Page](./frontend/src/assets/screenshots/voicenote_landing.png)

### 📝 Notes Dashboard

![Dashboard](./frontend/src/assets/screenshots/voicenote_home.png)

### ⚙️ Account Settings

![Settings](./frontend/src/assets/screenshots/voicenote_settings.png)

## Features

- JWT authentication stored in HTTP-only cookies.
- Protected client-side routes and server-side authorization.
- Registration validation with field-level error mapping for clean form feedback.
- Full note CRUD scoped to the signed-in user.
- Single-note read and edit flow for focused updates.
- Bulk delete with confirmation and undo-friendly UI behavior.
- Account settings for profile edits, avatar upload, and account deletion.
- Cloudinary profile uploads with instant preview and cleanup of replaced images.
- Field-specific API error handling for duplicate email and username cases.
- Responsive dark UI with toast feedback, skeleton loading states, and polished empty states.

## ⚙️ Tech Stack

| Area            | Stack                                                                            |
| --------------- | -------------------------------------------------------------------------------- |
| Frontend        | React 19, TypeScript, Vite, React Router DOM 7, Tailwind CSS 4, Vercel Analytics |
| UI / Feedback   | Sonner, React Icons                                                              |
| Backend         | Node.js, Express 5, MongoDB, Mongoose, Express Validator                         |
| Auth / Security | JWT, bcrypt, cookie-parser, CORS                                                 |
| Media Uploads   | Multer, multer-storage-cloudinary, Cloudinary                                    |
| Tooling         | Prettier, prettier-plugin-tailwindcss                                            |

> Built with a modern full-stack architecture focused on scalability, clean separation of concerns, and production-ready practices.

## Project Structure

```text
mern-notes-app/
├── backend/
│   ├── app.js              # Express app, middleware, routes, DB connection
│   ├── server.js           # Server bootstrap
│   ├── config/             # MongoDB and Cloudinary configuration
│   ├── controllers/        # Auth, notes, and user handlers
│   ├── middlewares/        # JWT protection, validation, and file upload handling
│   ├── models/             # User and note schemas
│   ├── routes/             # Auth, notes, and user endpoints
│   ├── validators/         # Auth input validation rules
│   └── utils/              # Token helpers
└── frontend/
    ├── src/api/            # Auth, note, and user API wrappers
    ├── src/components/     # Navbar, note form, notes grid, route guard, skeletons
    ├── src/layout/         # Auth and app shells
    ├── src/pages/          # Landing, register, home, note, edit, settings, 404
    ├── src/types/          # TypeScript models and API error shapes
    ├── context/            # Auth context provider
    ├── hooks/              # Auth hook
    └── src/utils/          # Shared frontend helpers
```

## Installation & Setup

```bash
git clone <repo-url>
cd mern-notes-app
```

```bash
cd backend
npm install
```

```bash
cd ../frontend
npm install
```

Create `backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=3000
NODE_ENV=development
```

Run the app in two terminals:

```bash
cd backend
npm run dev
```

```bash
cd frontend
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:3000`

## Environment Variables

| Variable                | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `MONGO_URI`             | MongoDB connection string                |
| `JWT_SECRET_KEY`        | Signs and verifies auth cookies          |
| `CLOUD_NAME`            | Cloudinary cloud name                    |
| `CLOUDINARY_API_KEY`    | Cloudinary API key                       |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret                    |
| `PORT`                  | Optional server port, defaults to `3000` |
| `NODE_ENV`              | Controls production cookie security      |
| `VITE_API_BASE_URL`     | Base URL for frontend API requests       |

The frontend uses an environment-based API configuration. Create `frontend/.env` with `VITE_API_BASE_URL=http://localhost:3000` during local development.

> In production, this points to the deployed backend URL.

---

## API Endpoints

All protected endpoints require the auth cookie.

### Auth

- `POST /register` - Create an account and issue a session cookie.
- `POST /login` - Authenticate and issue a session cookie.
- `GET /logout` - Clear the session cookie.

### Notes

- `GET /` - API working message.
- `GET /api/health` - Health check.
- `POST /add` - Create a note.
- `GET /read` - Fetch the current user’s notes.
- `GET /read/:id` - Fetch one note.
- `PUT /update/:id` - Update a note.
- `DELETE /delete/:id` - Delete one note.
- `DELETE /deleteAll` - Delete all notes for the current user.

### User

- `GET /getUser` - Fetch the current user profile.
- `PUT /updateUser` - Update profile fields.
- `POST /upload` - Upload a profile image to Cloudinary.
- `DELETE /deleteUser` - Delete the user and their notes.

## Key Engineering Highlights

- Cookie-based auth keeps the session HTTP-only and avoids localStorage token handling.
- `protect` middleware enforces ownership on the server, while `ProtectedRoutes` guards the UI.
- Auth, notes, and user APIs are split into dedicated frontend modules for clean ownership.
- Registration validation runs through `express-validator` and a shared middleware, so the UI can map duplicate email and username issues precisely.
- Protected route transitions use skeleton loaders, which keeps refreshes feeling fast and stable.
- Profile uploads replace the previous Cloudinary asset instead of leaking stale images.
- The auth context bootstraps the signed-in user once and drives the app state from there.
- Vercel Analytics is wired into the app for lightweight production usage visibility.

## Challenges & Learnings

- Coordinating cookie-based auth across refreshes required a reliable user bootstrap flow.
- Image uploads added state sync and cleanup concerns beyond typical CRUD.
- Field-level API errors made the UX better, but they also required a consistent backend error shape.
- Optimistic deletion UX needed care to keep the interface responsive without hiding failures.

## Future Improvements

- Add search, filters, and pagination for larger note sets.
- Support markdown or richer formatting for notes.
- Expand validation coverage for note updates and profile changes.
- Add automated tests for auth, ownership, and upload flows.

## Author

- Author: Hafeez Mohammad
- Repository: VoiceNote

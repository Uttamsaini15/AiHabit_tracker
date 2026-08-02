# 🧠 AI Habit Tracker

A full-stack habit tracking web application with AI-powered insights, built using the MERN stack and Google's Gemini API. Track your daily habits, get personalized suggestions, weekly progress reports, and motivational nudges — all powered by AI.

**Live Demo:** [https://ai-habit-tracker-iota.vercel.app](https://ai-habit-tracker-iota.vercel.app)

---

## ✨ Features

- 🔐 **User Authentication** — Secure JWT-based register/login system with hashed passwords
- ✅ **Habit Management** — Create, update, archive, and reorder daily/weekly habits
- 📊 **Progress Tracking** — Log habit completions and view streaks over time
- 🤖 **AI-Powered Weekly Reports** — Personalized weekly summaries based on your habit data, generated via Gemini
- 💡 **AI Habit Suggestions** — Get 3 tailored habit recommendations based on your goals, productive time, and past struggles
- 🔄 **AI Recovery Plans** — A 3-day recovery plan generated when you break a streak
- 💬 **AI Chat Analysis** — Ask questions about your own habit data and get direct, data-backed answers
- 🌅 **Morning Motivation** — A short, personalized daily motivational message

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Axios for API communication
- JWT stored client-side for authenticated requests

**Backend**
- Node.js + Express
- MongoDB with Mongoose ODM
- JWT authentication
- bcryptjs for password hashing

**AI Integration**
- Google Gemini API (`@google/genai`) — model: `gemini-3.6-flash`

**Deployment**
- Backend: [Render](https://render.com)
- Frontend: [Vercel](https://vercel.com)
- Database: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📁 Project Structure

```
📁 AiHabit_tracker/
    ├── 📁 backend/
    │   ├── 📄 .gitignore
    │   ├── 📁 config/
    │   │   └── 🟨 db.js     # MongoDB connection
    │   ├── 📁 controller/
    │   │   ├── 🟨 aiController.js
    │   │   ├── 🟨 authController.js
    │   │   ├── 🟨 habitController.js
    │   │   └── 🟨 logController.js
    │   ├── 📁 middleware/
    │   │   ├── 🟨 auth.js             # JWT auth middleware (protect)
    │   │   └── 🟨 errorHandler.js     # 404 + global error handling
    │   ├── 📁 models/
    │   │   ├── 🟨 AIInsight.js
    │   │   ├── 🟨 Habit.js
    │   │   ├── 🟨 HabitLog.js
    │   │   └── 🟨 User.js
    │   ├── 🔢 package-lock.json
    │   ├── 🔢 package.json
    │   ├── 📁 routes/
    │   │   ├── 🟨 ai.js
    │   │   ├── 🟨 auth.js
    │   │   ├── 🟨 habit.js
    │   │   └── 🟨 logs.js
    │   ├── 📁 scripts/
    │   │   └── 🟨 seed.js
    │   ├── 🟨 server.js
    │   └── 📁 utils/
    │       ├── 🟨 aiServer.js       # Gemini client + chatCompletion
    │       └── 🟨 dateHelper.js
    └── 📁 frontend/
        ├── 📄 .gitignore
        ├── 📄 README.md
        ├── 🟨 eslint.config.js
        ├── 📄 index.html
        ├── 🔢 package-lock.json
        ├── 🔢 package.json
        ├── 🟨 postcss.config.js
        ├── 📁 public/
        │   ├── 🖼️ favicon.svg
        │   └── 🖼️ icons.svg
        ├── 📁 src/
        │   ├── ⚛️ App.jsx
        │   ├── 📁 api/
        │   │   └── 🟨 axios.js
        │   ├── 📁 assets/
        │   │   ├── 🖼️ hero.png
        │   │   ├── 🖼️ react.svg
        │   │   └── 🖼️ vite.svg
        │   ├── 📁 components/
        │   │   ├── ⚛️ AIChat.jsx
        │   │   ├── ⚛️ AIWeeklyReport.jsx
        │   │   ├── ⚛️ AppLayout.jsx
        │   │   ├── ⚛️ CategoryPieChart.jsx
        │   │   ├── ⚛️ HabitForm.jsx
        │   │   ├── ⚛️ HabitStatsCard.jsx
        │   │   ├── ⚛️ HabitSuggestionModal.jsx
        │   │   ├── ⚛️ HeatmapChart.jsx
        │   │   ├── ⚛️ LoadingSpinner.jsx
        │   │   ├── ⚛️ Markdown.jsx
        │   │   ├── ⚛️ MobileNav.jsx
        │   │   ├── ⚛️ Modal.jsx
        │   │   ├── ⚛️ MonthlyBarChart.jsx
        │   │   ├── ⚛️ MorningMotivation.jsx
        │   │   ├── ⚛️ OrbitingHabits.jsx
        │   │   ├── ⚛️ ProgressRing.jsx
        │   │   ├── ⚛️ ProtectedRoute.jsx
        │   │   ├── ⚛️ Sidebar.jsx
        │   │   ├── ⚛️ StreakRecoveryCard.jsx
        │   │   ├── ⚛️ SummaryCards.jsx
        │   │   ├── ⚛️ TodayHabitCard.jsx
        │   │   ├── ⚛️ WeeklyBarChart.jsx
        │   │   └── ⚛️ WeeklyGrid.jsx
        │   ├── 📁 context/
        │   │   ├── ⚛️ AuthContext.jsx
        │   │   └── ⚛️ ThemeContext.jsx
        │   ├── 🎨 index.css
        │   ├── ⚛️ main.jsx
        │   ├── 📁 pages/
        │   │   ├── ⚛️ Dashboard.jsx
        │   │   ├── ⚛️ Habits.jsx
        │   │   ├── ⚛️ Insights.jsx
        │   │   ├── ⚛️ Landing.jsx
        │   │   ├── ⚛️ Login.jsx
        │   │   ├── ⚛️ Register.jsx
        │   │   ├── ⚛️ Stats.jsx
        │   │   └── ⚛️ Weekly.jsx
        │   └── 📁 utils/
        │       ├── 🟨 confetti.js
        │       ├── 🟨 constants.js
        │       └── 🟨 dateHelpers.js
        └── 🟨 vite.config.js

```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A MongoDB Atlas account (or local MongoDB instance)
- A Google Gemini API key ([Google AI Studio](https://aistudio.google.com/))

### 1. Clone the repository

```bash
git clone https://github.com/Uttamsaini15/AIHabit_Tracker.git
cd AIHabit_Tracker
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash
CLIENT_URL=http://localhost:5173
PORT=8000
```

Start the backend server:

```bash
npm start
```

The API will run on `http://localhost:8000`.

### 3. Frontend setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` folder:

```env
VITE_API_URL=http://localhost:8000/api
```

Start the frontend dev server:

```bash
npm run dev
```

The app will run on `http://localhost:5173`.

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas (or local) connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `GEMINI_API_KEY` | API key for Google Gemini |
| `GEMINI_MODEL` | Gemini model to use (default: `gemini-3.6-flash`) |
| `CLIENT_URL` | Comma-separated list of allowed frontend origins (for CORS) |
| `PORT` | Port for the Express server (default: `8000`) |

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the backend API, including `/api` prefix |

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |

### Habits
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/habits` | Get all habits for the logged-in user |
| POST | `/api/habits` | Create a new habit |
| PUT | `/api/habits/:id` | Update a habit |
| DELETE | `/api/habits/:id` | Delete a habit |

### Logs
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/logs/mark-complete` | Mark a habit complete for a given date |

### AI Features
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/ai/weekly-report` | Generate a personalized weekly report |
| POST | `/api/ai/suggest-habits` | Get 3 AI-suggested habits based on user input |
| POST | `/api/ai/recovery-plan` | Get a 3-day recovery plan after a broken streak |
| POST | `/api/ai/chat` | Ask a question about your habit data |
| GET | `/api/ai/morning` | Get a short daily motivational message |

> All routes except `/api/auth/*` require an `Authorization: Bearer <token>` header.

---

## 🌐 Deployment

This project is deployed using a split architecture:

- **Backend** is deployed on **Render** as a free-tier Web Service, connected to MongoDB Atlas.
- **Frontend** is deployed on **Vercel**, built from the `frontend/` directory using Vite.
- CORS is configured on the backend to explicitly allow the deployed frontend origin via the `CLIENT_URL` environment variable.

> **Note:** The backend free tier on Render sleeps after periods of inactivity. The first request after idling may take 30–60 seconds to respond while the server wakes up.

---

## 🧩 Key Design Decisions

- **JWT-based auth** with tokens stored client-side and attached via an Axios request interceptor.
- **AI responses enforced as strict JSON** via system prompts, with defensive parsing on the backend (handles both array and object-wrapped response shapes) and a graceful fallback to default suggestions if the AI response fails to parse.
- **Environment-driven CORS** allowlist so the same codebase works seamlessly across local development and production without code changes.

---

## 🤝 Contributing

This is a personal learning project built for placement preparation, but suggestions and feedback are always welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Uttam Saini**
GitHub: [@Uttamsaini15](https://github.com/Uttamsaini15)


# PrepAI Assistant

PrepAI Assistant is a modern web app that helps you prepare for interviews using AI-powered question generation, answer review, and session management.

## Features
- AI-generated, role-specific interview questions
- Answer review and explanation
- Session creation and management
- User authentication and profile management
- Upload and display profile photos

## Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Node.js, Express, MongoDB
- **AI:** Gemini API

## Deployment
- **Frontend:** Deploy on Vercel
- **Backend:** Deploy on Render
- **Environment Variables:**
  - Frontend: `VITE_BACKEND_URL`, `VITE_GEMINI_API_KEY`
  - Backend: `DATABASE_URL`, `JWT_SECRET`, `PORT`

## Quick Start
1. Clone the repo
2. Set up `.env` files for both frontend and backend
3. Run backend: `npm install && npm start` in `/backend`
4. Run frontend: `npm install && npm run dev` in `/frontend/interview-prep-ai`

---
Crafted with ❤️ by Devesh Rajput

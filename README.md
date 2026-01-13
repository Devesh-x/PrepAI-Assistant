# PrepAI Assistant

![Screenshot 2025-07-08 134951](https://github.com/user-attachments/assets/ae24f7f5-5209-4828-a3c9-afb70bd556c0)

![hero-img](https://github.com/user-attachments/assets/9e8eacf8-99fd-463b-aadd-77245188449e)

PrepAI Assistant is a modern web app that helps you prepare for interviews using AI-powered question generation, answer review, and session management. It leverages **Google's Gemini 2.0 Flash** model to provide real-time, context-aware feedback and ultra-fast generation.

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

## Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Git](https://git-scm.com/)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devesh-x/PrepAI-Assistant.git
   cd PrepAI-Assistant
   ```

2. **Frontend Setup**
   ```bash
   cd frontend/interview-prep-ai
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm start
   ```

---
Crafted with ❤️ by Devesh Rajput

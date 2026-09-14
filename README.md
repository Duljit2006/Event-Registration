# GDG Event Registration Platform

A full-stack event registration web application built for the GDG Lead Selection Process. This platform allows users to browse event details, seamlessly authenticate with Google, register for the DevFest, and receive a beautifully designed HTML ticket directly in their email inbox.

## 🚀 Features

- **Google Authentication:** Secure, one-click login powered by Firebase Auth.
- **Real-time Database:** Attendee registrations and roles are persisted instantly to Cloud Firestore.
- **Dynamic Ticket Dashboard:** Registered users get a personalized dashboard featuring an auto-generated, scannable QR Code.
- **Automated Email Delivery:** Upon registration, an API route uses Nodemailer to instantly dispatch a customized HTML ticket to the user's inbox.
- **Responsive Design:** A polished, mobile-first UI built with Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS
- **Backend/API:** Next.js Serverless Route Handlers
- **Database & Auth:** Firebase (Firestore & Google Auth)
- **Email System:** Nodemailer & React Email (`@react-email/components`)
- **UI Components:** `react-qr-code`, `canvas-confetti`

## ⚙️ Local Setup Instructions

Follow these steps to get the project running on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/Duljit2006/Event-Registration.git
cd Event-Registration
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a file named `.env.local` in the root of the project and add your API keys. You will need a Firebase Project (with Auth and Firestore enabled) and a Gmail account with an App Password.

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"

# Email Configuration (Google App Password)
EMAIL_USER="your-gmail-address@gmail.com"
EMAIL_PASS="your-16-character-app-password"
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the application.

## 🌍 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
When importing the repository to Vercel, simply ensure that all variables from `.env.local` are added to the **Environment Variables** section in the Vercel dashboard prior to deployment so that Firebase and Nodemailer can securely authenticate in production.

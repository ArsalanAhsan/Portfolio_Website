# 🌐 Arsalan Ahsan — Personal Portfolio Website

A modern, responsive portfolio website built using **Next.js 13**, **TypeScript**, and **Tailwind CSS**, designed to showcase my experience, skills, and projects with a clean user interface and smooth animations.

---

## 🚀 Overview

This project features a visually engaging and user-friendly portfolio to highlight:

- Work experience and education
- Key technical skills
- Selected development projects with preview hover effects
- Contact form powered by Resend

---

## 🛠️ Technologies Used

- **Next.js 13 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Icons**
- **React Email** & **Resend**

---

## 📂 Project Structure

```bash
.
├── components/         # UI components like Header, Footer, Projects, etc.
├── app/                # Pages and layouts using App Router
├── public/images/      # Icons and images for tech stacks and projects
├── context/            # Theme and section scroll context
├── lib/                # Static data and hooks
├── styles/             # Tailwind global styles
├── .env.local          # Local environment variables
└── README.md

## 🧪 Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/ArsalanAhsan/Portfolio_Website.git
cd Portfolio_Website


### 📦 Install Dependencies

```bash
npm install


### 🔐 Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key



### ✉️ Update Email Recipient

In the `send-email.ts` file, update the `to` field to your own email address:

```ts
to: "your.email@example.com"

---

### ▶️ Run the Development Server

Start the development server by running:

```bash
npm run dev


# 📄 InvoiceAI - AI-Powered Invoice Generation System

> **InvoiceAI** is a sophisticated, AI-driven invoice management platform that streamlines the process of creating professional invoices. By leveraging the power of **Google Gemini AI**, users can generate detailed invoices from simple text prompts. Built with a modern tech stack (MERN + Vite), it offers a seamless experience for freelancers and businesses alike.

---

## ✨ Key Features

-   🤖 **AI-Powered Generation**: Transform simple text descriptions into structured, professional invoices using Google's Gemini AI.
-   📋 **Interactive Forms**: Manual invoice creation with real-time preview and automatic total/tax calculations.
-   📂 **Invoice Management**: Full CRUD operations (Create, Read, Update, Delete) for managing your billing history.
-   📧 **Email Invoicing**: Send invoice summaries directly to clients via email.
-   👤 **Business Profiles**: Save and manage your business details including logos, stamps, and digital signatures.
-   🔐 **Secure Authentication**: Robust user authentication and management powered by Clerk.
-   📁 **Asset Management**: Integrated with Cloudinary for secure storage of business logos and signatures.
-   📊 **Dashboard**: High-level overview of invoice status (Draft, Paid, Pending, etc.) via KPI cards.

---

## 🛠️ Tech Stack

### Frontend
-   **React 19** + **Vite** (Next-gen frontend tooling)
-   **Tailwind CSS 4.0** (Modern styling)
-   **Clerk React** (User authentication)
-   **React Router DOM** (Client-side routing)

### Backend
-   **Node.js** + **Express** (Robust API server)
-   **MongoDB** + **Mongoose** (Scalable database)
-   **Google GenAI** (Gemini AI integration)
-   **Nodemailer** (Email delivery)
-   **Cloudinary** (Cloud asset management)
-   **Multer** (File handling)

---

## 🏗️ Project Structure

```text
InvoiceAI/
├── README.md
├── backend/                       # Node.js + Express API
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js                  # Entry point
│   ├── .env
│   ├── config/                    # Database & Cloudinary config
│   │   ├── cloudinary.js
│   │   └── db.js
│   ├── controllers/               # Business logic for API
│   │   ├── businessProfileController.js
│   │   └── invoiceController.js
│   ├── models/                    # Mongoose schemas
│   │   ├── businessProfileModel.js
│   │   └── invoiceModel.js
│   ├── routes/                    # API route definitions
│   │   ├── aiInvoiceRouter.js
│   │   ├── businessProfileRouter.js
│   │   └── invoiceRouter.js
│   ├── uploads/                   # Local asset storage (fallback)
│   └── utils/                     # Helper functions (e.g., email)
│       └── sendEmail.js
├── frontend/                      # React + Vite application
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── README.md
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── main.jsx
│       ├── App.jsx                # Root component
│       ├── index.css
│       ├── components/            # Reusable UI components
│       │   ├── AiInvoiceModel.jsx
│       │   ├── AppShell.jsx
│       │   ├── Features.jsx
│       │   ├── Footer.jsx
│       │   ├── GeminiIcon.jsx
│       │   ├── Hero.jsx
│       │   ├── InvoicePreview.jsx
│       │   ├── KpiCard.jsx
│       │   ├── Navbar.jsx
│       │   ├── Pricing.jsx
│       │   └── StatusBadge.jsx
│       ├── pages/                 # Home, Dashboard, Invoices
│       │   ├── BusinessProfile.jsx
│       │   ├── CreateInvoice.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Home.jsx
│       │   ├── Invoices.jsx
│       │   └── NotFound.jsx
│       └── assets/                # Global assets (images, styles)
│           ├── dummyStyles.js
│           ├── logo.png
│           ├── react.svg
│           ├── sign.png
│           ├── stamp.png
│           └── GenerateBtn/
│               ├── Gbtn.css
│               └── Gbtn.jsx
```

---

## 🚀 Getting Started

### Prerequisites
-   Node.js (v18 or higher)
-   MongoDB Atlas account or local MongoDB
-   Clerk Dev Account
-   Gemini API Key
-   Cloudinary Account

### 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vishalprajapati15/AutoInvoiceX.git
    cd InvoiceAI
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add:
    ```env
    CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    MONGODB_URI=your_mongodb_uri
    DB_NAME=your_db_name
    GEMINI_API_KEY=your_gemini_api_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    SMTP_HOST=your_smtp_host
    SMTP_PORT=your_smtp_port
    SMTP_SERVICE=gmail
    SMTP_MAIL=your_email
    SMTP_PASSWORD=your_email_app_password
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory:
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
    ```

### ▶️ Running the Application

1.  **Start Backend Server:**
    ```bash
    cd backend
    npm start
    ```

2.  **Start Frontend Development Server:**
    ```bash
    cd frontend
    npm run dev
    ```

---

## 🔌 API Endpoints

### Invoices
-   `POST /api/invoice` - Create a new invoice
-   `GET /api/invoice` - List all invoices (filtered by user)
-   `GET /api/invoice/:id` - Get specific invoice details
-   `PUT /api/invoice/:id` - Update an existing invoice
-   `DELETE /api/invoice/:id` - Delete an invoice
-   `POST /api/invoice/send-email` - Send invoice via email

### AI & Profile
-   `POST /api/ai/generate` - Generate invoice JSON from text prompt
-   `GET /api/businessProfile/me` - Get current user's business profile
-   `POST /api/businessProfile` - Create/Update business profile

---

## 👤 Author

**Vishal Prajapati**
-   Github: [@vishalprajapati15](https://github.com/vishalprajapati15)
-   LinkedIn: [@vishalprajapati15](https://linkedin.com/in/vishalprajapati15)

## ⭐ Show your support

If this project helped you, please give it a star on GitHub!
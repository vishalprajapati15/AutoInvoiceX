# Welcome to InvoiceAI

> An AI-powered invoice generation system that collects user inputs through an interactive form and uses the Gemini API to automatically generate professional invoices and smart notes. Built with a client-server architecture for scalability and performance.

## Root Structure

    ├── frontend
    ├── backend
    └── README.md

------------------------------------------------------------------------

## Frontend Structure

    frontend
    ├── src
    │   ├── index.css
    │   ├── assets
    │   │   ├── logo.png
    │   │   ├── sign.png
    │   │   ├── stamp.png
    │   │   ├── GenerateBtn
    │   │   │   ├── Gbtn.jsx
    │   │   │   └── Gbtn.css
    │   │   │── react.svg
    │   ├── components
    │   │   ├── InvoicePreview.jsx
    │   │   ├── Footer.jsx
    │   │   ├── GeminiIcon.jsx
    │   │   ├── AiInvoiceModel.jsx
    │   │   ├── StatusBadge.jsx
    │   │   ├── KpiCard.jsx
    │   │   ├── Features.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Pricing.jsx
    │   │   └── AppShell.jsx
    │   ├── pages
    │   │   ├── Home.jsx
    │   │   ├── Dashboard.jsx
    │   │   └── Invoices.jsx
    │   ├── main.jsx
    │   └── App.jsx
    ├── .env
    ├── vite.config.js
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── eslint.config.js
    ├── README.md
    └── public
        └── vite.svg

### Description

-   **src/**: Main source folder for the React application.
-   **assets/**: Contains images, icons, and reusable UI assets.
-   **components/**: Reusable UI components.
-   **pages/**: Page-level components.
-   **main.jsx**: Application entry point.
-   **App.jsx**: Root React component.
-   **public/**: Publicly accessible static files.
-   **vite.config.js**: Vite configuration.
-   **.env**: Environment variables.

------------------------------------------------------------------------

## Backend Structure

    backend
    ├── config
    │   └── db.js
    ├── routes
    │   ├── invoiceRouter.js
    │   ├── businessProfileRouter.js
    │   └── aiInvoiceRouter.js
    ├── models
    │   ├── businessProfileModel.js
    │   └── invoiceModel.js
    ├── controllers
    │   ├── businessProfileController.js
    │   └── invoiceController.js
    ├── server.js
    ├── package.json
    └── .gitignore

### Description

-   **config/**: Database and environment configuration.
-   **routes/**: API route definitions.
-   **models/**: Mongoose/DB schema definitions.
-   **controllers/**: Business logic for routes.
-   **server.js**: Backend entry point.
-   **package.json**: Backend dependencies.

------------------------------------------------------------------------

## Notes

-   The frontend is built using **React + Vite**.
-   The backend uses **Node.js + Express**.
-   This structure follows a modular and scalable architecture.

------------------------------------------------------------------------

## Author

👤 **Vishal Prajapati**

* Github: [@vishalprajapati15](https://github.com/vishalprajapati15)
* LinkedIn: [@vishalprajapati15](https://linkedin.com/in/vishalprajapati15)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
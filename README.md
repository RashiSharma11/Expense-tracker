# ExpenseTracker

ExpenseTracker is a full-stack web application that allows users to track their expenses and analyze their spending habits. It includes a *React.js* frontend and a *Node.js/Express* backend integrated with a *MongoDB* database.

---

## Features

### Backend

- User authentication (login and registration).
- Add, retrieve, and filter transactions by frequency, type, and custom date range.
- MongoDB as the database for storing users and transactions.

### Frontend

- User-friendly interface for expense tracking.
- Visual analytics for better understanding of spending habits.
- React.js with components and routing for a seamless experience.

---

## Technologies Used

### Backend

- *Node.js*: Backend runtime.
- *Express.js*: Web framework.
- *MongoDB*: NoSQL database for storing users and transactions.
- *Mongoose*: MongoDB object modeling.
- *dotenv*: Environment variable management.
- *colors*: For console logs styling.
- *moment*: Date manipulation.
- *morgan*: HTTP request logger.

### Frontend

- *React.js*: Frontend framework.
- *Vite*: Build tool for fast development.
- *CSS*: Styling.

---

## Project Setup

### Prerequisites

- Node.js installed on your system.
- MongoDB instance running.

---

### Backend Setup

1. *Clone the repository*

   bash
   git clone <repository-url>
   cd backend
   

2. *Install dependencies*

   bash
   npm install
   

   Required packages:
   bash
   npm install express mongoose dotenv colors moment morgan
   

3. *Set up environment variables* Create a .env file in the backend folder and add the following:

   env
   PORT=8080
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/E-project
   

4. *Start the server*

   bash
   npm start
   

   The server will be running on http://localhost:8080.

---

### Frontend Setup

1. *Navigate to the frontend folder*

   bash
   cd frontend
   

2. *Install dependencies*

   bash
   npm install
   

   Required packages:
   bash
   npm install react react-dom react-router-dom vite
   

3. *Start the development server*

   bash
   npm run dev
   

   The frontend will be running on http://localhost:5173.

---

## API Endpoints

### User Routes

- *POST /api/v1/users/login*: Login user.
- *POST /api/v1/users/register*: Register a new user.

### Transaction Routes

- *POST /api/v1/transection/add-transection*: Add a new transaction.
- *POST /api/v1/transection/get-transection*: Retrieve transactions with filters.

---

## Folder Structure

### Backend


backend
├── controllers
│   ├── userController.js
│   └── transectionCtrl.js
├── models
│   ├── userModel.js
│   └── transectionModel.js
├── routes
│   ├── userRoutes.js
│   └── transectionRoutes.js
├── config
│   └── connectDb.js
└── server.js


### Frontend


frontend
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Analytics.jsx
│   │   ├── Spinner.jsx
│   │   └── Layout
│   │       ├── Layout.js
│   │       ├── Header.js
│   │       └── Footer.js
│   ├── pages
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js


---

## Usage

1. Register as a new user or log in with existing credentials.
2. Add transactions by specifying amount, category, type (income/expense), and date.
3. View and filter transactions based on frequency or custom date ranges.
4. Analyze spending habits through the analytics section.

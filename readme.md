# Food Ordering App

A food ordering web application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. This app allows users to register, log in, and view their profile with personalized information. 

## Features

- User Registration and Login with JWT authentication
- Profile page with user information
- Responsive UI built with Tailwind CSS
- Separate client and server setups for better scalability

## Project Structure

```
food-ordering-app/
├── client/             # React frontend application
└── server/             # Node.js + Express backend API
```

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (optional, if you prefer Yarn over npm)
- MongoDB (if switching to local MongoDB setup, ensure MongoDB is installed and running)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-ordering-app.git
cd food-ordering-app
```

### 2. Setup the Server (Backend)

1. Navigate to the `server` folder:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    yarn install
    # or, if you prefer npm:
    npm install
    ```

3. Configure environment variables by creating a `.env` file in the `server` folder:

    ```plaintext
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the server:

    ```bash
    yarn start
    # or
    npm start
    ```

The server should now be running at `http://localhost:5000`.

### 3. Setup the Client (Frontend)

1. Navigate to the `client` folder:

    ```bash
    cd ../client
    ```

2. Install dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Start the client:

    ```bash
    yarn start
    # or
    npm start
    ```

The client should now be running at `http://localhost:3000`.

### 4. Access the App

- **Frontend (Client)**: Visit [http://localhost:3000](http://localhost:3000) in your browser.
- **Backend (API)**: The API is running on [http://localhost:5000](http://localhost:5000).

## Project Commands

### Client (Frontend)

| Command               | Description                       |
|-----------------------|-----------------------------------|
| `yarn start` / `npm start`  | Start the development server |
| `yarn build` / `npm build`  | Build the app for production |
| `yarn test` / `npm test`    | Run tests                   |

### Server (Backend)

| Command               | Description                       |
|-----------------------|-----------------------------------|
| `yarn start` / `npm start`  | Start the server             |
| `yarn dev` / `npm run dev`  | Start server with Nodemon    |
| `yarn test` / `npm test`    | Run tests                   |

## Environment Variables

### Server

In the `server/.env` file:

- `PORT`: Port for the backend server (default: 5000)
- `JWT_SECRET`: Secret key for JWT token generation

## Dependencies

### Client

- **React**: Frontend framework
- **Tailwind CSS**: Styling framework
- **Axios**: HTTP client for API requests

### Server

- **Express**: Web server framework for Node.js
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT for user authentication

---

Happy coding!
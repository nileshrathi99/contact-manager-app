# MyContacts Backend API

This repository contains the backend API for a contact manager application built using Node.js, Express.js, and MongoDB. The API allows users to register, log in, manage contacts, and perform various operations on them.

## Features

- **User Authentication:** Users can register with unique usernames and emails, and log in securely using bcrypt-hashed passwords. JSON Web Tokens (JWT) are used for authentication.
  
- **Contact Management:** Users can perform CRUD (Create, Read, Update, Delete) operations on contacts. Each contact is associated with the user who created it, ensuring data privacy.

- **Error Handling:** Custom error handling middleware is implemented to provide informative responses for various error scenarios.

## Technologies Used

- **Node.js:** A JavaScript runtime environment for executing server-side code.
  
- **Express.js:** A minimalist web framework for Node.js used for building APIs and web applications.
  
- **MongoDB:** A NoSQL database used for storing user and contact data.
  
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js, used for interacting with MongoDB database.
  
- **bcrypt:** A library for hashing passwords, used for securely storing user passwords.
  
- **jsonwebtoken:** A library for generating and verifying JSON Web Tokens (JWT), used for user authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mycontacts-backend-api.git

2. Navigate to the project directory:

    ```bash
    cd mycontacts-backend-api

3. Initialize npm

   ```bash
   npm init

4. Install dependencies:

    ```bash
    npm install express
    npm install nodemon --save-dev
    npm install dotenv
    npm install express-async-handler
    npm install mongoose
    npm install bcrypt
    npm install jsonwebtoken


5. Set up environment variables, Create a .env file in the root directory and add the following variables:

    ```plaintext
     PORT=5001
     CONNECTION_STRING=your-mongodb-connection-string
     ACCESS_TOKEN_SECRET=your-access-token-secret

6. Start the server:

    ```bash
    npm start

7. You're ready to go! Access the API endpoints as described in the API documentation below.

     ## API Endpoints
  
  - **POST /users/register:** Register a new user.
  - **POST /users/login:** Log in an existing user.
  - **GET /api/contacts:** Get all contacts for the authenticated user. *(Note: Only authenticated users can access their contacts.)*
  - **POST /api/contacts:** Create a new contact. *(Note: Only authenticated users can create contacts.)*
  - **GET /api/contacts/:id:** Get details of a specific contact. *(Note: Only authenticated users can access their contacts.)*
  - **PUT /api/contacts/:id:** Update details of a specific contact. *(Note: Only authenticated users can update their contacts.)*
  - **DELETE /api/contacts/:id:** Delete a contact. *(Note: Only authenticated users can delete their contacts.)*






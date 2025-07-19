# Men's Athlete API

A Node.js + MongoDB backend for managing athlete data.

## Features

- **CRUD Operations**: Create, Read, Update, Delete athletes
- **MongoDB Atlas**: Cloud database integration
- **RESTful API**: JSON responses

## API Endpoints

| Method | Endpoint    | Description          |
| ------ | ----------- | -------------------- |
| POST   | `/mens`     | Adds new athlete     |
| GET    | `/mens`     | Gets all athletes    |
| GET    | `/mens/:id` | Gets single athlete  |
| PATCH  | `/mens/:id` | Updates athlete data |
| DELETE | `/mens/:id` | Deletes athlete data |

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- Postman (Testing)

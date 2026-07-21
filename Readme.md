# AlgoVault API

A REST API for tracking Data Structures and Algorithms (DSA) problems. AlgoVault lets authenticated users save problem links and C++ solutions, record time and space complexity, and add review comments or upvotes.

This repository contains the backend only. It exposes JSON APIs that can be consumed by a web, mobile, or CLI client.

## Built With

- Node.js and Express.js
- MongoDB and Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Cloudinary and Multer for image uploads

## Features

- User registration, login, logout, token refresh, and account updates
- JWT-protected routes using access and refresh tokens
- Create DSA problem entries with a source link, C++ solution, difficulty, and Big-O complexity
- Add peer-review comments to problems
- Upvote problem solutions
- Avatar and cover-image uploads

## Getting Started

### Prerequisites

- Node.js (current LTS recommended)
- MongoDB connection string (local MongoDB or MongoDB Atlas)
- A Cloudinary account for avatar and cover-image uploads

### Installation

```bash
git clone <your-repository-url>
cd chai-backend
npm install
```

### Environment Variables

Create a `.env` file in the project root. Use `.env.sample` as a starting point.

```env
PORT=8000
MONGODB_URI=your-mongodb-connection-string
CORS_ORIGIN=http://localhost:3000
ACCESS_TOKEN_SECRET=replace-with-a-long-random-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=replace-with-a-different-long-random-secret
REFRESH_TOKEN_EXPIRY=10d

# Required for image-upload endpoints
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

Never commit `.env` or real credentials.

### Run Locally

```bash
npm run dev
```

The server starts on `http://localhost:8000` by default.

## API Overview

All routes are prefixed with `/api/v1`. Protected routes require an access token, normally sent as an `Authorization: Bearer <token>` header. Authentication tokens are also managed with cookies by the API.

| Area | Base path | Notes |
| --- | --- | --- |
| Authentication | `/users` | Register, log in, log out, refresh tokens, and manage the current account |
| Problems | `/problems` | Create and store DSA problem solutions; authentication required |
| Comments | `/comments/:problemId` | Add a review comment to a problem; authentication required |
| Upvotes | `/likes/toggle/:problemId` | Upvote a problem solution; authentication required |

### Create a Problem

`POST /api/v1/problems`

```json
{
  "title": "Two Sum",
  "problemLink": "https://leetcode.com/problems/two-sum/",
  "difficulty": "Easy",
  "cppCode": "vector<int> twoSum(vector<int>& nums, int target) { /* ... */ }",
  "timeComplexity": "O(n)",
  "spaceComplexity": "O(n)"
}
```

`title`, `problemLink`, `cppCode`, `timeComplexity`, and `spaceComplexity` are required. `difficulty` defaults to `Medium` and accepts `Easy`, `Medium`, or `Hard`.

## Project Structure

```text
src/
├── controllers/   # Request handlers and business logic
├── db/            # MongoDB connection setup
├── middlewares/   # Authentication and upload middleware
├── models/        # Mongoose schemas
├── routes/        # Express route definitions
├── utils/         # Shared API and Cloudinary helpers
├── app.js         # Express application configuration
└── index.js       # Application entry point
```

## Security Notes

- Passwords are hashed with bcrypt.
- Protected resources use JWT verification middleware.
- Configure a specific `CORS_ORIGIN` in production rather than allowing every origin.
- Store all secrets in environment variables.

## License

This project is licensed under the ISC License.

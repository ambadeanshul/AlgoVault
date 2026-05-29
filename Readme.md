# AlgoVault – Algorithmic Problem Tracker API

## Overview
AlgoVault is a specialized backend REST API designed for competitive programmers to log, organize, and review Data Structures and Algorithms (DSA) problems. Built using **Node.js, Express, and MongoDB**, it provides a structured system to store problem links, track C++ solution code, analyze time/space complexities, and organize patterns.

## Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Security:** JWT (Access & Refresh Tokens), bcrypt (Password Hashing)
* **Architecture:** MVC Pattern, RESTful API

## Core Features
* **Secure Authentication:** Robust user login and registration system using JWT.
* **Problem Vault:** Store problem statements, direct links, and custom C++ solution snippets.
* **Complexity Tracking:** Enforced logging of Big-O Time and Space complexities for every solution.
* **Pattern Organization:** Group problems by algorithmic patterns (e.g., Dynamic Programming, Graph Theory).
* **Peer Logic Review:** Commenting system repurposed for peer reviews of solution efficiency.

## Project Structure
```text
src/
 ├── controllers/   # Business logic for users, problems, and patterns
 ├── models/        # Mongoose schemas (User, Problem, Pattern)
 ├── routes/        # Express route definitions
 ├── middlewares/   # JWT verification and error handling
 ├── utils/         # Helper functions and async wrappers
 └── db/            # Database connection setup
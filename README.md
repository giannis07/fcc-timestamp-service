# Timestamp Microservice

This is a simple timestamp microservice built as part of the [freeCodeCamp Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).

## 📌 Project Description

This microservice accepts a date string (or UNIX timestamp) and returns a JSON object with both the Unix time and the UTC time.

- If no date is provided, it returns the current time.
- If the date string is invalid, it returns an error message.

## ⚙️ Technologies Used

- Node.js
- Express.js

## 🛠️ How to Run Locally

1. Clone the repository:

   git clone https://github.com/giannis07/fcc-timestamp-service.git
   
   cd fcc-timestamp-service

3. Install dependencies:
   npm install

4. Start the server:
   npm start

5. Visit `http://localhost:3000/api/` in your browser.

## 📡 API Endpoints

### ✅ Valid Requests

- `GET /api/2015-12-25`  
  Returns:
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }

- `GET /api/1451001600000`  
  Returns:
  {
    "unix": 1451001600000,
    "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
  }

- `GET /api`  
  Returns the current date:
  {
    "unix": <current_unix_timestamp>,
    "utc": "<current_utc_date>"
  }

### ❌ Invalid Request

- `GET /api/invalid-date`  
  Returns:
  { "error": "Invalid Date" }

## 💻 Source Code

🔗 [View the GitHub repository](https://github.com/giannis07/fcc-timestamp-service)

# InterviewIQ

An interview preparation platform with three practice modules in one place.

🔗 **Live demo:**  https://interviewiq-main.vercel.app/

## Features

- **Aptitude:** topic-wise learning, practice questions, and timed test mode
- **HR Interview:** simulated interview with answer feedback and session history
- **Coding:** online code editor that runs code in multiple languages
- **Login:** email and Google sign-in

## Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express
- **Auth and database:** Firebase
- **Code execution:** Judge0
- **Hosting:** Vercel (frontends), Render (backends)

## Project Structure

```
interviewiq/   Main site (login, dashboard, coding)
aptitude/      Aptitude frontend and backend
HR/            HR interview frontend and backend
```

## Run Locally

```bash
npm install
npm install --prefix interviewiq
npm install --prefix aptitude/backend
npm install --prefix aptitude/frontend
npm install --prefix HR/backend
npm install --prefix HR/frontend
npm start
```

Open http://localhost:3000. Add your own Firebase config in `interviewiq/src/firebase.js`.

## Author
Sahanaa M S

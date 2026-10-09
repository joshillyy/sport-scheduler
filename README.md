# 🏆 SPORT SCHEDULER


<p align="center">
  A smarter way to bring players together.
  <br/>
  Create matches · Discover games · Join your team
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS"/>
</p>

---

## ⚡Idea

Finding players, coordinating schedules, and organizing a sports match shouldn't be complicated.

**Sport Scheduler** is a full-stack web application designed to make organizing sports sessions easier. Players can create matches, discover upcoming games, join available sessions, and stay informed about cancellations—all in one place.

Whether it's a cricket match with friends or a badminton session after college, get the game moving!

## 🎯 What Can You Do?

<table>
  <tr>
    <td width="50%">
      <h3>🏏 Create a Match</h3>
      Set the sport, venue, date, time, teams, and number of additional players needed.
    </td>
    <td width="50%">
      <h3>🤝 Find Your Team</h3>
      Browse available sessions, join a match, and see who else is participating.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔐 Secure Accounts</h3>
      Sign up and log in with password hashing and session-based authentication.
    </td>
    <td width="50%">
      <h3>📅 Smarter Scheduling</h3>
      Prevent duplicate joins, reject past sessions, and check for scheduling conflicts.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📢 Transparent Cancellations</h3>
      Session creators can cancel a match with a reason so participants know what happened.
    </td>
    <td width="50%">
      <h3>📊 Admin Insights</h3>
      Support sports management and session reporting for administrators.
    </td>
  </tr>
</table>

## 🧭 How It Works

**01 — Sign In**  
Create an account or access the application as an administrator.

**02 — Set Up a Session**  
Choose a sport, enter match details, and specify the number of players needed.

**03 — Discover & Join**  
Explore available matches and join a session that fits your schedule.

**04 — Play Together**  
View participants and stay informed about session changes.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend routing and web server |
| MongoDB | Database |
| Mongoose | Database models and queries |
| EJS | Dynamic HTML templates |
| HTML & CSS | User interface |
| bcryptjs | Password hashing |
| express-session | User session management |
| Git & GitHub | Version control and collaboration |

## 🗂️ Project Architecture

```text
sport-scheduler/
│
├── app.js                 # Application entry point
├── package.json           # Dependencies and scripts
├── models/                # MongoDB data models
├── routes/                # Application routes
├── middleware/            # Authentication middleware
├── views/                 # EJS page templates
└── public/
    └── css/               # Stylesheets
```

## 🚀 Get Started

Want to run Sport Scheduler on your computer? Follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Git

### 1. Clone the project

```bash
git clone https://github.com/joshillyy/sport-scheduler.git
cd sport-scheduler
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your environment

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/sport_scheduler
SESSION_SECRET=your_long_random_secret
ADMIN_EMAIL=admin@sportscheduler.com
ADMIN_PASSWORD=your_strong_admin_password
```

Replace the example secret and password with your own secure values. Keep `.env` private and never commit it to GitHub.

### 4. Start MongoDB

Ensure your local MongoDB Community Server is running.

### 5. Launch the application

```bash
npm start
```

Open **http://localhost:3000** in your browser.

## 🔒 Security First

- Passwords are hashed before storage.
- Application configuration is managed through environment variables.
- Session-based authentication supports protected pages.
- Never publish database credentials, session secrets, or real passwords.

## 🌱 Future Possibilities

- 📱 Enhanced mobile-friendly experience
- 🔔 Match reminders and notifications
- 📈 Visual analytics for sports popularity
- ☁️ Cloud deployment
- 👤 Profile management and password recovery

## 👩‍💻 Created By

**Neha Joshitha**

GitHub: [@joshillyy](https://github.com/joshillyy)

---

<p align="center">
  <b>Less coordination. More competition. More memories. 🏆</b>
  <br/>
  <i>Sport Scheduler — Let's get the game started.</i>
</p>

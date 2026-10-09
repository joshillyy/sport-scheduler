require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const path = require("path");
const bcrypt = require("bcryptjs");

const Sport = require("./models/Sport");
const User = require("./models/User");

const authRoutes = require("./routes/auth");
const sportRoutes = require("./routes/sports");
const sessionRoutes = require("./routes/sessions");
const adminRoutes = require("./routes/admin");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
    store: process.env.MONGODB_URI
      ? MongoStore.create({
          mongoUrl: process.env.MONGODB_URI
        })
      : undefined,
    cookie: {
      maxAge: 86400000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    }
  })
);

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  res.locals.success = req.session.success || null;
  res.locals.error = req.session.error || null;

  delete req.session.success;
  delete req.session.error;

  next();
});

app.get("/", (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }

  res.render("index");
});

app.use("/", authRoutes);
app.use("/", sportRoutes);
app.use("/", sessionRoutes);
app.use("/", adminRoutes);

app.use((req, res) => {
  res.status(404).render("error", {
    message: "Page not found."
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).render("error", {
    message: "Something went wrong. Please try again."
  });
});

async function seedAdmin() {
  const email = (
    process.env.ADMIN_EMAIL ||
    "admin@sportscheduler.com"
  ).toLowerCase();

  const password =
    process.env.ADMIN_PASSWORD ||
    "Admin@12345";

  let admin = await User.findOne({
    email: email
  });

  if (!admin) {
    const passwordHash = await bcrypt.hash(password, 10);

    admin = await User.create({
      name: "Administrator",
      email: email,
      passwordHash: passwordHash,
      role: "admin"
    });

    console.log(`Admin created: ${email}`);
  } else {
    console.log(`Admin already exists: ${email}`);
  }

  return admin;
}

async function seedSports(admin) {
  const defaultSports = [
    "Cricket",
    "Football",
    "Badminton",
    "Basketball",
    "Volleyball"
  ];

  for (const sportName of defaultSports) {
    const exists = await Sport.findOne({
      name: sportName
    });

    if (!exists) {
      await Sport.create({
        name: sportName,
        createdBy: admin._id
      });

      console.log(`Sport created: ${sportName}`);
    }
  }

  console.log("Default sports checked/created");
}

async function start() {
  if (!process.env.MONGODB_URI) {
    console.error(
      "MONGODB_URI is missing. Create a .env file first."
    );

    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    const admin = await seedAdmin();

    await seedSports(admin);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Open http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

start();
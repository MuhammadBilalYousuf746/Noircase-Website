import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected...");
  }
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// ✅ Save "Book a Call" data
app.post("/book-call", (req, res) => {
  const { name, email, option, phone, datetime } = req.body;

  const sql =
    "INSERT INTO bookings (name, email, option_type, phone, datetime) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, option, phone, datetime], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      res.status(500).send("Error saving data");
    } else {
      res.status(201).send("✅ Call booked successfully!");
    }
  });
});

// ✅ Get All Booked Calls
app.get("/book-bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) {
      res.status(500).send("❌ Error fetching data");
    } else {
      res.json(results);
    }
  });
});

// ✅ Admin Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("❌ Error during login:", err);
      return res.status(500).json({ success: false, message: "DB Error" });
    }

    if (result.length > 0) {
      return res.json({ success: true, message: "✅ Login successful", token: "dummyToken123" });
    } else {
      return res.json({ success: false, message: "❌ Invalid email or password" });
    }
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

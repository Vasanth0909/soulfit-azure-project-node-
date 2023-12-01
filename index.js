const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('port', process.env.PORT || 3002);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/fitzz", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "fitzz.html"));
});

app.get("/gear", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "gear.html"));
});

app.get("/ridepopup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "ridepopup.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});


app.post("/register", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
   
    const user = await db.query(
      "INSERT INTO users (name, address, email, contact_no, indate, outdate) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, email, contact_no, indate, outdate]
    );

   

    res.redirect("/");

  } 
  catch (error) {
    console.error(error);
    res.status(500).send("register failed. Please try again.");
  }
});

app.get("/soul", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "soul.html"));
});

app.get("/spirit", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "spirit.html"));
});

app.get("/cheackout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cheackout.html"));
});

app.get("/bot", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bot.html"));
});


app.get("/USER", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "user_register.html"));
});
 
app.post('/USER', (req, res) => {
  const formData = req.body;

  // Convert form data to a string
  const dataString = JSON.stringify(formData, null, 2);

  // Append the data to a text file
  fs.appendFile('user_data.txt', dataString + '\n', (err) => {
      if (err) throw err;
      console.log('Data has been saved to user_data.txt');
  });

  res.send('Registration successful!');
});


app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});



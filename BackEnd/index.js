const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');



const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_hgnrb",
	password: "stpj1kjWldx3n6Gn",
	database: "lab_blank01_h3ceqz",
});

connection.connect(() => {
	console.log("Database is connected");
});
global.connection = connection;

const app = express();
app.use(cors());
const port = 5173;

app.use(bodyParser.json({ type: "application/json" }));


//Routes

//user register
app.post("/register", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	saltRounds = 10;
	hash = bcrypt.hashSync(password, saltRounds);
	var sql = `INSERT INTO users (username, password, hashed)
		  VALUES (?, ?, ?)`;
	connection.query(sql, [username, password, hash], (err, rows) => {
	  if (err) {
		return res.json({
		  success: false,
		  error: err,
		  message: "An error occurred while registering the user.",
		});
	  }
	  return res.json({
		success: true,
		message: "User registered successfully.",
	  });
	});
  });

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
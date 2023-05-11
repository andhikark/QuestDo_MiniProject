const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors());
const port = 5173;

const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_hgnrb",
	password: "stpj1kjWldx3n6Gn",
	database: "lab_blank01_h3ceqz",
});

connection.connect((error) => {
	if (error) {
		console.error("Error connecting to database:", error);
		return;
	}
	console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
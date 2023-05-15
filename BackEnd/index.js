const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
var jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');



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
const port = 8080;

app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

//Routes

//user register
app.post("/signin", async (req, res) => {
    const { username, email, password } = req.body;
    const hp = 500;
    const xp = 0;
    const level = 1;
    const task_completed = 0;
    const now = new Date();
    const created_at = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = mysql.format(
        "INSERT INTO users (username, email,hashed_password,hp,xp,level,joined_at,task_completed) VALUES (?,?,?,?,?,?,?,?)",
        [username, email, hashedPassword, hp, xp, level, created_at, task_completed]
      );
  
      const result = await connection.query(sql);
      res.json({
        success: true,
        message: "Registration success",
      });
    } catch (error) {
      console.error(error);
      res.json({
        success: false,
        data: null,
        error: error.message,
      });
    }
  });
  
// login endpoint 
app.post("/", (req, res) => {
  const username = req.body.username;
	const password = req.body.password;

	var sql = mysql.format("SELECT * FROM users WHERE username = ?", [username]);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = rows.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Username not found in the system",
			});
		} else {
			const valid = bcrypt.compare(password, rows[0].hashed_password);

			if (valid) {
				const token = jwt.sign(
					{
						userId: rows[0].id,
					},
					"ZJGX1QL7ri6BGJWj3t",
					{ expiresIn: "1h" }
				);
				res.cookie("user", token);

				res.json({
					success: true,
					message: "Login credential is correct",
					user: rows[0],
				});
			} else {
				res.json({
					success: true,
					message: "Login credential is incorrect",
				});
			}
		}
	});
  });

//create new task
app.post('/task',async (req, res) => {
	const now = new Date();
	const created_at = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
	const completed = 0;
	const { user_id, name} = req.body;
	const sql = mysql.format(
		'INSERT INTO tasks (user_id, name, created_at, completed) VALUES (?, ?, ?, ?)',
        [user_id, name, created_at, completed]
    );
	connection.query(sql, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Task added success",
        });
    });
  });

//get all task
app.get('/task', (req, res) => {
	const sql = 'SELECT * FROM tasks';
	connection.query(sql, (err, results) => {
	  if (err) throw err;
	  res.json(results);
	});
});

// complete a task
app.patch('/task/:id', (req, res) => {
    const now = new Date();
    const completed_at = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const sql = mysql.format(
        'UPDATE tasks SET completed = 1, completed_at = ? WHERE id = ?',
        [completed_at, req.params.id]
    );
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Task updated successfully",
        });
    });
});

//delete task 
app.delete('/task/:id', (req, res) => {
    const taskId = req.params.taskId;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Task deleted successfully",
        });
    });
});

// update task name
app.put('/task/:id', (req, res) => {
    const name = req.body.name;
    const taskId = req.params.id;
    const sql = mysql.format(
        'UPDATE tasks SET name = ? WHERE id = ?',
        [name, taskId]
    );
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Task name updated successfully",
        });
    });
});

//update username
app.put('/myaccount', (req, res) => {
    const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    const { newUsername } = req.body;
    const sql = mysql.format(
        'UPDATE users SET username = ? WHERE id = ?',
        [newUsername, decoded.userId]
    );
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.json({
            success: true,
            message: "Username updated successfully",
        });
    });
});

//check login
app.get('/check', (req, res) => {
  const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
	
	console.log(decoded);

	if (decoded) {
		res.json({
			success: true,
			message: "User is logged in with ID: " + decoded.userId,
		});
		
	} else {
		res.json({
			success: false,
			message: "User is not logged in",
		});
	}
});

app.get('/user', (req, res) => {
    const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
  
    connection.query(`SELECT * FROM users WHERE id = ?`,[decoded.userId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error retrieving user data');
      } else {
        res.send(results[0]);
      }
    });
  });

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
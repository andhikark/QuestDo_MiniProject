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
app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
	const email = req.body.email;
	const hp = 500;
	const xp = 0;
	const level = 1;
	const task_completed = 0;
	const now = new Date();
    const created_at = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;


    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = mysql.format(
        "INSERT INTO users (username, email,hashed_password,hp,xp,level,joined_at,task_completed) VALUES (?,?,?,?,?,?,?,?)",
        [username, email ,hashedPassword,hp,xp,level,created_at,task_completed]
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
            message: "Registration success",
        });
    });
});

// login endpoint 
app.post("/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sql = mysql.format(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );
    console.log("DEBUG: /basic/login => " + sql);
    connection.query(sql, async (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        numUsers = rows.length;
        if (numUsers == 0) {
            res.json({
                success: false,
                message: "User does not exist",
            });
        } else {
            const hashedPassword = rows[0].hashed_password;
            const validPassword = await bcrypt.compare(password, hashedPassword);
            if (validPassword) {
                res.json({
                    success: true,
                    message: "Login credential is correct",
                    user: {
                        username: rows[0].username,
                    },
                });
            } else {
                res.json({
                    success: false,
                    message: "Password is incorrect",
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

// update task
app.put('/task/:id', (req, res) => {
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
app.delete('/task/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    connection.query(sql, [taskId], (err, result) => {
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

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
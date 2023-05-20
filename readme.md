# QuestDo

QuestDo is an innovative RPG-themed task management system called "QuestDo." It combines the elements of a role-playing game with a to-do list, creating a unique and motivating way to track and complete tasks. In QuestDo, each task you complete earns you experience points (XP), enhancing your character's growth. Conversely, failing to complete a task results in a decrease in your character's health. This gamified approach adds excitement and a sense of progression to your productivity, making task management engaging and rewarding.

## Functions
- Task creation
- XP and Health System
- Gamified rewards

- Notification and remainder

## Database schema
![Screenshot (19)](https://github.com/andhikark/QuestDo_MiniProject/assets/75937835/b724fcec-2cad-4776-ac7a-54ff32dab925)

## To run the frontend and backend in developing mode 
cd to backend and frontend then run.
```
    npm run dev //for front end
    node index.js //for back end
```

## API endpoints
### Login
#### URL
<!-- Method /endpoint -->
`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username |
|password|String| password|


Example
```
{
    "username" : "Hazuki",
    "password" : "Hazuki123"

}   

```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  Login credential is correct

### Register
<!-- Method /endpoint -->
`POST /signin`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username |
|email|String|email |
|password|String| password|


Example
```
{
    "username" : "Example",
    "email" : "Examplekmutt@gmail.com",
    "password" : "Example123"

}   

```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  Registration success

### getAllTodo
`GET /task`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  found todo 

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of todo | all todo related to user |

#### todo
todo
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of todo |
| user_id | string | id of user |
| name | string | todo name |
| created_at | DateTime | create time |
| completed | boolean | completed todo  |
| completed_at | DateTime | completed time |

Example
```
[
    {
        "id": 3,
        "user_id": 3,
        "name": "Complete assignment",
        "created_at": "2023-04-14T02:49:30.000Z",
        "completed": 1,
        "completed_at": "2023-04-14T02:58:27.000Z"
    },
    {
        "id": 4,
        "user_id": 2,
        "name": "Clean",
        "created_at": "2023-04-14T02:57:34.000Z",
        "completed": 1,
        "completed_at": "2023-04-14T02:58:41.000Z"
    }
]

```

### Create todo


#### URL
`POST /task`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| user_id | string | user id |
| name | string | todo anme |


#### Success
Response

###### Status Code
` 200`  Task added success

Example
```
    {
    "success": true,
    "message": "Task added success"
}

```

### Delete todo 

#### URL
`DELETE /task/:id`

### Parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of todo
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  Task deleted successfully

no response body

### editComment
#### URL
`PUT /task/:id`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| name | string | name of edited todo  |

#### Success

###### Status Code
` 200`  "Task name updated successfully"

Response
no response body

Example
```
    {
    "success": true,
    "message": "Task name updated successfully"
    }

```

### Complete Todo
#### URL
`PATCH /task/:id`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of todo   |

#### Success

###### Status Code
` 200`  "Task  updated successfully"

Response
no response body

Example
```
    {
    "success": true,
    "message": "Task updated successfully"
    }

```


### Update Username
#### URL
`GET /check`

#### Request Body 
no request body

#### Success

###### Status Code
` 200`  "User is logged in with ID: 5"

Response
no response body

Example
```
   {
    "success": true,
    "message": "User is logged in with ID: 5"
    }
```

### profile
`GET /profile`

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  found todo 

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of user profile | all information related to user |

#### todo
todo
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of user |
| email | string | email of user |
| hashed_password | string | hashed password |
| hp | int | hp of user |
| xp | int | xp of user  |
| level | int | level of user |
| joined_at | DateTime | user register time |
| task_completed | int | count of completed todo  |

Example
```
{
    "id": 5,
    "username": "Bella",
    "email": "Hazuki@gmail.com",
    "hashed_password": "$2b$10$N0vK2D9J131dNTW2yxVXd.0bYHP7hX.qK4idTwLHZ9dNGqbNUj5wS",
    "hp": 500,
    "xp": 0,
    "level": 1,
    "profile_picture": null,
    "joined_at": "2023-04-14T08:28:36.000Z",
    "task_completed": 0
}

```

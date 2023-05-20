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

## API endpoints

#### Register
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



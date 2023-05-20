# Project name

overview description of your project.

## Functions
- the bullet
- point
- of
- your
- functions

## Database schema
You can put the database schema here
![Database schema](https://miro.medium.com/v2/resize:fit:1200/1*YRY7KTj1QQB9Hwb_kArGcA.png)

## To run the frontend and backend in developing mode 
cd to backend and frontend then run.
```
    npm run dev
```

## API endpoints

#### URL
<!-- Method /endpoint -->
`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|usernameOrEmail|String|username Or Email
|password|String| password|


Example
```
   {
     "usernameOrEmail" : "thistine",
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id

Example
```
{
   "email":"tine@thistine.com",
   "username":"thistine",
   "id" : "1"
}

```
<!-- This is the special action of your end point (for example, sending the token) -->
**noted: If success, the Response will be sent with cookie named UserToken**

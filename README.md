---
title: API Authentication With JWT
author: dasith vidanage
---

Authentication API with nodejs, mongodb, and JWT.

### install 

```
npm install
npm start

```
( please add mongo con string to .env file )

### Register User 

```
POST http://localhost:3000/api/user/register

```

example json data

```
{
    "name" : "theadmin",
    "email" : "root@dasith.works",
    "password" : "Kekc8swFgD6zU"
}

```

#### responses 

<u> Success </u>


```
{
    "user": "theadmin"
}

```

<img src='https://raw.githubusercontent.com/dasithsv/API-Authentication-With-JWT/main/images/createacc.png'>


<u> Email Exist  </u>


```
Email already Exist

```

<u> Name Exist  </u>


```
Name already Exist

```

<u> length of charactors should be more than 6 digits and email should be valid email or else , it will gives you an error </u>

example 


```
"name" length must be at least 6 characters long
"email" must be a valid email
"password" length must be at least 6 characters long

```


---


### Login User 

```
POST http://localhost:3000/api/user/login

```

example json data

```
{
    "email" : "root@dasith.works",
    "password" : "yourpasswordhere"
}

```

if success you will get a JWT token 

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE0NjU0ZDc3ZjlhNTRlMDBmMDU3NzciLCJuYW1lIjoidGhlYWRtaW4iLCJlbWFpbCI6InJvb3RAZGFzaXRoLndvcmtzIiwiaWF0IjoxNjI4NzI3NjY5fQ.PFJldSFVDrSoJ-Pg0HOxkGjxQ69gxVO2Kjn7ozw9Crg

```

<img src='https://raw.githubusercontent.com/dasithsv/API-Authentication-With-JWT/main/images/login.png'>


if Email or password is wrong 

```

"email" must be a valid email
"password" length must be at least 6 characters long
Password is wrong
Email is wrong

```

---

### Access Private Route 

in this private route admin users can see if there admins , and normal users can see if there normal and if you are not authenticated you will get a error

```
GET http://localhost:3000/api/priv

```

auth-token ( JWT token got from login ) should be in header 

```

auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE0NjU0ZDc3ZjlhNTRlMDBmMDU3NzciLCJuYW1lIjoidGhlYWRtaW4iLCJlbWFpbCI6InJvb3RAZGFzaXRoLndvcmtzIiwiaWF0IjoxNjI4NzI3NjY5fQ.PFJldSFVDrSoJ-Pg0HOxkGjxQ69gxVO2Kjn7ozw9Crg

```


<u> if you are the admin you will get </u>

```
{
    "role": {
        "role": "you are admin",
        "desc": "this is only for admin"
    }
}

```

<img src='https://raw.githubusercontent.com/dasithsv/API-Authentication-With-JWT/main/images/adminrole.png'>


<u> If you are normal user  </u>


```
{
    "role": {
        "role": "you are normal user",
        "desc": "<user name>
    }
}

```

<img src='https://raw.githubusercontent.com/dasithsv/API-Authentication-With-JWT/main/images/rolenormaluser.png'>

<u> If you are not Verified </u>

```
Access Denied

```

<img src='https://raw.githubusercontent.com/dasithsv/API-Authentication-With-JWT/main/images/noaccess.png'>

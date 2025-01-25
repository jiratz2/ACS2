const express = require('express');
const path = require("path");


const app = express();
const PORT = 4664;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const users = [
    {
        name : 'Jirat'
    }
]

app.get('/', (req,res) =>{
    console.log('This is lab test 2');
    res.sendFile(path.join(__dirname, "public","index.html"));
});

app.get('/api/user',(req,res) =>{
    res.json(users);
})

app.post('/api/user',(req,res) =>{
    const newuser = req.body;
    users.push(newuser);
    res.json(newuser);
})

app.get('/api/form', (req,res) =>{
    res.sendFile(path.join(__dirname, "public","form.html"));
});

app.post('/api/form',(req,res) =>{
    const newform = req.body;
    form.push(newform);
    res.json(newform);
})



app.get("*", (req,res) =>{
    res.send('You are lost in the 404 galaxy');
});

app.listen(PORT, () => console.log("server in running"));
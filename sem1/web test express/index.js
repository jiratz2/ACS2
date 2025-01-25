const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;


const logger = (req,res,next) => {
    console.log("โดน get แล้วววววว");
    next();
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);

const users = [
    {
        id:1,
        name : "hee",
        email: "hee@gmail.com"
    },
    {
        id:2,
        name : "heeeeeeeeeee",
        email: "heeeeeeeeeeeeeeee@gmail.com"
    },
    {
        id:3,
        name : "heeeeeeeeeeeeeeeeeee",
        email: "heeeeeeeeeeeeeeeeeeeeeeeeeeee@gmail.com"
    }
]

// get all user
app.get('/api/user', (req,res) => {
    res.json(users);
});

//get user คนเดียว
app.get('/api/user/:id', (req,res) =>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({message: "No user ค"});
    }
});

//crate user
app.post('/api/user',(req,res)=>{
    const newuser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    }
    if(!newuser.name || !newuser.email){
        return res.status(400).json({message: "fill name email"});
    }

    users.push(newuser);
    res.json(users);
})

//update user
app.put('/api/user/:id',(req,res)=> {
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        const updateuser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateuser ? updateuser.name :user.name,
                user.email = updateuser ? updateuser.email:user.email
                res.json({message:"user update ละ"});
            }else{
                res.status(400).json({message:"no user wa"});
            }
        })
    }else{
        res.status(400).json({message: "No user ค"});
    }
})

//delete user
app.delete("/api/user/:id",(req,res)=>{
    let found = users.some(user => user.id === parseInt(req.params.id));
    if(found){
        res.json(users.filter(user => user.id !== parseInt(req.params.id)));
    }else{
        res.status(400).json({message: "No user ค"});
    }
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})


app.listen(PORT, () => {
    console.log("server run");
});

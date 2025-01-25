let express = require("express");
const path = require('path');
let app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','xo.html'));
});

app.listen(8000, function(){
    console.log("start server")
})

const express = require('express');

const mongoose=require('mongoose');
const bookRouter = require('./routes/bookRouter')
const DB_URL="mongodb://127.0.0.1:27017/"

const PORT=3000
const app=express();

//setting view engine
app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/",bookRouter)

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log(`DB CONNECTED`);
})
.catch((err)=>{console.log(err);})



app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server listening on ${PORT}`);
})

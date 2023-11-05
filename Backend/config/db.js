const mongoose = require("mongoose");


// mongoose.connect('mongodb://127.0.0.1:27017/Bookstore');

mongoose.connect('mongodb+srv://sameer_33:Sameer123@cluster0.ovd0eo7.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})


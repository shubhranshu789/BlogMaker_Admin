const express = require("express")
const cors = require("cors")
const path = require('path')


const app = express();
const port = 5000;




app.use(cors())

require('./models/admin')
require('./models/economy')
require('./models/financial')
require('./models/technical')
require('./models/others')
require('./models/allBLogs')






app.use(express.json())
app.use(require('./routes/activities'))
app.use(require('./routes/auth'))



app.listen(port , () => {
    console.log("Server is ruuning on " + port)
})

// ----------------------------------------------------------------------


const mongoose = require("mongoose");
const {mongoUrl} = require("./keys");

mongoose.connect(mongoUrl);

mongoose.connection.on("connected" , () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on("error" , () => {
    console.log("Not Connected to mongDB")
}) 



app.use(express.static(path.join(__dirname , "./frontend/build")))

app.get("*"  ,(req,res)=> {
    res.sendFile(
        path.join(__dirname , "./frontend/build/index.html"),

        function(err){
            res.status(500).send(err)
        }
    )
})



// app.get('/' , (req,res)=> {
//     console.log("Hello")
//     res.json("Hello shubh")

// })
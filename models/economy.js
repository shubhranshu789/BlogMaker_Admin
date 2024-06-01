const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema.Types



const economySchema = new mongoose.Schema({
    title : {
        type:String,
        require:true
    },
    desc:{
        type: String,
        require:true
    },
    link:{
        type: String,
        require:true
    },
    about:{
        type: String,
        require:true
    },
    pic : {
        type:String,
        require : true,
        // default : "no photo"
    }
})

mongoose.model("ECONOMY" , economySchema)
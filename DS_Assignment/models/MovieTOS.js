const mongoose = require('mongoose');
const MovieTOSchema = new mongoose.Schema({
    
    Flink:{
        type:String,
        required:true
    },
    FPlink:{
        type:String,
        required:true
    },
    Fname:{
        type:String,
        required:true
    },
    Flanguage:{
        type:String,
        required:true
    },
    Fdate:{
        type:String,
        required:true
    },
    Factors:{
        type:String,
        required:true
    },
    Fdetails:{
        type:String,
        required:true
    },
    Ftype:{
        type:String,
        require:true

    }
    
})

module.exports = mongoose.model('MovieTO',MovieTOSchema);

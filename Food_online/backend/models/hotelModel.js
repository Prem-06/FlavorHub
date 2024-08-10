import mongoose from 'mongoose';
const hotelSchema=new mongoose.Schema({
    ownerName:{
        type:String,
        required:true
    },
    hotelName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
     type:String,
     required:true
    }
    
});

const hotelModel=mongoose.model('hotel',hotelSchema);
export default hotelModel
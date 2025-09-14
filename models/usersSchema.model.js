



import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }

});


const UsersSchema = new mongoose.model("usersimageschema", userSchema);

export default UsersSchema;




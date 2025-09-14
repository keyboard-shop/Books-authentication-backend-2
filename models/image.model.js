


import mongoose from "mongoose";


const imageSchema = new mongoose.Schema(
    {
        // image: {
        // 	type: String,
        // 	required: true,
        // },
        path: {
            type: String,
            required: true,
        },
        filename: {
            type: String,
            required: true,
        },
        // price: {
        //     type: Number,
        //     required: true,
        // },
    },

    {
        timestamps: true, // createdAt, updatedAt 
    }
);

const ImageModel = mongoose.model("imagecollection", imageSchema);

export default ImageModel;
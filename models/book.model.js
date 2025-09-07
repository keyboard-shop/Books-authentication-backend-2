



import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
	{
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},

	{
		timestamps: true, // createdAt, updatedAt 
	}
);

const Book = mongoose.model("Bookscollection", bookSchema);

export default Book;
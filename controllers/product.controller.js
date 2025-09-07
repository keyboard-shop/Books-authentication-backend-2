



import Book from "../models/book.model.js";// .js is Mandatory

// export const getProducts to routes -> product.routes.js
// get all books
export const getProducts = async (req, res) => {
    try {
        const products = await Book.find({});
        res.status(200).json({ success: true, data: products });
        //res.status(200).json( products );
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// const product = req.body; // User will send this data or from Postman
// export const createProduct to routes -> product.routes.js
// create a book
export const createProduct = async (req, res) => {
    const product = req.body; // User will send this data or from Postman

    if (!product.title || !product.price || !product.image || !product.author) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Book(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
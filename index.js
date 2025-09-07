


import express from "express"
import dotenv from "dotenv"//for .env dotenv.config()
import mongoose from "mongoose"// to connect MongoDB
import productRoutes from "./routes/product.routes.js"
import cors from 'cors'


const app = express()
dotenv.config()// for .env ==> process.env.PORT
app.use(express.json())// allows us to accept JSON data in the req.body

app.use(cors())
// app.use(cors({ origin: ['http://localhost:3000'], credentials: true }))


//import Product from "./models/book.model.js"//.js is Mandatory 
//import Book from "./models/book.model.js"//.js is Mandatory 




// TESTING start =======================================================
// for testing, will be displayed in the TERMINAL below
// app.listen(4000, () => {
//     console.log("OK server on PORT 4000 for preply lessons !!!");
// });
// for testing
app.get("/", async (req, res) => {
    res.send("hello browser from SERVER, Auth backend works index.js")// in the Browser
    console.log("hello terminal from SERVER Auth-2 index.js")// in the TERMINAL
})
// for testing, will be displayed in the TERMINAL below
app.listen(process.env.PORT, () => {
    console.log(`OK ${process.env.PORT} Backend server is running !!!`);
});
// TESTING end =========================================================



// Product routes
app.use('/api/products', productRoutes);// for routes -> product.routes.js



// PRODUCTION start ==================================================================================
// for MongoDB connection, it works
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('OK MongoDB Atlas has been successfully connected !!!')
    })
    .catch((err) => {
        console.log('NOT CONNECTED to MongoDB', err)
    })

    // THIS WORKS start ================================================
    // get all books from MongoDB
    //    app.get("/api/getallbooks", async (req, res) => {
    //     try {
    //       const books = await Book.find({})
    //       if (!books) {
    //         res.status(400).json({ message: "product not found" });
    //       }
    //       res.status(200).json(books)
    //       console.log(books)
    //     } catch (error) {
    //         console.log("error", error.message)
    //       res.status(500).json({ message: error.message });
    //     }
    //   });


    // Create a book in MongoDB from Postman or Client
    // app.post('/api/createbook', async (req, res) => {
    //     const book = req.body;// the request from Postman 
    //     if ( !book.title || !book.author || !book.price || !book.image ) {
    //         return res.status(400).json({success: false, message: "All fields from Schema are required !!!"})
    //         return res.status(400)
    //     }
    //     const newBook = new Book(book)
    //     console.log(newBook)
    //     try {
    //         await newBook.save()// a new book will be saved in MongoDB
    //         res.status(201).json({ success: true, data: newBook })
    //     } catch (error) {
    //         console.error("Failed to create a new book, some error happened in the server.js file", error.message);
    //         res.status(500).json({ success: false, message: "Server.js ERROR 500" })
    //     }
    // });
    // THIS WORKS end ====================================================
// PRODUCTION end =====================================================================================
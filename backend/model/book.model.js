import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    books: {
        name: String,
        price: Number,
        category: String,
        image: String,
        title: String
    }
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
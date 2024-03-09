import Book from "../models/Book.js";


export const createBook = async (req, res) => {
    try {
        const { title, description, author } = req.body
        //es lo mismo que const title = req.body.title 

        if (!title || !description || !author) {
            // throw new Error('title and author required')
            return res.status(400).json(
                {
                    success: false,
                    message: "title and author required"
                }
            )
        }
        const newBook = await Book.create(
            {
                //title:title
                title,
                description,
                author
            }
        )
        res.status(201).json(
            {
                success: true,
                message: "Book created",
                data: newBook
            }
        )


    } catch (error) {
         res.status(400).json(
            {
                success: false,
                message: "Book cant be created"
            }
        )
    }
}

export const getBooks = async (req, res) => {
    try {
        const page = req.query.page || 1
        const limit = 5
        const books = await Book.find()
        const booksDisplay = await Book.find().select('title').skip((Number(page) - 1) * limit).limit(limit)
        // const books = await Book.find().select('title');

         res.status(200).json(
            {
                success: true,
                message: `Total of ${books.length} books found.`,
                data: booksDisplay
            }
        )

    } catch (error) {
         res.status(500).json(
            {
                success: false,
                message: "Book cant retrieved",
                error: error.message
            }
        )
    }
}

export const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id
        const book = await Book.findById(bookId).select('title').select('author');

        res.status(200).json(
            {
                success: true,
                message: "Book retrieved",
                error: book

            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant be retrieved",
                error: error.message

            }
        )

    }
}

export const updateBookById = async (req, res) => {
    try {
        const updateData = req.body
        const bookId = req.params.id

        if (!updateData) {
             res.status(400).json(
                {
                    success: true,
                    message: "No changes detected",
                }
            )
        }
        const bookUpdated = await Book.findByIdAndUpdate(bookId, updateData, { new: true })
         res.status(200).json(
            {
                success: true,
                message: "Book updated",
                data: bookUpdated
            }
        )
    } catch (error) {
         res.status(500).json(
            {
                success: false,
                message: "Book cant be retrieved",
                error: error.message
            }
        )
    }
}

export const deleteBookById = async (req, res) =>{
    try {
        const bookId = req.params.id
        const bookDeleted = await Book.findOneAndDelete(bookId)

        res.status(200).json(
            {
                success: true,
                message: "Book deleted successfully",
                error: bookDeleted
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant be deleted",
                error: error.message
            }
        )        
    }
}
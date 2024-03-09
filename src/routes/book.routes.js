import { Router } from "express";
import { createBook, deleteBookById, getBookById, getBooks, updateBookById } from "../controllers/book.controller.js";

const router = Router();

router.post ( '/', createBook)
router.get ( '/', getBooks)
router.get ( '/:id', getBookById)
router.put ( '/:id', updateBookById)
router.delete ( '/:id', deleteBookById)

export default router;
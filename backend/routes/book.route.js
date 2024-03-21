import express from "express";
import { storeBook, findBooks, findBook, updateBook, deleteBook } from "../controller/bookController.js";
const router = express.Router();

router.post("/store", storeBook);
router.get("/getBook", findBooks);
router.get("/:id", findBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
export default router;

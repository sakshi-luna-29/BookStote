import express from "express";

import Book from "../models/book.model.js";

const storeBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required field : title , author , publish year." });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      piblishYear: req.body.publishYear,
    };
    const book = await Book.create(req.body);
    res.status(200).send({ data: book });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const findBooks = async (req, res) => {
  try {
    const bookFind = await Book.find({});
    res.status(200).send({ data: bookFind });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const findBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookFinds = await Book.findById(id);
    res.status(200).send({ data: bookFinds });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: error.message });
  }
};
const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required field : title , author , publish year." });
    }
    const newBook1 = {
      title: req.body.title,
      author: req.body.author,
      piblishYear: req.body.publishYear,
    };

    const { id } = req.params;
    const bookUpdate = await Book.findByIdAndUpdate(id, newBook1);
    if (!bookUpdate) {
      res.status(400).send({ message: "Book not Found. " });
    } else {
      res.status(200).send({ message: "Book updated Successfully." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookDelete = await Book.findByIdAndDelete(id);
    if (!bookDelete) {
      res.status(400).send({ message: "Book not Found. " });
    } else {
      res.status(200).send({ message: "Book deleted Successfully." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export { storeBook, findBooks, findBook, updateBook, deleteBook };

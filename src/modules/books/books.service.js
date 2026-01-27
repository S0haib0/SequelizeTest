import { bookModel } from "../../database/model/book.model.js";

export const getAllBooks = async () => {
  let bookData = await bookModel.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  console.log(bookData);

  return bookData;
};

export const getBookById = async (id) => {
  let bookData = await bookModel.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  return bookData;
};


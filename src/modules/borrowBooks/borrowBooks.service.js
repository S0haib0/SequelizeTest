import { BorrowedBookModel } from "../../database/model/BorrowedBook.model.js";
import { bookModel } from "../../database/model/book.model.js";
import { userModel } from "../../database/model/userModel.js";

export const borrowBook = async (data) => {
  let { userId, bookId } = data;
  let book = bookModel.findOne(bookId);
  let borrowData = await BorrowedBookModel.findOne({
    // where: { book.availableCopies},
  });
};

export const borrowCount = async (id) => {
  let borrowCount = await BorrowedBookModel.findAndCountAll({
    where: { userId: id },
  });
  return borrowCount;
};

export const allBorrowed = async (data) => {
  let { role } = data;
  let adminUser = userModel.findOne({ where: { admin: role } });
  if (adminUser) {
    let returnCount= BorrowedBookModel.findAll
    
  }
};

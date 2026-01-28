import { BorrowedBookModel } from "../../database/model/BorrowedBook.model.js";
import { bookModel } from "../../database/model/book.model.js";
import { Op, where } from "sequelize";
import { userModel } from "../../database/model/userModel.js";

// borrow book service
export const borrowBook = async (data) => {
  let { userId, bookId } = data;
  let book = bookModel.findOne({
    where: {
      [Op.and]: [{ id: bookId }, { availableCopies: { [Op.gt]: 0 } }],
    },
  });
  if (book) {
    let borrowData = await BorrowedBookModel.create({
      borrowDate: new Date(),
      bookStatus: "borrowed",
      bookId: bookId,
      userId: userId,
    });
    await bookModel.decrement("availableCopies", {
      by: 1,
      where: { id: bookId },
    });
    // await BorrowedBookModel.findOne({
    //   where: { id: borrowData.id },
    //   attributes: { exclude: ["createdAt", "updatedAt"] },
    //   include: [
    //     {
    //       include: {
    //         model: bookModel,
    //         include: { attributes: ["title", "author"] },
    //       },
    //     },
    //   ],
    // });
    return borrowData;
  }
};
// borrow count service
export const borrowCount = async (id) => {
  let borrowCount = await BorrowedBookModel.findAndCountAll({
    include: [{ where: { userId: id } }],
  });
  return borrowCount;
};

// all borrowed books service
export const allBorrowed = async (data) => {
  let { id } = data;
  let adminUser = await userModel.findOne({
    where: { [Op.and]: [{ id: id }, { role: "admin" }] },
  });
  if (adminUser) {
    let returnCount = BorrowedBookModel.findAll({
      where: { bookStatus: "borrowed" },
    });
    return returnCount;
  } else {
    throw new Error("only admin can access this data");
  }
};

import { userModel } from "./userModel.js";
import { bookModel } from "./book.model.js";
import { BorrowedBookModel } from "./BorrowedBook.model.js";

userModel.hasMany(BorrowedBookModel, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
bookModel.hasMany(BorrowedBookModel, {
  foreignKey: "bookId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
BorrowedBookModel.belongsTo(userModel, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
BorrowedBookModel.belongsTo(bookModel, {
  foreignKey: "bookId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
export { userModel, bookModel, BorrowedBookModel };

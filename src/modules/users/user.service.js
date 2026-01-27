import { userModel } from "../../database/model/userModel.js";

export const addUser = async (data) => {
  let { name, email, password, role } = data;
  let emailExists = await userModel.findOne({ where: { email: email } });

  if (!emailExists) {
    let userData = await userModel.create({ name, email, password, role });
    let showUser = await userModel.findOne({
      attributes: { exclude: ["password"] },
    });
    return showUser;
  }
  console.log(emailExists, "ana henaaaaaaaaaaaaaaaaaaaaaaaaa");

  return false;
};

export const logIn = async (data) => {
  let { email, password } = data;
  let emailExists = await userModel.findOne({
    where: { email: email, password: password },
    attributes: { exclude: ["password"] },
  });
  console.log(emailExists);

  return emailExists;
};

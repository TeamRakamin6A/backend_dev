const { User } = require("../models");
const { Op } = require("sequelize");
const { hashPassword, match } = require("../utils/BcryptUtil");
const { generateToken } = require("../utils/JwtUtil");

const loginUser = async (req, res, next) => {
  try {
    const { emailOrUsername, password } = req.body;
    const foundUser = await User.findOne({
      where: {
        [Op.or]: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });
    if (!foundUser) throw { name: "InvalidCredentials" };

    const isPasswordMatch = match(password, foundUser.password);
    if (!isPasswordMatch) throw { name: "InvalidCredentials" };

    const token = generateToken(foundUser);

    res.status(200).json({
      success: true,
      accessToken: token,
      dataUser: { id: foundUser.id },
    });
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, email, username, password, role } = req.body;
    if (!name || !email || !username || !password || !role)
      throw { name: "errorNotFound" };

    const foundUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });
    console.log(foundUser);
    if (foundUser) throw { name: "userAlreadyExist" };

    const hashedPassword = await hashPassword(password);
    User.create({ name, email, username, password: hashedPassword, role });

    res
      .status(200)
      .json({ status: true, message: "User Created Successfully" });
  } catch (error) {
    next(error);
  }
};

const getUserbyId = (req, res, next) => {};

const updateUser = (req, res, next) => {};

const getUserLogin = (req, res, next) => {};

module.exports = {
  loginUser,
  registerUser,
  getUserbyId,
  updateUser,
  getUserLogin,
};

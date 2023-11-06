const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name === "errorNotFound") {
    res.status(400).json({ status: false, message: "Error Not Found" });
  } else if (err.name === "userAlreadyExist") {
    res
      .status(400)
      .json({ status: false, message: "User Email or Username Already Exist" });
  } else if (err.name === "JsonWebTokenError") {
    res.status(404).json({ status: false, message: "Token is invalid" });
  } else if (err.name === "InvalidCredentials") {
    res
      .status(400)
      .json({ status: false, message: "Wrong Email or Username and Password" });
  } else {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = errorHandler;

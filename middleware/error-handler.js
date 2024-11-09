const { CustomApiError } = require("../errors/custom-error");

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomApiError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(500)
    .json({ message: "Something went wrong! please try again." });
};
module.exports = { errorHandler };

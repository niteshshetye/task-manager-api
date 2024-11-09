class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customApiError = (message, statusCode) => {
  return new CustomApiError(message, statusCode);
};

module.exports = {
  customApiError,
  CustomApiError,
};

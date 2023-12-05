// reusable error handling function
const handleError = (res, error) => {
  res.status(500).send({ message: error.message });
};

module.exports = handleError;

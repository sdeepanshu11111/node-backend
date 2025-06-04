const asyncHandler = (comingFn) => (req, res, next) => {
  Promise.resolve(comingFn(req, res, next)).catch((err) => {
    next(err);
  });
};

export default asyncHandler;

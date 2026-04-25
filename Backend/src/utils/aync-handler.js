const asyncHandler = (requestHandle) => {
    return async (req, res, next) => {
        Promise.resolve(requestHandle(req, res, next))
            .catch((error) => next(error));
    };
};

export { asyncHandler };
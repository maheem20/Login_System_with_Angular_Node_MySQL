exports.get404 = (req, res, next) => {
    const error = new Error('Not found!');
    error.statusCode = 404;
    next(error);
};

exports.get500 = (error, req, res, next) => {
};

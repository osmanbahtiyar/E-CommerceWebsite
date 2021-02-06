const notFound = (req, res, next) => {
    /**
     * this function takes request, response and next parameters
     * it creates an error with new Error
     * makes response's status 404
     * and passes this error object to next middleware function
     */
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
    /**
     * if you pass normal next() it goes next middleware
     * if you pass it with a value like next(error) it goes next errorHandler middleware
     * differences between normal and errorHandler middleware are
     *  - normal middleware functions takes 3 parameters (req, res, next)
     *  - errorHandler middleware functions takes 4 parameters (err, req, res, next)
     */
};

const errorHandler = (err, req, res, next) => {
    /**
     * this functions takes error, request, response, and next parameters
     * it checks response's status code
     * if it is 200 it sets 500 else it is the same
     * and responses a json object
     * if project is in production mode its stack is null
     * it project is in development mode stack is error stack
     * it is a final middleware because it did not pass next()
     */
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export { notFound, errorHandler };

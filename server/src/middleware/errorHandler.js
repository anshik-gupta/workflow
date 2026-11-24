const errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message:
            statusCode === 500 && process.env.NODE_ENV === "production"
                ? "Internal Server Error"
                : err.message
    });
};

export default errorHandler;
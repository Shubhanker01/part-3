const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    res.status(400).send("Something wrong occured")
    next()
}

module.exports = errorHandler
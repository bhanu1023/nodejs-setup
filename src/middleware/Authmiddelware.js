const HttpCodes = require('../Utils/HttpCodes')
const jwt = require('jsonwebtoken')

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization
    
    if (!token) {
        return res.status(HttpCodes.UNAUTHORIZED).json({ message: "No token provided" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(HttpCodes.UNAUTHORIZED).json({ message: "Invalid token" })
        next(error)
    }
}
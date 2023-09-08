const HttpCodes = require("../Utils/HttpCodes")
const authService = require("../Services/authService")

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await authService.login(email, password)
        res.status(HttpCodes.CREATED).end(JSON.stringify({ token }))
    } catch (error) {
        console.log(error)
        res.status(HttpCodes.INTERNAL_SERVER_ERROR).end(JSON.stringify({ message: error.message }))
    }
}
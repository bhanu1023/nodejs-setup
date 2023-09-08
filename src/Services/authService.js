const { BaseError } = require("sequelize");
const HttpCodes = require("../Utils/HttpCodes");
const userService = require("./userService");
const jwt = require("jsonwebtoken");


exports.login = async (email, password) => {
    const user = await userService.getByEmail(email);
    if (!user) {
        throw new BaseError('Invalid email or password', HttpCodes.UNAUTHORIZED);
    }
    if (password !== user.password) {
        throw new BaseError('Invalid email or password', HttpCodes.UNAUTHORIZED);
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 24 * 60 * 60,
    });
    return token;
}
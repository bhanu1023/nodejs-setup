const UserNotFound = require('../Exceptions/UserNotFound');
const db = require('../Models');
const { hashPassword } = require('../Utils/helper');

exports.getById = async (id) => {
    const user = await db.User.findByPk(id)
    if(!user) throw new UserNotFound('User not found')
    return user;
}

exports.getAll = async () => {
    const users = await db.User.findAll()
    return users;
}

exports.create = async (data) => {
    data = {
        ...data,
        password: hashPassword(data.password)
    }
    const user = await db.User.create(data)
    return user;
}

exports.update = async (id, data) => {
    const user = await db.User.findByPk(id)
    if(!user) throw new UserNotFound('User not found')
    await user.update(data)
    return user;
}

exports.getByEmail = async (email) => {
    const user = await db.User.findOne({
        where: {
            email: email
        }
    })
    return user;
}
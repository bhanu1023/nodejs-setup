const UserNotFound = require('../Exceptions/UserNotFound');
const db = require('../Models')

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
    const user = await db.User.create(data)
    return user;
}

exports.update = async (id, data) => {
    const user = await db.User.findByPk(id)
    if(!user) throw new UserNotFound('User not found')
    await user.update(data)
    return user;
}
const userService = require('../Services/userService');
const HttpCodes = require('../Utils/HttpCodes');

exports.getUsers = async (req, res) => {
    try {
        res.setHeader('Content-Type','application/json');
        const {id} = req.params
        const user = await userService.getById(id)
        res.status(HttpCodes.OK).send(JSON.stringify(user))
    } catch (error) {
        const {status, message} = error
        res.status(status).end(JSON.stringify({message: message}))
    }
    
}

exports.getAllUsers = async (req, res) => {
    try {
        res.setHeader('Content-Type','application/json');
        const users = await userService.getAll()
        res.status(HttpCodes.OK).send(JSON.stringify(users))
    } catch (error) {
        res.status(HttpCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify({
            'message': error.message
        }))
    }
}

exports.createUser = async (req, res) => {
    try {
        res.setHeader('Content-Type','application/json');
        const user = await userService.create(req.body)
        res.status(HttpCodes.CREATED).send(JSON.stringify(user))
    } catch (error) {
        res.status(HttpCodes.INTERNAL_SERVER_ERROR).send(JSON.stringify({
            'message': error.message
        }))
    }
}

exports.updateUser = async (req, res) => {
    try {
        res.setHeader('Content-Type','application/json');
        const {id} = req.params
        const user = await userService.update(id, req.body)
        res.status(200).send(JSON.stringify(user))
    } catch (error) {
        const {status, message} = error
        res.status(status).end(JSON.stringify({message: message}))
    }
}





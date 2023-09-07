const HttpCodes = require("../Utils/HttpCodes")

class BaseError extends Error{
    constructor(message, status){
        super(message)
        this.message = message
        this.name = this.constructor.name
        this.status = status || HttpCodes.INTERNAL_SERVER_ERROR
    }
}

module.exports = BaseError
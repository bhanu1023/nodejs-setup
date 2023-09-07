const BaseError = require('./BaseError');
const HttpCodes = require('../Utils/HttpCodes');

class UserNotFound extends BaseError {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status || HttpCodes.OK
  }
}

module.exports = UserNotFound;
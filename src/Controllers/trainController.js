const HttpCodes = require("../Utils/HttpCodes");
const trainService = require("../Services/trainService");

exports.getTrainById = async (req, res) => {
    try {
        const train = await trainService.getTrain(req.params.id);
        res.status(HttpCodes.OK).end(JSON.stringify(train));
    } catch (error) {
        const {status, message} = error;
        res.status(status).end(JSON.stringify({message: message})); 
    }
}

exports.createTrain = async (req, res) => {
    try {
        const train = await trainService.createTrain(req.body);
        res.status(HttpCodes.CREATED).end(JSON.stringify(train));
    } catch (error) {
        console.log(error);
        const {status, message} = error;
        res.status(status).end(JSON.stringify({message: message})); 
    }
}
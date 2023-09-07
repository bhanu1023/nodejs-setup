const TrainNotFound = require('../Exceptions/TrainNotfound');
const db = require('../Models');

exports.getTrain = async (id) => {
    const train = await db.Train.findByPk(id);
    if(!train) throw new TrainNotFound('Train not found');
    return train;
}

exports.createTrain = async (data) => {
    const train = await db.Train.create(data);
    return train;
}

exports.updateTrain = async (id, data) => {
    const train = await db.Train.findByPk(id);
    if(!train) throw new TrainNotFound('Train not found');
    await train.update(data);
    return train;
}


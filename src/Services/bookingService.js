const db = require('../Models');
const TrainNotFound = require('../Exceptions/TrainNotfound');

let reqCount = 1;

exports.getBookings = async (userid) => {
    const booking = await db.Booking.findAll({
        where: {
            userid: userid
        }
    });
    return booking;
}

exports.createBooking = async (data) => {
    const transaction = await db.sequelize.transaction({
      isolationLevel: db.Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
    });
    try {
      // Check seats availability and update seats within the serializable transaction
      const train = await db.Train.findByPk(data.trainid, {
        transaction,
        lock: {
          level: db.Sequelize.Transaction.LOCK.UPDATE,
          of: db.Train,
        },
      });
      
      console.log("sleep started: ", reqCount++)
      await sleep(10000)
      console.log("sleep ended: ")

      if (!train) {
        throw new TrainNotFound('Train not found');
      }
      if (train.seats < data.seats) {
        throw new TrainNotFound('Seats not available');
      }
      await train.update({ seats: train.seats - data.seats }, { transaction });
      const booking = await db.Booking.create(data, { transaction });
      await transaction.commit();
      return booking;
    } catch (error) {
      // Rollback the transaction if there is an error
      await transaction.rollback();
      throw error;
    }
  };
  
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

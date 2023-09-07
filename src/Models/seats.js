module.exports = function (sequelize, DataTypes) {
    const Seat = sequelize.define('Seat', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        trainid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Train',
                key: 'id'
            }
        },
        seatNumber: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        seatType: {
            type: DataTypes.ENUM('AC', 'NON-AC'),
            allowNull: false,
            defaultValue: 'NON-AC',
        },
        seatStatus: {
            type: DataTypes.ENUM('available', 'booked'),
            defaultValue: 'available',
            allowNull: false,
        },
        createdAt: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
        updatedAt: {
          type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false,
        },
        is_delete: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
      }, {
        tableName: 'Seat', // Optional: specify the table name if it's different from the model name
      });

    Seat.associate = function(models) {
        Seat.belongsTo(models.Train, {foreignKey: 'trainid', sourceKey: 'id'});
    };

    return Seat;
}
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'User',
                key: 'id'
            }
        },
        trainid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Train',
                key: 'id'
            }
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
        tableName: 'Booking', // Optional: specify the table name if it's different from the model name
      });

    Booking.associate = function(models) {
        Booking.belongsTo(models.User, {foreignKey: 'userid', sourceKey: 'id'});
        Booking.belongsTo(models.Train, {foreignKey: 'trainid', sourceKey: 'id'});

    };

    // sequelize.sync()
    // .then(() => {
    //     console.log('Database synchronized');
    // })
    // .catch(err => {
    //     console.error('Database synchronization error:', err);
    // });

    return Booking;
}


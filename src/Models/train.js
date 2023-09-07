module.exports = (sequelize, DataTypes) => {
    const Train = sequelize.define('Train', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        seats:{
            type: DataTypes.INTEGER,
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
        tableName: 'Train', // Optional: specify the table name if it's different from the model name
      });
    
    Train.associate = function(models) {
        Train.hasMany(models.Booking, {foreignKey: 'trainid', sourceKey: 'id'});
        Train.hasMany(models.Seat, {foreignKey: 'trainid', sourceKey: 'id'});
    };

    return Train;
}


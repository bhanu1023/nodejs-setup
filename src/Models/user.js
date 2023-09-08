module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        role: {
          type: DataTypes.STRING(20),
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
        tableName: 'User', // Optional: specify the table name if it's different from the model name
      });


    User.associate = function(models) {
        // User.hasMany(models.Booking, {foreignKey: 'userid', sourceKey: 'id'});
    };
    return User;
}


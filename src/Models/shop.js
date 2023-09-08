module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        address: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        pincode:{
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
        tableName: 'Shop', // Optional: specify the table name if it's different from the model name
      });


    Shop.associate = function(models) {
        // Shop.hasMany(models.Booking, {foreignKey: 'Shopid', sourceKey: 'id'});
    };
    return Shop;
}


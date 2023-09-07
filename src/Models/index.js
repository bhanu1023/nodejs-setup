const Sequelize = require('sequelize');
const fs = require("fs")
const path = require("path")
// const { applyExtraSetup } = require('./extra-setup');


const basename = path.basename(__filename);
const db = {}


const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    logQueryParameters: true,
    benchmark: true,
    timestamps: false,
  });


// const modelDefiners = [
// 	require('./user.model'),
// 	// require('./models/instrument.model'),
// 	// require('./models/orchestra.model'),
// 	// Add more models here...
// 	// require('./models/item'),
// ];

// We define all models according to their files.
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    console.log(model, path.join(__dirname, file))
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
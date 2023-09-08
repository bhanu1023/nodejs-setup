const { BaseError } = require('sequelize');
const db = require('../Models');
const HttpCodes = require('../Utils/HttpCodes');



exports.getAll = async (data) => {
    let {customer_pincode, offset, limit} = data;
    const shops = await db.sequelize.query(`select S.id, S.name, S.address, S.pincode from Shop S where S.is_delete = 0 order by abs(S.pincode - ${customer_pincode}) asc limit ${offset}, ${limit}`, { type: db.Sequelize.QueryTypes.SELECT });
    if(!shops || shops.length == 0) throw new BaseError('No shops found', HttpCodes.OK);
    return shops;
}
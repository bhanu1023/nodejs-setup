const shopService = require('../Services/shopService');
const HttpCodes = require('../Utils/HttpCodes');

const userid = 1;


exports.getShops = async (req, res) => {
    try {
        res.setHeader('Content-Type','application/json');
        const {customer_pincode, limit, offset} = req.query
        const shops = await shopService.getAll({customer_pincode, limit, offset})
        res.status(HttpCodes.OK).send(JSON.stringify(shops))
    } catch (error) {
        console.log(error)
        const {message} = error
        res.status(HttpCodes.INTERNAL_SERVER_ERROR).end(JSON.stringify({message: message}))
    }
    
}






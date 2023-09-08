exports.validate = (schema) => (req, res, next) => {
    
    const {error} = schema.validate(req.query);
    if (error) {
      res.status(422)
        .end(JSON.stringify({message: error.details[0].message}));
    } else {
      next();
    }
};
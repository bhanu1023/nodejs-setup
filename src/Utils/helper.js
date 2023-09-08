exports.hashPassword = async (password) => {
    const hash = crypto.createHash('sha1').update(password, "utf8").digest('hex');
    return hash;
}       
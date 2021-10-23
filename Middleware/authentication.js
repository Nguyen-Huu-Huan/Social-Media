const jwt = require('jsonwebtoken');

const tokenVerification = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send("Missing token for authentication");
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (e) {
        return res.status(401).send("Invalid token");
    }
    return next();
}

module.exports = tokenVerification;

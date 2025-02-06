const {validateToken} = require("../utils/jwt-manager");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401).json({ message: 'Token not provided.' });
    }
    const TOKEN_DECODED = validateToken(token);
    if(!TOKEN_DECODED){
        return res.sendStatus(403).json({ message: 'Invalid or expired token.' });
    }
    req.username = TOKEN_DECODED.username;
    next();
};

module.exports = { authenticateToken };
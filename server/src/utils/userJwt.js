const jwt = require('jsonwebtoken');

const signUser = (user) => {
    return jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
}

const verifyUser = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

const getUser = (token) => {
    return jwt.decode(token);
}

module.exports = { signUser, verifyUser, getUser };
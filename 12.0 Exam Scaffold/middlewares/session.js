const { verifyToken } = require("../services/userService");

module.exports = () => async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        console.log(token);
        try {
            const userData = await verifyToken(token);
            req.user = userData;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
}
require("dotenv").config()
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const white_lists = ["/", "/register", "/login"];
    if(white_lists.find(item => `/v1/api` + item === req.originalUrl)){
        next();
    } else {
        if (req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];

            // verify token
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = {
                    email: decoded.email,
                    name: decoded.name,
                    createdBy: "ngtantai"
                }
                console.log("Check decoded: ", decoded);
                next();
            } catch (error) {
                return res.status(401).json({
                    message: "Token đã hết hạn/ Hoặc Token không hợp lệ!",
                })
            }
        } else {
            return res.status(401).json({
                message: "Bạn chưa truyền access_token vào Header/ Hoặc access_token đã hết hạn",
            })
        }
    }
};

module.exports = auth;

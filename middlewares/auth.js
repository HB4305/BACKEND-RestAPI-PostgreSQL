import dotenv from 'dotenv';

dotenv.config();


export default function (req, res, next) {
    const apiKey = req.header('apiKey');
    if (apiKey === process.env.apiKey) {
        return next();
    }
    res.status(401).json({
        message: "Unauthorized",
    })
}
//need secret
require('dotenv').config();
const { SECRET } = process.env;
const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
    //send a auth header
    try{
        if (req.headers.authorization) {
        console.log('test auth function')
        
        const token = req.headers.authorization.split(' ')[1];
        console.log(token, 'token')
            const payload = await jwt.verify(token, SECRET)
            console.log(payload, "payload")
        if (payload) {
            req.payload = payload;
            next();
        } else {
            res.status(400).json({ error: "Verification Failed No Payload" });
        }

    } else {
        res.status(400).json({error: "NO AUTHORIZATION HEADER"})
        }
    }
    catch (error) {
        res.status(400).json({error:"AUTHORIZATION FUNCTION NOT WORKING"})
    }
}
module.exports = auth
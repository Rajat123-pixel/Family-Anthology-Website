const jwt = require("jsonwebtoken");

const authFun = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            res.status(400).json({ data: "Please Login again." });
            return;
        }

        // de-serializing the token and extracting the ID of the Member
        try {
            const deserialized_token = jwt.verify(token, process.env.SECRET_KEY);
    
            if (!deserialized_token) {
                console.log("JWT Token not Properly De-serialized. " + deserialized_token);
            }
    
            // log the ID of the Member
            console.log("Member ID: " + deserialized_token.payload);
    
            req.user = deserialized_token.payload;
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    }
    else {
        console.log("Member has been logged out");
        res.status(400).json({ data: "You have been logged out. Please Login again" });
        return;
    }

    next();
}

module.exports = { authFun };
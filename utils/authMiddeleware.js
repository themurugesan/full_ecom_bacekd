const jwt = require("jsonwebtoken");
const  secretKey  = require("../configuration/jwtConfig");  // Import the secret key

function authenticateToken(req, res, next) {
    const authHeader = req.header("Authorization");
    console.log(authHeader);
    
    
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }

    // const [bearer, token] = authHeader.split(" ");
    // // console.log(bearer,"beeee",token,"tokkeeee")
    // // if (bearer !== "Bearer" || !token) {
    // //     return res.status(402).json({ message: "Unauthorized: Invalid token format" });
    // // }

    jwt.verify(authHeader, "secretKey", (err, user) => {
        if (err) {
            console.log("JWT Verification Error:", err.message);  // Log error message
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }


        req.user = user;
        console.log(user)
        
        next();
    });
    
}

module.exports = { authenticateToken };

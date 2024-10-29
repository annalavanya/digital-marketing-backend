const jwt = require("jsonwebtoken");
require("../../../global_functions");

const valueFromBase64 = async (headers) => {
    if (headers?.registration) {
        const  base64Credentials = headers.registration.split(" ")[1];
        const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
        const [email, password] = credentials.split(":");
        return { email, password };
    } else {
        return TE("Missing Registration header");
    }
}
module.exports.valueFromBase64 = valueFromBase64;


const getJWT = async (userData, key) => {
    const expiration_time = parseInt(CONFIG.jwt_expiration);
    let [err, token] = await to(jwt.sign("Bearer " + userData, key, { expiresIn: expiration_time }));
    if (err) {
        return TE(err.message);
    }
    return token;
}
module.exports.getJWT = getJWT;
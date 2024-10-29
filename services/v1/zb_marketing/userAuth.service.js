// const Sequelize = require("sequelize");
const Staff = require("../../../models").staff;
const Role = require("../../../models").role;
const CommonService = require("./common.service");
require("../../../global_functions");
const login = async (email, password) => {
    let userErr, userData, passwordError, passwordData, tokenErr, token;
    [userErr, userData] = await to(Staff.findOne({
        where: {
            email: email,
            isDeleted: false
        },
        // attributes: [''],
        include: {
            model: Role,
            where: {
                isDeleted: false
            } 
        }
    }));
    if (userErr) {
        return TE(userErr.message);
    }
    if (userData) {
        [passwordError, passwordData] = await to(userData.comparePassword(password));
        if (passwordError) {
            return TE(passwordError.message);
        }
        if (passwordData) {
            [tokenErr, token] = await to(CommonService.getJWT(userData, CONFIG.jwt_encryption));
            if (tokenErr) {
               return TE(tokenErr.message);
            }
            // console.log(token);
            return token;
        } 
        // else {
        //     return TE("Invalid Credential");
        // }
    } else {
        return TE("User details not found");
    }
}
module.exports.login = login;
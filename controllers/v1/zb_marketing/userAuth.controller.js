
const express = require("express");
const app = express();
const UserAuthService = require("../../../services/v1/zb_marketing/userAuth.service");
const CommonService = require("../../../services/v1/zb_marketing/common.service");
require("../../../global_functions");
const { MSG } = require("../../../config/messages/zb_marketing/userAuth.message");

const userLogin = async (req, res) => {
    // const { email, password } = req.headers;
    let errorInfo, userInfo, err, login;
    [errorInfo, userInfo] = await to(CommonService.valueFromBase64(req.headers));
    if (errorInfo) {
        return ReE(res, Object.assign(MSG.INVALID_ACCOUNT, { details: errorInfo?.message }), 422);
    }
    if (userInfo?.email && userInfo?.password) {
        [err, login] = await to(UserAuthService.login(userInfo.email, userInfo.password));
        if (err) {
            return ReE(res, Object.assign(MSG.INVALID_ACCOUNT, { message: err?.message, details: 'INVALID_ACCOUNT' }), 206);
        }
        return ReS(res, { login: login, statusCode: MSG.LOGIN_SUCCESS.statusCode, msg: MSG.LOGIN_SUCCESS.message, }, 200);
    }
}
app.post('/login', userLogin);

const MSG = {};

MSG.INVALID_ACCOUNT = {
  statusCode: 'login-err-001',
  message: 'Data is InValid',
  details: 'Data is InValid',
  instance: '/login'
};

MSG.LOGIN_SUCCESS = {
  statusCode: 'login-success-001',
  message: 'Login Success',
  details: 'Login Success',
  instance: '/login'
}

module.exports.MSG = MSG;
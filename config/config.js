require("dotenv").config();
CONFIG = {};

/* Execution environment */
CONFIG.app = process.env.APP || "dev";
CONFIG.environment = process.env.APP || "local";
CONFIG.port = process.env.PORT || "5000";


/* DB Configuration */
CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;

/*Jwt Configuration*/
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || "sdd";
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || "86400000";

/* Secret key for id and token encryption / decryption */
CONFIG.secret_key = process.env.SECRET_KEY || "mysecretkey";




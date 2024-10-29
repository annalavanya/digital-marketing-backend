const bcrypt = require('bcrypt');
module.exports = (db, Sequelize) => {
    let Staff = db.define('staff', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            required: true
        },
        firstName: {
            type: Sequelize.STRING(50),
            allowNull: false,
            required: true      
        },
        lastName: {
            type: Sequelize.STRING(50),
            allowNull: false,
            required: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'staff', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Staff.association = (models) => {
        Staff.belongsTo(models.role, { foreignKey: 'roleId' });    
    };

    // password hash
    Staff.beforeSave(async (user, option) => {
        if (user.changed('password')) {
            const saltRounds = Math.floor(Math.random()*10);
            let err, salt, hash;
            [err, salt] = await to(bcrypt.genSalt(saltRounds));
            if (err) {
                console.log(err.message);
            }
            [err, hash] = await to(bcrypt.hash(user.password, salt));
            if (err) {
                console.log(err.message);
            }
            user.password = hash;
        }
    })

    Staff.prototype.comparePassword = async function (passwordInputByUser) {
        if (!this.password) TE("PWD_NOT_SET");
        const hashedPassword = this.password;
        let [err, isValidPassword] = await to(bcrypt.compare(passwordInputByUser, hashedPassword));
        if (err) {
            TE("Invalid credential");
        }
        if (!isValidPassword) {
            TE('INVALID_PASSWORD_MSG');
        }
        return this;
    }


    return Staff;
};

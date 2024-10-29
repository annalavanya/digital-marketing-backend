module.exports = (db, Sequelize) => {
    let User = db.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING(50),
            allowNull: false       
        },
        lastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        countryCode: {
            type: Sequelize.STRING(5),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'user', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    User.association = (models) => {
        User.hasMany(models.userAddress, { foreignKey: 'userId' });
        User.hasMany(models.order, { foreignKey: 'userId' });
        User.hasMany(models.paymentOrder, { foreignKey: 'userId' });
    };
    return User;
};

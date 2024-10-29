module.exports = (db, Sequelize) => {
    let UserAddress = db.define('userAddress', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        addressLine1: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        addressLine2: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        city: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        state: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        country: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        pinCode: {
            type: Sequelize.STRING(10),
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
        tableName: 'userAddress', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    UserAddress.association = (models) => {
        UserAddress.belongsTo(models.user, { foreignKey: 'userId' });
    };
    return UserAddress;
};

module.exports = (db, Sequelize) => {
    let PaymentOrder = db.define('paymentOrder', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        amount: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        currency: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        refundAmount: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'paymentOrder', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    PaymentOrder.association = (models) => {
        PaymentOrder.belongsTo(models.user, { foreignKey: 'userId' });
    };
    return PaymentOrder;
};

module.exports = (db, Sequelize) => {
    let Order = db.define('order', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orderPlacedOn: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        currency: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        price: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'order', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Order.association = (models) => {
        Order.belongsTo(models.user, { foreignKey: 'userId' });
        Order.belongsTo(models.plans, { foreignKey: 'planId' });
        Order.belongsTo(models.status, { foreignKey: 'statusId' });
        Order.belongsTo(models.quotes, { foreignKey: 'quoteId' });
    };  
    return Order;
};

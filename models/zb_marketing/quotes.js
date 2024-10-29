module.exports = (db, Sequelize) => {
    let Quotes = db.define('quotes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quoteName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        currency: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        price: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'quotes', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Quotes.association = (models) => {
        Quotes.hasMany(models.order, { foreignKey: 'quoteId' });
    };
    return Quotes;
};

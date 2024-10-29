module.exports = (db, Sequelize) => {
    let Plans = db.define('plans', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        planName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        planPrice: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        planMode: {
            type: Sequelize.ENUM('oneTime', 'Monthly'),
            allowNull: false
        },
        planFeature: {
            type: Sequelize.JSON,
            allowNull: false
        },
        planCode: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'plan_type', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Plans.association = (models) => {
        Plans.belongsTo(models.planType, { foreignKey: 'planTypeId' });
        Plans.hasMany(models.order, { foreignKey: 'planId' });
        Plans.hasMany(models.jobs, { foreignKey: 'planId' });
    };
    return Plans;
};

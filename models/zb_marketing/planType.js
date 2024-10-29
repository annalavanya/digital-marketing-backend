module.exports = (db, Sequelize) => {
    let PlanType = db.define('planType', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        typeName: {
            type: Sequelize.ENUM,
            values: ['Logo', 'Video', 'Social Media Marketing'],
            allowNull: false
        },
        code: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        tableName: 'planType', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    PlanType.association = (models) => {
        PlanType.hasMany(models.plans, { foreignKey: 'planTypeId' });
    };
    return PlanType;
};

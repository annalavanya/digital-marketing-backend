module.exports = (db, Sequelize) => {
    let Jobs = db.define('jobs', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        assignedTo: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            required: true
        },
        assignedBy: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true
        },
        assignedOn: {
            type: Sequelize.DATE,
            allowNull: false,
            required: true
        },
        endOn: {
            type: Sequelize.DATE,
            allowNull: false,
            required: true
        }
    }, {
        tableName: 'jobs', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Jobs.association = (models) => {
        Jobs.belongsTo(models.order, { foreignKey: 'orderId' });
        Jobs.belongsTo(models.plans, { foreignKey: 'planId' });
        Jobs.hasMany(models.jobLogs, { foreignKey: 'jobId' });
    };  
    return Jobs;
};

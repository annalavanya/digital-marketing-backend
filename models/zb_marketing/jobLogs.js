module.exports = (db, Sequelize) => {
    let JobLogs = db.define('jobLogs', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            required: true
        },
        updatedBy: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        }
    }, {
        tableName: 'jobLogs', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    JobLogs.association = (models) => {
        JobLogs.belongsTo(models.jobs, { foreignKey: 'jobId' });
    };  
    return JobLogs;
};

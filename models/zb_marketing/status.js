module.exports = (db, Sequelize) => {
    let Status = db.define('status', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.ENUM,
            values: [ 'new', 'inprogress', 'completed', 'user approved','hold', 'cancelled', 'started', 'under-correction', 'discussion-needed', 'payment paid', 'payment failed', 'refund'],
            allowNull: false
        },
        code: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'status', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Status.association = (models) => {
        Status.hasMany(models.order, { foreignKey: 'statusId' });    
    };
    return Status;
};

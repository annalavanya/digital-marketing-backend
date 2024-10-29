module.exports = (db, Sequelize) => {
    let Role = db.define('role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
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
        tableName: 'role', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Role.association = (models) => {
        Role.hasMany(models.roleBasedMenu, { foreignKey: 'roleId' });
        Role.hasMany(models.staff, { foreignKey: 'roleId' });
    };  
    return Role;
};

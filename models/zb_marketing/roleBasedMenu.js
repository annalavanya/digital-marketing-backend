module.exports = (db, Sequelize) => {
    let RoleBasedMenu = db.define('roleBasedMenu', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        isReadOnly: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'roleBasedMenu', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    RoleBasedMenu.association = (models) => {
        RoleBasedMenu.belongsTo(models.menu, { foreignKey: 'menuId' });
        RoleBasedMenu.belongsTo(models.role, { foreignKey: 'roleId' });
    };  
    return RoleBasedMenu;
};

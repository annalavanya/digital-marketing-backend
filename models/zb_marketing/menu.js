module.exports = (db, Sequelize) => {
    let Menu = db.define('menu', {
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
        routeLink: {
            type: Sequelize.STRING,
            allowNull: false
        },
        displayPosition: {
            type: Sequelize.STRING
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        tableName: 'menu', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    Menu.association = (models) => {
        Menu.hasMany(models.roleBasedMenu, { foreignKey: 'menuId' });
    };  
    return Menu;
};

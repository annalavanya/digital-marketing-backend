module.exports = (db, Sequelize) => {
    let Enquiries = db.define('enquiries', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userName: {
            type: Sequelize.STRING(50),
            allowNull: false       
        },
        type: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        contactNumber: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        message: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        countryCode: {
            type: Sequelize.STRING(5),
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM,
            values: ['new', 'under review', 'done']
        }
    }, {
        tableName: 'enquiries', schema: 'zb_marketing', underscored: true, timestamps: true
    });
    return Enquiries;
};

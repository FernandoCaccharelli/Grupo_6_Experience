module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        }, 
        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        birth_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        profile: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Basket,{
            as:"carritos",
            foreignKey: "users_id"
        });
    }


    return Usuario;
};
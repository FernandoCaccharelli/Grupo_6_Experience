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
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: dataTypes.DATE,
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: false
        },
        profile: {
            type: dataTypes.STRING,
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
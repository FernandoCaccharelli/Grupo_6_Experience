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
         
        },
        lastName: {
            type: dataTypes.STRING,
            
        }, 
        email: {
            type: dataTypes.STRING,
          
        },
        password: {
            type: dataTypes.STRING,
           
        },
       // birthdate: {
         //   type: dataTypes.DATE,
        //},
        avatar: {
            type: dataTypes.STRING,
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
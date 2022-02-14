module.exports = (sequelize, dataTypes) => {
    let alias = 'Basket'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //created_at: dataTypes.TIMESTAMP,
        //updated_at: dataTypes.TIMESTAMP,
       
        quantity: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        total_price: {
            type: dataTypes.DECIMAL(10).UNSIGNED,
            allowNull: false
        },
        users_id: dataTypes.BIGINT(10),
     
    };
    let config = {
        tableName: "carritos",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Basket = sequelize.define(alias,cols,config);

       Basket.associate = function(models){
        Basket.belongsTo(models.Usuario,{
            as:"usuarios",
            foreignKey: "users_id"
        });
        Basket.belongsToMany(models.Basket,{
            as:"productos",
            through:"carritos_productos",
            foreignKey: "basket_id",
            otherKey:"product_id",
            timestamps:false,
        })
   
    }

    return Basket;
};
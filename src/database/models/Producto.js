module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
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
        price: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        },
        people: {
            type: dataTypes.DECIMAL(10).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        expiration_date: {
            type: dataTypes.DATE
        },
        image: dataTypes.STRING,
        category_id:dataTypes.BIGINT(10)
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Producto = sequelize.define(alias,cols,config);

   
    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria,{
            as:"categoria",
            foreignKey: "category_id"
        });
        Producto.belongsToMany(models.Basket,{
            as:"carritos",
            through:"carritos_productos",
            foreignKey: "product_id",
            otherKey:"basket_id",
            timestamps:false,
        })
    }

    return Producto;
};
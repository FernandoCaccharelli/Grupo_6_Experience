module.exports = (sequelize, dataTypes) => {
   let alias = 'Categoria'; 
      let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
           autoIncrement: true
         },
         //created_at: dataTypes.TIMESTAMP,
         //updated_at: dataTypes.TIMESTAMP,
        category: {
             type: dataTypes.STRING,
             allowNull: true
         },
     };
        
     let config = {
         tableName: "categorias",
         timestamps: true,
         createdAt: 'created_at',
         updatedAt: 'updated_at',
         deletedAt: false
     }
     const Categoria = sequelize.define(alias,cols,config);

   
     Categoria.associate = function(models){
          Categoria.hasMany(models.Producto,{
            as:"productos",
            foreignKey: "category_id"
        });
    }

     return Categoria;
 };
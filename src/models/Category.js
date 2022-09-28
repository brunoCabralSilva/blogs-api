const CatSchema = (sequelize, DataTypes) => {
    const CatTable = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(255),
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });
   
    return CatTable;
  };
  
  module.exports = CatSchema;
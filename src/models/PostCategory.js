const PostCatSchema = (sequelize, DataTypes) => {
    const PostCatTable = sequelize.define('PostCategory', {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },);
  
    PostCatTable.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'category_id',
        through: PostCatTable,
        foreignKey: 'id',
        otherKey: 'category_id',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPost_id',
        through: PostCatTable,
        foreignKey: 'category_id',
        otherKey: 'id',
      });
    };
  
    return PostCatTable;
  };
  
  module.exports = PostCatSchema;
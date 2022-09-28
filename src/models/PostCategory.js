const PostCatSchema = (sequelize, DataTypes) => {
    const PostCatTable = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName:'posts_categories',
      underscored:true,
      timestamps: false,
    },
    );
  
    PostCatTable.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'category',
        through: PostCatTable,
        foreignKey: 'postId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCatTable,
        foreignKey: 'categoryId',
      });
    };
  
    return PostCatTable;
  };
  
  module.exports = PostCatSchema;
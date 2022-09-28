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
        foreignKey: 'post_id',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blog_posts',
        through: PostCatTable,
        foreignKey: 'category_id',
      });
    };
  
    return PostCatTable;
  };
  
  module.exports = PostCatSchema;
const UserSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'BlogPosts',
    });
  };

  return UsersTable;
};

module.exports = UserSchema;
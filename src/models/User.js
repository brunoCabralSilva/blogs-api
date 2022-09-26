const UserSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  },
  {
    tableName: 'users',
    underscored: true,
    timeStamps: false,
  });

  return UsersTable;
};

module.exports = UserSchema;
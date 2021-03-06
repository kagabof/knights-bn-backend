module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    requesterId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    type: DataTypes.ENUM('one_way', 'two_way', 'multi_way'),
    reason: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    status: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    cities: DataTypes.ARRAY(DataTypes.JSON),
  }, {});
  Request.associate = (models) => {
    Request.hasMany(models.Comment, {
      foreignKey: 'requestId',
      onDelete: 'CASCADE',
    });
  };
  return Request;
};

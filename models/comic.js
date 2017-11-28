'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comic = sequelize.define('Comic', {
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comic;
};

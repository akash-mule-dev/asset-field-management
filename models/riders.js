'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riders.init(
    {
      riders_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'riders',
    },
  );
  return riders;
};

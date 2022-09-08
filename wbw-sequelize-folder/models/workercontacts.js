'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workerContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workerContacts.init({
    worker_id: DataTypes.INTEGER,
    contact_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'workerContacts',
  });
  return workerContacts;
};
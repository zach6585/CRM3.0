'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contact.belongsToMany(Worker, {through: 'workerContacts'});
    }
  }
  Contact.init({
    company: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    title: DataTypes.STRING,
    old_address: DataTypes.STRING,
    new_address: DataTypes.STRING,
    category: DataTypes.STRING,
    broker_name: DataTypes.STRING,
    broker_company: DataTypes.STRING,
    broker_number: DataTypes.STRING,
    broker_email: DataTypes.STRING,
    architect_name: DataTypes.STRING,
    architect_company: DataTypes.STRING,
    architect_number: DataTypes.STRING,
    architect_email: DataTypes.STRING,
    consultant_name: DataTypes.STRING,
    consultant_company: DataTypes.STRING,
    consultant_number: DataTypes.STRING,
    consultant_email: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};
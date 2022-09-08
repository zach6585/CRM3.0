'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Worker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Worker.belongsToMany(Contact, {through: 'workerContacts'});
    }
    static search(results){
      /* 
      - This will be a function that runs the search feature. Since we don't want to be sending all of the 
      data to the client-end of this, we want to make this query happen on the back end. 

      - results is the stuff the user inputs in the search functionality (which 
      will most likely be in the form of a json). 

      - We will then return a json object containing the contacts that meet the qualities asked for, something that we will then 
      share with the client-side so the returned parameter could be shown
      */
    }
  }
  Worker.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Worker',
  });
  return Worker;
};
import { Sequelize, Model, DataTypes } from sequelize;
import sequelize from "../util/database";

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, //Makes it so it must be a thing
        primaryKey: true //sets it as a primary key
    },
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
});
import Sequelize from "sequelize";

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
    dialect: 'postgres', 
    host: 'localhost'
});

export default sequelize;

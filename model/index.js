const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB, process.env.USER, '',{
    host: process.env.HOST,
    dialect : 'mysql',
    pool:{
        maxConnections : 5,
        minCOnnections:0,
        idle:30000,
        acquire:5000
    }
})
sequelize.authenticate().then(()=>{
    console.log('successful');
})
.catch(e=>{
    console.log('error'+ e);
})
module.exports = sequelize;
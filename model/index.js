const {Sequelize, DataTypes} = require('sequelize');
const makeUserTable = require('./userModel');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB, process.env.USER, '',{
    host: process.env.HOST,
    dialect : 'mysql',
    pool:{
        maxConnections : 5,
        minConnections:0,
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
const User = makeUserTable(sequelize, DataTypes);
const db ={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;

sequelize.sync({force:false}).then(()=>{
    console.log('sync successful');
}).catch(e=>{
    console.log('error in sync db',err);
})
module.exports = sequelize;
module.exports = db;
const { DataTypes } = require("sequelize");

const makeUserTable=(sequelize,DataTypes)=>{
const User = sequelize.define('User', {
    Fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    }
})
    return User;
}
module.exports = makeUserTable;

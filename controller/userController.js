// view users
const {User} = require('../model/index')
// const User = require('../model/userModel');
exports.view = async (req,res)=>{
    try {
        const users = await User.findAll();
        const plainUsers = users.map(user => user.dataValues);
        res.render('home', { users: plainUsers });
        // console.log('Users data:', users);
        res.render('home',{users});
    }
    catch(e){
        console.log('error in finding user',e);
    }
    

}
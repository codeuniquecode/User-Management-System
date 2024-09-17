// view users
const { Where } = require('sequelize/lib/utils');
const {User} = require('../model/index');
const { where } = require('sequelize');
const {Op} = require('sequelize');
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
exports.find = async (req,res)=>{
    let searchTerm = req.body.search;
    try{
        const users = await User.findAll({
            //for a single term search
            where:{
                Fullname: {
                    [Op.like]: `%${searchTerm}%` // Use Op.like with wildcards for partial match
                }
            }

            // for double term such as name and number
            // where:{
            //     [Op.or] : [{
            //         Fullname: {
            //             [Op.like] : `%${searchTerm}%`
            //         }
            //     },
            //     {
            //         Phone : req.body.Phone
            //     }
            // ]
            // }

        })
        const plainUsers = users.map(user => user.dataValues);
        res.render('home', { users: plainUsers });
    }
    catch(e){
        console.log('Error finding user',e);
    }
}
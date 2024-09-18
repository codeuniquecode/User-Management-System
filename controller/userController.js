// view users
const { Where } = require('sequelize/lib/utils');
const { User } = require('../model/index');
const { where } = require('sequelize');
const { Op } = require('sequelize');
const { create } = require('express-handlebars');
// const User = require('../model/userModel');

//show every data
exports.view = async (req, res) => {
    try {
        const users = await User.findAll();
        const plainUsers = users.map(user => user.dataValues);
        res.render('home', { users: plainUsers });
        // console.log('Users data:', users);
        res.render('home', { users });
    }
    catch (e) {
        console.log('error in finding user', e);
    }
}
// end

// search-- navbar
exports.find = async (req, res) => {
    let searchTerm = req.body.search;
    try {
        const users = await User.findAll({
            //for a single term search
            where: {
                Fullname: {
                    [Op.like]: `%${searchTerm}%` // Use Op.like with wildcards for partial match
                }
            }
        })
        const plainUsers = users.map(user => user.dataValues);
        res.render('home', { users: plainUsers });
    }
    catch (e) {
        console.log('Error finding user', e);
    }
}
// end
//register get
exports.userR = (req, res) => {
    res.render('register');
}

//register post
exports.userRegister = async (req, res) => {
    const { fname, email, password, comment, phone } = req.body;
    try {
        await User.create({
            Fullname: fname,
            Email: email,
            Password: password,
            Phone: phone,
            comments: comment
        });
        res.render('login', { alert: 'Registered Succesfully, Please Login' });
    }
    catch (e) {
        console.log('error in registering', e);
    }
}
//end
exports.userE = async (req,res) =>{
    const userId = req.params.id;
    try{
        const user = await User.findOne({
            where:{id : userId}
        });
        if(user){
            res.render('edit',{user:user.dataValues});
        }
        else{
            res.status(404).send('user not found');
        }
    }
    catch(e){
        console.log('error finding user data',e);
    }
}
// edit operation
exports.userEdit = async(req,res) =>{
    const userId = req.params.id;
    const { fname, email, password, comment, phone } = req.body;
    try {
        await User.update({
            Fullname: fname,
            Email: email,
            Password: password,
            Phone: phone,
            comments: comment
        },{
            where : {id : userId}
        }
    ); 
    res.render('edit', { alert: 'Updated Successfully' });
    }
    catch (e) {
        console.log('error in registering', e);
    }
}
//end
//delete operation
exports.userDelete = async (req,res)=>{
    const userId = req.params.id;
    try{
        console.time('deleteTime'); // Start timing
        await User.destroy({
            where: { id: userId }
        });
        console.timeEnd('deleteTime'); // End timing
        res.redirect('/');
    }
    catch(e){
        console.log('error in deleting user',e);
    }
}
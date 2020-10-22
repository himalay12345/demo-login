let User = require('../models/user');
let Contact = require('../models/contact');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');



module.exports.destroySession = function(req, res) {
    req.logout();

    return res.redirect('/');
}


module.exports.sendMessage = function(req, res) {
   Contact.create(req.body);
   return res.redirect('back');

}



module.exports.changePassword = async(req, res) => {
    let user = await User.findOne({ phone: req.body.phone });
    if (req.body.old != user.password) {
        req.flash('error', 'Wrong Old Password!');
        return res.redirect('back');
    }

    if (req.body.password != req.body.confirm) {
        req.flash('error', 'Passwords do not match!')
        return res.redirect('back');
    }

    user.password = req.body.password;
    user.save();

    req.flash('success', 'Password changed successfully!');
    return res.redirect('back');
}
module.exports.resetPassword = async(req, res) => {
    if (req.body.password != req.body.confirm) {
        req.flash('error', 'Passwords do not match!');
        return res.render('set-password', {
            title: 'Reset-password',
            phone: req.body.phone
        })
    } else {
        let user = await User.findOne({ phone: req.body.phone });
        user.password = req.body.password;
        user.save();

        req.flash('success', 'Password reset successfully');
        return res.redirect('/login');
    }
}

module.exports.profileUpdate = async function(req, res) {

    try {


        let user = await User.findById(req.user.id);
        User.uploadedAvatar(req, res, function(err) {
            if (err) { console.log('*******Multer Error', err); return; }
            user.name = req.body.name;
            user.dob = req.body.dob;
            user.phone = req.body.phone;
            user.email = req.body.email;
            user.address = req.body.address;
            user.city = req.body.city;
            user.state = req.body.state;
            user.pincode = req.body.pincode;
            user.country = req.body.country;
            user.bloodgroup = req.body.bloodgroup;
            user.gender = req.body.gender;





            if (req.files['avatar']) {
                if (!user.avatar) {
                    user.avatar = User.avatarPath + '/' + req.files['avatar'][0].filename;
                } else {

                    fs.unlinkSync(path.join(__dirname, '..', user.avatar));
                    user.avatar = User.avatarPath + '/' + req.files['avatar'][0].filename;
                }
            }

            user.save();


        });
        req.flash('success', 'Profile updated!');
        return res.redirect('back');


    } catch (err) {
        console.log('Error', err);
        return;
    }

}
module.exports.createSession = async function(req, res) {


    return res.redirect('/');
}
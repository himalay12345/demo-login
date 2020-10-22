const User = require('../models/user');
const Contact = require('../models/contact');

module.exports.Home = (req, res) => {
    return res.render('index', {
        title: 'Home'
    })
}

module.exports.Courses = (req, res) => {
    return res.render('courses', {
        title: 'Courses'
    })
}


module.exports.Dashboard = async (req, res) => {
    let users = await Contact.find({});
    return res.render('dashboard', {
        title: 'Dashboard',
        users:users
    })
}
module.exports.formapplication = (req, res) => {
    return res.render('form-application', {
        title: 'Application form'
    })
}
module.exports.Contact = (req, res) => {
    return res.render('contact', {
        title: 'Contact'
    })
}
module.exports.CourseDetails = (req, res) => {
    return res.render('coures-details', {
        title: 'Cousre Details'
    })
}
module.exports.login = (req, res) => {
    // if (req.isAuthenticated()) {
    //     return res.redirect('/')
    // }
    return res.render('login', {
        title: 'Login'
    })
}
module.exports.Events = (req, res) => {
    return res.render('events', {
        title: 'Events'
    })
}
module.exports.About = (req, res) => {
    return res.render('about', {
        title: 'About'
    })
}
module.exports.Pricing = (req, res) => {
    return res.render('pricing', {
        title: 'Pricing'
    })
}

module.exports.Trainer = (req, res) => {
    return res.render('trainers', {
        title: 'Trainers'
    })
}

module.exports.signUp = (req, res) => {
    return res.render('sign-up', {
        title: 'Sign Up'
    })
}
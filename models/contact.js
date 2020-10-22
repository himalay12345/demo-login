const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    email: {
        type: String


    },
    phone:{
        type: Number
    },
   
    name: {
        type: String

    },
    subject: {
        type: String

    },
    description: {
        type: String

    }
   
    
   



}, {
    timestamps: true
});

const Contact = mongoose.model(
    'Contact', contactSchema);

module.exports = Contact;
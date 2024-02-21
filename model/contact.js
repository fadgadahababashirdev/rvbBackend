const mongoose = require('mongoose');
const contact = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    message:{
        type:String
    },
});

module.exports = mongoose.model('contact', contact);

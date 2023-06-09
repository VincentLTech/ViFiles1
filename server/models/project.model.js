const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    gitId: {
        type : String
    },
    name : {
        type: String
    },
    language : {
        type : String
    },
    desc: {
        type: String
    },
    categories : {
        type : []
    },
    gitUrl : {
        type: String
    },
    url : {
        type: String
    },
    likes : {
        type: []
    }
})

module.exports = mongoose.model('Project', Schema)
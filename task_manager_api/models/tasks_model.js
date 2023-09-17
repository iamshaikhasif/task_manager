const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength:[20, 'name can not be more than 20 character'],
        trim:true,
        required:[true, 'can not be null or empty']
    }, 
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', TaskSchema)
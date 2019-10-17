const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({

    commune:      { type: Number, required: true },
    neighborhood: { type: String, required: true },
    address:      { type: String, required: true },
    name:         { type: String, required: true },
    phone:        { type: String, required: true },
    description:  { type: String, required: false},
    document:     { type: String, required: true },
    voting:       { type: String, required: true },
    table:        { type: String, required: true }, 
    state:        { type: Boolean, default: false}
    
});

module.exports = mongoose.model('persons', PersonSchema);
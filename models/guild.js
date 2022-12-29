const mongoose = require('mongoose')

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '?' },
    logChannel: { 'type': String, 'default': '1044258472121860126'}
});

module.exports = mongoose.model('Guild', guildSchema)
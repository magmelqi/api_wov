const mongoose = require('mongoose')
const dayjs = require('dayjs')

const timestamp = `${dayjs().add(-1, 'hour').format("DD-MM-YYYY")}`;

const xpSchema = mongoose.Schema({
    Pseudo: String,
    Id: String,
    xp: String,
    date: String
});

module.exports = mongoose.model(`${timestamp}`, xpSchema)
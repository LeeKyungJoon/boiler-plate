const { model } = require("mongoose");

if(process.env.MODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}
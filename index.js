const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://daniel:kkkk789@boilerplate.z33ye.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongDB Connected')
}).catch(err => {
    console.log(err)
})




app.get('/', (req, res) => {
    res.send('Hello World gggggg')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
const mongoose = require("mongoose")

mongoose.connect(process.env.URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
console.log(`database connected to ${data.connection.host}`)
    })
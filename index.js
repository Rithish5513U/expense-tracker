const express = require('express')
const app = express()

const static = express.static('static');
app.use("/",static);

app.get("/hi",(req,res)=>{
    console.log(req.query)
    res.json(req.query)
})
//  })

app.listen(3000,()=>{
    console.log("App running");
});
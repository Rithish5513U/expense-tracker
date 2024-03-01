const express = require('express')
const app = express()

const static = express.static('static');
app.use("/",static);

app.get("/hi",(req,res)=>{
    console.log(req.query)
    //res.send("hello World")
    //http://localhost:4000/hi?phone=12
    /**
     * host: localhost/127.0.0.1
     * port: 4000
     * path:/hi
     * ?key=value
     */
    res.json(req.query)
})
//  })

app.listen(3000,()=>{
    console.log("App running");
});
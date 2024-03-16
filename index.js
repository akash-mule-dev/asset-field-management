const express = require('express');

const app = express();

app.get('/',()=>{
    console.log("Get Request received");
})

app.listen('3000',()=>{  
    console.log("Listening on port 3000");
})
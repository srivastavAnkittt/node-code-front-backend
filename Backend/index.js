const express = require('express');
require('./db/config');
const users = require('./db/User');
const cors = require('cors');
// const { use } = require('react');
const app = express();
app.use(express.json())
app.use(cors())

app.post('/register', async (req, resp) => {
    const userData = users(req.body);
    let result = await userData.save();
    result = result.toObject();
    delete result.password;
    resp.send(result)
    console.log(result);
});

app.post('/login', async (req, resp) => {
    let {email, password } = req.body;
if (email  && password){
    let user = await users.findOne({email, password}).select("-password");
    if(user){
        resp.send(user);
        console.log(user);  
    }
}else{
    resp.send({result: "user not found"})
    console.log('user not found')
}
})


app.listen(3007);
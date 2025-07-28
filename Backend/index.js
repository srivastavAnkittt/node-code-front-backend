const express = require('express');
require('./db/config');
const users = require('./db/User');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())

app.post('/register' ,async (req, resp) => {
    const userData = users(req.body);
    const result = await userData.save();
    resp.send(result)
});
// ankitt
app.listen(5000);
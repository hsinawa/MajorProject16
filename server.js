const express = require("express");
const bodyparser = require("body-parser");
const app = express();
// accountSid = '23a9b5d52b20b';

// authToken = 'b9605668cc8';

// const client = require('twilio')('AC4b987f9ad' + accountSid + '55cac0f81f', 'ebffa4353697' + authToken + 'a71c7a16c');
// //zbwxvkpfjigjxant


const accountSid = 'AC25e57c35ff0fa2cffd8b8dc7668fb3a0';
const authToken = '192373951eacc9fa465323f9df44bb9a';
const client = require('twilio')(accountSid, authToken);



app.use(bodyparser.json());

const path = require("path");


app.get("/", (req, res) => {
  res.send("Welcome to Well Be");
});

app.post('/api/accident', ()=>{
    console.log('API is here')
    client.messages
    .create({
        body: `Alert! ${req.body.nameofvictim} has met with an accident at the given cordinates Latitude:${req.body.latitude} Longitude :${req.body.longitude}  `,
        from: '+13204139222',
        to: '+919599150262'
    })
    .then(message => console.log(message.sid))
    .done();
} )

const port = 9904;

app.listen(port, () => {
  console.log("Server started of AccidentWatch");
});

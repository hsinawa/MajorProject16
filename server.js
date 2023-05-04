const express = require("express");
const bodyparser = require("body-parser");
const app = express();
// accountSid = '23a9b5d52b20b';

// authToken = 'b9605668cc8';

// const client = require('twilio')('AC4b987f9ad' + accountSid + '55cac0f81f', 'ebffa4353697' + authToken + 'a71c7a16c');
// //zbwxvkpfjigjxant





app.use(bodyparser.json());

const path = require("path");


app.get("/", (req, res) => {
  res.send("Welcome to Well Be");
});

app.post('/api/accident', ()=>{
    console.log('API is here')
    client.messages
    .create({
        body: `Alert! Awanish has met with an accident at the given cordinates Latitude:28.5746° N, Longitude : 77.3136° E  `,
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

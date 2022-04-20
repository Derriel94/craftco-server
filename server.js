const express = require('express');
const cors = require('cors');
const app = express();
const consult = require('./controllers/consult.js');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// const client = require('twilio')(accountSid, authToken);
// client.messages.create({
// 	to: '+14698918404',
// 	from: '+16823280293',
// 	body: 'This will come from the front end Input at some point',
// })
// .then(message => console.log(message.sid)); 

app.get('/', (req, res)=> {
	res.send('/home');

})
app.post('/consult', (req, res) => {consult.handleConsult(req, res, accountSid, authToken)});



//process.env chooses a port that is given, if it is given even.
app.listen(process.env.PORT || 3001, ()=> {
	console.log("appp is here")
})
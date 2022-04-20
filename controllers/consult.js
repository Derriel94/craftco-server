const handleConsult = (req, res,accountSid, authToken) => {
	const { data } = req.body;
	let tempBody = "";
	for (const [key, value] of Object.entries(data)) {
		tempBody = tempBody+` ${key}:${value}\n`;
	}
	console.log(tempBody)
	if (!data) {
		return res.status(400).json('incorrect form submission');
	}
	const client = require('twilio')(accountSid, authToken);
     client.messages.create({
		to: '+14698918404',
		from: '+16823280293',
		body: tempBody,
})
.then(message => console.log('Message sent successfully')); 
}

module.exports = {
	handleConsult:handleConsult
};
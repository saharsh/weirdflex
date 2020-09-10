const fetch = require('node-fetch');

const getFlex = async (req, res) => {
	const { token, response_url } = req.body;
	if (token !== process.env.SLACK_TOKEN) {
		return res.status(400);
	}

	res.status(200).send();

	await fetch(response_url, {
		method: 'POST',
		body: JSON.stringify({
			response_type: 'in_channel',
			text: 'hi',
		}),
	});
};

getFlex();

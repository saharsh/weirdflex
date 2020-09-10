const fetch = require('node-fetch');

export default (req, res) => {
  const { token, text, user_id, response_url } = req.body;
​
  if (token !== process.env.SLACK_TOKEN) {
    return res.status(400);
  }
	
  res.status(200).send() // or whatever the equivalent is in your framework
	
  await fetch(response_url, {
	  method: 'POST',
	  body: {
      response_type: 'in_channel',
      text: 'hi',
    	blocks: messageBlocks
  }})
​
  return;
}
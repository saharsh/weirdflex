export default (req, res) => {
  const { token, text } = req.body;

  if (token !== process.env.SLACK_TOKEN) {
    return res.status(400);
  }

  return res.status(200).json({
    response_type: 'in_channel',
    text: 'hi',
  });
};

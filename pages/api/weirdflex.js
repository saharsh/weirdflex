export default (req, res) => {
  const { token, text } = req.body;

  if (token !== process.env.SLACK_TOKEN) {
    return res.status(400);
  }

  // Responses from https://www.reddit.com/r/AskReddit/comments/9v4ucg/reddit_what_are_other_ways_to_say_weird_flex_but/
  const flexes = [
    'An unorthodox show of prowess, but I shall oblige',
    'Peculiar boast but alas',
    'Odd gloat but understandable nonetheless',
    'Awkward comparison to a muscle contraction in which you try to flaunt your amount of monetary wealth and self worth but I digress',
    'Preposterous boast, but alas',
    'Interesting display of mental stability but I’m happy for you',
    'Unusual display of wealth , but it’s fine',
    'Rather bizarre flex nevertheless tolerable',
    'Unhelpful flex but aight',
    "Necroposting but it's fine.",
    'Odd flex, but I’ll allow it.',
    'strange contraction of muscles, but alright',
    'Interesting timeframe to reply to a post, but accepted',
    'A surprise, to be sure, but a welcome one',
    'Rather strange and unusual way to expose a select person/group of people or audience to the fact you poses a particular set of skills or skill that a rather unusual or odd that the average parson might be envious that they themselves cannot do it. Or have obtained a sizable amount of currency compared to the commoners that you wish to impress....but alas',
  ];

  return res.status(200).json({
    response_type: 'in_channel',
    text: flexes[Math.floor(Math.random() * flexes.length)],
  });
};

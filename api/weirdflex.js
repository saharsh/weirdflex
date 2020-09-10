export default (req, res) => {
  console.log(req.body);
  const { token, text, user_id, response_url } = req.body;

  if (token !== process.env.SLACK_TOKEN) {
    return res.status(400);
  }

  // Responses are from various places on the internet - mostly Reddit.
  const flexes = [
    "An unorthodox show of prowess, but I shall oblige",
    "Peculiar boast but alas",
    "Odd gloat but understandable nonetheless",
    "Awkward comparison to a muscle contraction in which you try to flaunt your amount of monetary wealth and self worth but I digress",
    "Preposterous boast, but alas",
    "Interesting display of mental stability but I’m happy for you",
    "Unusual display of wealth , but it’s fine",
    "Rather bizarre flex nevertheless tolerable",
    "Unhelpful flex but aight",
    "Necroposting but it's fine.",
    "Odd flex, but I’ll allow it.",
    "strange contraction of muscles, but alright",
    "Interesting timeframe to reply to a post, but accepted",
    "A surprise, to be sure, but a welcome one",
    "Rather strange and unusual way to expose a select person/group of people or audience to the fact you poses a particular set of skills or skill that a rather unusual or odd that the average parson might be envious that they themselves cannot do it. Or have obtained a sizable amount of currency compared to the commoners that you wish to impress....but alas",
    "Unusual brag but permissible",
    "Goofy boast, yet seemingly tolerable",
    "Perplexing means of showcasing either personal skill or wealth, although it is at least allowable by a small amount as judged by my person.",
    "The action that you just performed was a peculiar attempt at an assertion of dominance, however, under the current circumstances your deed may be deemed as acceptable.",
    "You are being informed that the manner in which you have attempted to elicit admiration from your community, as well as satisfy your subconscious attitude towards self inferiority by continual affirmation of a false superiority, has nonetheless resulted in a mannerism which would, in most cases, be considered by members of your community, who may chance upon witnessing such actions, to be of a highly irregular nature, somewhat contrary to the pre-established status quo of said individuals; however, let it not be misunderstood that, despite such deviation from mediocrity, these happenings which are being referenced, do in fact lie within a realm of understanding by your peers which would allow anyone exibiting such abnormalities to still be considered to be an equal, valid member of the social circles or groups in which they have been previously inducted into, rather than being shunned or metaphorically exiled in the name of maintaining a consistent structure of similar mindsets, non-contradictory core beliefs, and shared attitudes that allow for a comfortable sense of social cohesion.",
    "supernatural flaunt but okay",
  ];

  const sentBlocks = [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: flexes[Math.floor(Math.random() * flexes.length)],
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: `Requested by <@${user_id}>`,
        },
      ],
    },
  ];
  return res.status(200).json({
    response_type: "in_channel",
    blocks: sentBlocks,
  });
};


# weirdflex 
<a href="https://slack.com/oauth/v2/authorize?client_id=2210535565.1346134781558&scope=commands&user_scope="><img alt="Add to Slack" height="33" width="114.675" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsaharsh%2Fweirdflex&env=SLACK_VERIFICATION_TOKEN&envDescription=Verification%20Token%20for%20slack%20app&envLink=https%3A%2F%2Fapi.slack.com%2Fauthentication%2Fverifying-requests-from-slack%23verifying-requests-from-slack-using-signing-secrets__verification-token-deprecation&project-name=weirdflex&repo-name=weirdflex&redirect-url=https%3A%2F%2Fgithub.com%2Fsaharsh%2Fweirdflex)

## Contribute
It'd be great if you added more weird flexes. You can add to the responses in the `flexes` array in `api/weirdflexes`. Make a PR and I'll probably accept it.

## Do it yourself
Don't want to add this directly to your slack workspace and control which weird flexes are shown on your wworkspace? That's totally fine and easy to do! Here's how to do it (instructions from [jamstackfns](https://jamstackfns.com/f/slack)):

1. [Create a slack app](https://api.slack.com/apps?new_app=1)
2. Navigate back to "Basic Information" click "Install App to Workspace". Make note of the Verification Token. We need to add this as an environment variable to the Vercel deployment.
3. Press the `Deploy` button above and follow the instructions. It'll create a fork of this repo to your Github account and deploy that fork on Vercel.
4. Navigate to "Slash Commands" and click "Create New Command".
5. Fill out the form using the deployed URL for your function. Your deployed url will probably look something like https://weirdflex-`something`.vercel.app/api/weirdflex. You can find what the `something` is by going to Settings -> General -> Domains in your Vercel project.
6. Hit save and you're done!
To change your list of flexes, modify the `flexes` array in `api/weirdflex`.

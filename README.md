# Hello AVS Fleek

This template runs AVS (Actively Validated Services) using the Fleek network.

We deploy individual functions of the [hello-world AVS](https://github.com/Layr-Labs/hello-world-avs)
- [create_new_task.js](./src/create_new_task.js)
- [register_operator.js](./src/register_operator.js)
- [sign_and_respond_to_task.js](./src/sign_and_respond_to_task.js).

We then aggregate all the deployed URLs above and call them in [avs.js](./src/avs.js) in a manner that works similarly to a normal hello-world AVS.

![IMG_6BDE16467E1B-1](https://github.com/supernovahs/hello-avs-fleek/assets/22412996/e2bf539c-b8e7-4e87-b956-857eb02af0a0)

# Steps to Deploy Your own AVS to Fleek

- npm install -g @fleek-platform/cli
- fleek login
- fleek projects switch --id={projectId}
- Modify Your register operator, sign_and_respond_to_task
- To Build run `npm run build`
- To register name run `npm run create_register_operator_name` or `npm run create_sign_and_respond_to_task_name`
- To deplopy to fleek run
 `npm run deploy_register_operator_to_fleek`
 and
`npm run deploy_sign_and_respond_to_task_to_fleek`

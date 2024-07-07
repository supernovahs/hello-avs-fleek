# Hello AVS Fleek

This template runs AVS (Actively Validated Services) using the Fleek network.

We deploy individual functions of the [hello-world AVS](https://github.com/Layr-Labs/hello-world-avs)
- [create_new_task.js](./src/create_new_task.js)
- [register_operator.js](./src/register_operator.js)
- [sign_and_respond_to_task.js](./src/sign_and_respond_to_task.js).

We then aggregate all the deployed URLs above and call them in [avs.js](./src/avs.js) in a manner that works similarly to a normal hello-world AVS.

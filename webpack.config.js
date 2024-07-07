const path = require('path');

module.exports = {
  entry: {'register_operator': './src/register_operator.js', 'sign_and_respond_to_task':'./src/sign_and_respond_to_task.js'},
  mode: "none",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js' ,
    iife: false, 
  },
};

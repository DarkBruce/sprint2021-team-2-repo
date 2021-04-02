const reactComponents = require('@neutrinojs/react-components');

module.exports = {
  options: {
    output: '../static/build',
    root: __dirname,
  },
  use: [
    reactComponents(),
  ],
};

const modSomething = require('../models/something');

module.exports = {
  find: () => {
    const ret = modSomething.get();
    return ret;
  },
};

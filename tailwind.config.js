const purgeOptions = require("./purgecss.config");

module.exports = {
  purge: purgeOptions,
  theme: {
    extend: { colors: { primary: "#02fe6a" } },
  },
};

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md",
  ],
  options: {
    whitelist: [
      "body",
      "html",
      "img",
      "a",
      "g-image",
      "g-image--lazy",
      "g-image--loaded",
    ],
  },
};

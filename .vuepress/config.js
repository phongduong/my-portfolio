module.exports = {
  title: "Phong Duong",
  description: "Self-taught, full-stack developer",
  base: "/",
  serviceWorker: true,
  head: [
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Roboto+Slab",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        rel: "stylesheet",
        integrity:
          "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous"
      }
    ],
    [
      "script",
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ]
  ]
};

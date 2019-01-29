module.exports = {
  title: "Phong Duong",
  description:
    "I am a/an 👨‍💻Coder👨‍💻 ✈️Traveller✈️ 👨‍🌾Farmer👨‍🌾 💰Entrepreneur💰. I also like sport and books.",
  base: "/",
  serviceWorker: true,
  ga: "UA-123178606-2",
  head: [
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css?family=Roboto",
        rel: "preload",
        rel: "stylesheet"
      }
    ],
    [
      "link",
      {
        href: "images/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "180x180"
      }
    ],
    [
      "link",
      {
        href: "images/favicon-32x32.png",
        rel: "icon",
        type: "image/png",
        sizes: "32x32"
      }
    ],
    [
      "link",
      {
        href: "images/favicon-16x16.png",
        rel: "icon",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    [
      "link",
      {
        href: "images/site.webmanifest",
        rel: "manifest"
      }
    ],
    [
      "link",
      {
        href: "images/safari-pinned-tab.svg",
        rel: "mask-icon",
        color: "#283c86"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#283c86"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        async: true
      }
    ]
  ]
};

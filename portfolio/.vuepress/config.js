require("dotenv").config();

const siteConfig = {
  title: "Phong Duong",
  description:
    "💻Indie hacker, 💤Dreamer, 🎒Traveler and 🌳Gardener. I like turning my ideas into real projects.",
  image: "https://www.phongduong.me/logo.png",
  url: "https://www.phongduong.me"
};

module.exports = {
  title: siteConfig.title,
  description: siteConfig.description,
  themeConfig: {
    nav: [
      { text: "📰 Blog", link: "/" },
      { text: "📦 Projects", link: "/projects.html" },
      { text: "📞 Contact", link: "/contact.html" }
    ]
  },
  ga: "UA-123178606-2",
  serviceWorker: process.env.NODE_ENV !== "dev",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#00949c" }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#00949c" }],
    ["meta", { name: "theme-color", content: "#00949c" }],
    ["meta", { charset: "UTF-8" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Phong Duong, indie hacker, coder, traveler, dreamer, gardener, projects, ideas, maker, developer"
      }
    ],
    [
      "meta",
      {
        name: "author",
        content: "Phong Duong"
      }
    ],

    // Facebook meta
    ["meta", { property: "og:title", content: siteConfig.title }],
    ["meta", { property: "og:image", content: siteConfig.image }],
    // ["meta", { property: "og:image:width", content: "255" }],
    // ["meta", { property: "og:image:height", content: "255" }],
    ["meta", { property: "og:url", content: siteConfig.url }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:description",
        content: siteConfig.description
      }
    ],

    // Twitter meta
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: siteConfig.url }],
    ["meta", { property: "twitter:title", content: siteConfig.title }],
    [
      "meta",
      {
        property: "twitter:description",
        content: siteConfig.description
      }
    ],
    ["meta", { property: "twitter:image", content: siteConfig.image }]
  ]
};

module.exports = {
  title: "Phong Duong",
  description:
    "💻Coder, 💤Dreamer, 🎒Traveller and 🐌Gardener. I like turning my ideas into real projects.",
  themeConfig: {
    nav: [
      { text: "📰 Blog", link: "/" },
      { text: "📦 Projects", link: "/projects" },
      { text: "📞 Contact", link: "/contact" }
    ]
  },
  ga: "UA-123178606-2",
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
    ["meta", { name: "msapplication-TileColor", content: "#00949c" }],
    ["meta", { name: "theme-color", content: "#00949c" }],
    ["meta", { property: "og:image", content: "/og-image.jpg" }],
    ["meta", { property: "og:image:width", content: "255" }],
    ["meta", { property: "og:image:height", content: "255" }],
    ["meta", { property: "og:title", content: "Phong Duong" }],
    ["meta", { property: "og:url", content: "https://phongduong.me" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "💻Coder, 💤Dreamer, 🎒Traveller and 🐌Gardener. I like turning my ideas into real projects."
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ]
  ]
};

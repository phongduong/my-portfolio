const siteConfig = {
  title: "Phong Duong",
  description:
    "💻Indie dev, 💤Dreamer, 🎒Backpacker and 🌳Gardener. I like turning ideas into real projects.",
  image: "https://phongduong.netlify.com/img/logo.png",
  url: "https://phongduong.netlify.com"
};

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.vue"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  title: siteConfig.title,
  description: siteConfig.description,
  host: "localhost",
  themeConfig: {
    nav: [
      { text: "📝 Blog", link: "/" },
      { text: "📦 Projects", link: "/projects.html" },
      { text: "📞 Contact", link: "/contact.html" }
    ]
  },
  postcss: {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      ...(process.env.NODE_ENV !== "development" ? [purgecss] : [])
    ]
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    "@vuepress/back-to-top",
    [
      "@vuepress/blog",
      {
        directories: [
          {
            layout: "PostListLayout",
            itemLayout: "PostLayout",
            id: "blog",
            dirname: "posts",
            path: "/"
          }
        ],
        sitemap: { hostname: siteConfig.url },
        feed: { canonical_base: siteConfig.url }
      }
    ]
  ],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/img/safari-pinned-tab.svg", color: "#00949c" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#00949c" }],
    ["meta", { name: "theme-color", content: "#00949c" }],
    [
      "meta",
      {
        name: "keywords",
        content: "full-stack developer, indie dev, nodejs, javascript"
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
    ["meta", { property: "og:image:width", content: "256" }],
    ["meta", { property: "og:image:height ", content: "256" }],
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
    ["meta", { property: "twitter:card", content: "summary" }],
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

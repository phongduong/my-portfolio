module.exports = {
  title: "Phong Duong",
  description:
    "👨‍💻Coder👨‍💻 ✈️Traveller✈️ 👨‍🌾Farmer👨‍🌾 💰Entrepreneur💰. I also like sport and books.",
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
        color: "#113322"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#ccddbb"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ccddbb"
      }
    ],
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        async: true
      }
    ],
    [
      "script",
      {
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        async: true
      }
    ],
    [
      "script",
      {},
      `(adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-8072886212233580",
          enable_page_level_ads: true
      });`
    ]
  ]
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const postcssPlugins = [require("tailwindcss"), require("autoprefixer")];
const NAME = "Phong Duong";
const DESCRIPTION =
  "Developer. I experiment new things, create funny projects and programming tutorials";
const URL = "https://phongduong.dev";

module.exports = {
  siteName: NAME,
  siteDescription: DESCRIPTION,
  siteUrl: URL,
  templates: {
    BlogPost: "/blog/:title",
    Tag: "/blog/tag/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/posts/**/*.md",
        typeName: "BlogPost",
        refs: {
          tag: { typeName: "Tag", create: true },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/contact.md",
        typeName: "Contact",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/projects.md",
        typeName: "Project",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/about.md",
        typeName: "About",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "BlogPost",
        latest: true,
        feedOptions: {
          title: "Phong Duong's Blog",
          feed_url: `${URL}/rss.xml`,
          site_url: URL,
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: `${URL}${node.path}`,
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@brettanda/gridsome-plugin-scheduled-posts",
      options: {
        typeName: "BlogPost",
        timeZoneOffset: "+7",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        // Service Worker Options
        disableServiceWorker: process.env.NODE_ENV !== "production",
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "png,jpg,jpeg,svg,gif",
        // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
        manifestPath: "manifest.json",
        title: NAME,
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        themeColor: "#00838a",
        backgroundColor: "#ffffff",
        icon: "./src/favicon.png",
        shortName: NAME,
        description: DESCRIPTION,
        categories: ["productivity", "personalization", "education"],
        maskableIcon: true,
        // Microsoft Windows Meta Tags
        msTileColor: "#00838a",
        // Apple MacOS Meta Tags
        appleMaskIconColor: "#00838a",
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-123178606-7",
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
      externalLinks: false,
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [];
const URL = "https://phongduong.netlify.app";

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Phong Duong",
  siteDescription:
    "Developer, Youtuber. I experiment new tools, create funny projects and programming tutorials",
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
          url: `${URL}/${node.path}`,
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
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
      externalLinksRel: ["noopener", "noreferrer"],
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

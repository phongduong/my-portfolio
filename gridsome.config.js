// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const postcssPlugins = [require("tailwindcss"), require("autoprefixer")];
const NAME = "Phong Duong";
const DESCRIPTION =
  "Hi, I am Phong Duong. I am a developer. I like learning and creating new things";
const URL = "https://phongduong.dev";

module.exports = {
  siteName: NAME,
  siteDescription: DESCRIPTION,
  siteUrl: URL,
  templates: {
    BlogPost: "/blog/:year/:month/:title",
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
          description: node.content,
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

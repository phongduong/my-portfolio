module.exports = {
  siteName: "Phong Duong",
  siteDescription:
    "Fullstack developer, Youtuber. I experiment new tools and create funny projects, programming tutorials",
  siteUrl: "",
  templates: {
    BlogPost: "/blog/:title",
    Tag: "/tag/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/posts/**/*.md",
        typeName: "BlogPost",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/tags/**/*.md",
        typeName: "Tag",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
  ],
};

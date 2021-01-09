// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addMetadata }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    addMetadata("author", "Phong Duong");
    addMetadata(
      "keywords",
      "developer, Youtuber, Javascript, Nodejs, learn new things, programming, tutorials, web development, pwa, progressive web app, fullstack, frontend, backend, project ideas"
    );
    addMetadata("twitter_card", "summary");
    addMetadata("twitter_creator", "@phongduonglh");
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

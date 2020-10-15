// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import Subscribe from "~/components/layout/Subscribe.vue";
import "prismjs/themes/prism.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Header", Header);
  Vue.component("Footer", Footer);
  Vue.component("Subscribe", Subscribe);

  head.script.push({
    src: "https://platform.twitter.com/widgets.js",
    body: true,
  });
  head.script.push({
    body: true,
    innerHTML: `
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (const registration of registrations) {
          console.log('serviceWorker unregistered');
          registration.unregister();
        }
      });
    }`,
  });
}

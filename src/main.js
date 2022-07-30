import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

import "./assets/main.css";

library.add([
  faBars,
  faEnvelope,
  faLinkedin,
  faGithub,
  faDiscord,
  faSoundcloud,
]);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

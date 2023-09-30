import { createApp } from "vue";
import App from "./App.vue";

//mulai koding
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import ProjectList from "./components/pages/ProjectList.vue";
import ProjectCreate from "./components/pages/ProjectCreate.vue";
import ProjectEdit from "./components/pages/ProjectEdit.vue";
import ProjectShow from "./components/pages/ProjectShow.vue";

//set axios url api
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.interceptors.request.use(function (config) {
  config.headers["X-Binarybox-Api-Key"] = import.meta.env.VITE_APP_API_KEY;
  return config;
});

//routing
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ProjectList },
    { path: "/create", component: ProjectCreate },
    { path: "/edit/:id", component: ProjectEdit },
    { path: "/show/:id", component: ProjectShow },
  ],
});
createApp(App).use(router).mount("#app");

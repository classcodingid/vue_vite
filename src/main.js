import { createApp } from "vue";
import App from "./App.vue";

//mulai koding
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";

//auth
import LoginPage from "./components/pages/auth/LoginPage.vue";
import RegisterPage from "./components/pages/auth/RegisterPage.vue";

//dashboard
import DashboardPage from "./components/pages/DashboardPage.vue";

//project
import ProjectList from "./components/pages/project/ProjectList.vue";
import ProjectCreate from "./components/pages/project/ProjectCreate.vue";
import ProjectEdit from "./components/pages/project/ProjectEdit.vue";
import ProjectShow from "./components/pages/project/ProjectShow.vue";

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
    // login
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    // dashboard
    { path: "/dashboard", component: DashboardPage },
    // project
    { path: "/", component: ProjectList },
    { path: "/create", component: ProjectCreate },
    { path: "/edit/:id", component: ProjectEdit },
    { path: "/show/:id", component: ProjectShow },
  ],
});
createApp(App).use(router).mount("#app");

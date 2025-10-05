import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";

const app = createApp(App);

const queryClient = new QueryClient();

const vueQueryOptions = {
  queryClient,
};

app.use(VueQueryPlugin, vueQueryOptions);
app.mount("#app");

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import "primeflex/primeflex.scss";
import "primevue/resources/primevue.min.css";
import Dialog from "primevue/dialog";
import router from "./router";
import axios from 'axios'
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

axios.defaults.baseURL = '/api/v1'
axios.defaults.headers.common['Accept'] = 'application/json'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

const app = createApp(App);

app.component("Dialog", Dialog);
app.use(PrimeVue);
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.mount("#app");

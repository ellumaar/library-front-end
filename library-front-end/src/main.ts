import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import "primeflex/primeflex.scss";
import "primevue/resources/primevue.min.css";
import Dialog from "primevue/dialog";
import router from "./router";

import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

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

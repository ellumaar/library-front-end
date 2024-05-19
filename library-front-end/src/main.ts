import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import "primeflex/primeflex.scss";
import "primevue/resources/primevue.min.css";
import Dialog from "primevue/dialog";

const app = createApp(App);

app.component("Dialog", Dialog);
app.use(PrimeVue);
app.mount("#app");

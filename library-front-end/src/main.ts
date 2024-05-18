import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";
import 'primeflex/primeflex.scss'

const app = createApp(App);
app.use(PrimeVue);

createApp(App).mount("#app");

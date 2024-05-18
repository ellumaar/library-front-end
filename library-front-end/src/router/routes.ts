import {RouteRecordRaw} from "vue-router";
import {ROUTE_PATHS} from "./paths.ts";
import Catalogue from "../components/Catalogue.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        redirect: ROUTE_PATHS.CATALOGUE
    },
    {
        path: ROUTE_PATHS.CATALOGUE,
        name: ROUTE_PATHS.CATALOGUE,
        component: () => Catalogue
    }
]
export default routes
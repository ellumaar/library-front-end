import { RouteRecordRaw } from "vue-router";
import { ROUTE_PATHS } from "./paths.ts";
import Catalogue from "../components/Catalogue.vue";
import Admin from "../components/Admin.vue";
import MyRentals from "../components/MyRentals.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    redirect: ROUTE_PATHS.CATALOGUE,
  },
  {
    path: ROUTE_PATHS.CATALOGUE,
    name: ROUTE_PATHS.CATALOGUE,
    component: Catalogue,
  },
  {
    path: ROUTE_PATHS.MY_BOOKS,
    name: ROUTE_PATHS.MY_BOOKS,
    component: MyRentals,
  },
  {
    path: ROUTE_PATHS.ADMIN,
    name: ROUTE_PATHS.ADMIN,
    component: Admin,
  },
];
export default routes;

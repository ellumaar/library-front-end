<template>
  <div class="page flex flex-column flex-1">
    <router-link :to="ROUTE_PATHS.ADMIN">Admin view</router-link>
    <div class="flex flex-row gap-4">
      <div class="w-9">
        <h1>Catalogue</h1>
        <div class="w-full">
          <DataTable :value="books" class="w-full" style="text-align: left">
            <Column field="author" header="Author"></Column>
            <Column field="title" header="Title"></Column>
            <Column>
              <template #body="{ data }">
                <i v-if="data.available" class="pi pi-check-square"></i>
              </template>
            </Column>
            <Column>
              <template #body="{ data }">
                <Button
                  label="Order"
                  :disabled="!data.available"
                  @click="order(data.id)"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
      <Divider />
      <MyRentals />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import { ROUTE_PATHS } from "../router/paths.ts";
import MyRentals from "./MyRentals.vue";
import {useGetBooksQuery} from "../queries/queries.ts";

const { data: books } = useGetBooksQuery()

const order = (id: number) => {
  const book = books.value?.find((book) => {
    return book.id === id;
  });
  if (book?.available) {
    // submit order
  }
};
</script>

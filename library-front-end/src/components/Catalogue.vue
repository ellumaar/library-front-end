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
import Divider from "primevue/divider";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import { ROUTE_PATHS } from "../router/paths.ts";
import MyRentals from "./MyRentals.vue";
import {
  useGetBooksQuery,
  useSubmitRentalMutation,
} from "../queries/queries.ts";
import {RentalPayload} from "../models/models.ts";

const { data: books } = useGetBooksQuery();
const { mutateAsync: mutateSubmitRental } = useSubmitRentalMutation();

const order = async (id: number) => {
  const book = books.value?.find((book) => {
    return book.id === id;
  });
  if (book?.id) { // and if book available
    try {
      const payload: RentalPayload = {
        bookId: book.id,
        borrowed: true
      }
      await mutateSubmitRental(payload).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }

  }
};
</script>

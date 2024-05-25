<template>
  <div>
    <h1>My rentals</h1>
    <div class="w-full">
      <DataTable :value="myBooks" class="w-full" style="text-align: left">
        <Column field="author" header="Author"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="deadline" header="Deadline"></Column>
        <Column>
          <template #body="{ data }">
            <Button label="Return" @click="bookReturn(data.id)" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";
import { useGetMyRentedBooksQuery } from "../queries/queries.ts";

const { data: myBooks } = useGetMyRentedBooksQuery();

const bookReturn = (id: number) => {
  // send return request
};
</script>

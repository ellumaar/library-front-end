<template>
  <div class="page">
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
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import "primeicons/primeicons.css";

import { ref } from "vue";

const booksDummy = [
  { id: 1, author: "Louis-Ferdinand Céline", title: "Reis öö lõppu", available: true },
  { id: 2, author: "Clarice Lispector ", title: "Tähetund", available: false },
];

const books = ref(booksDummy);

const order = (id: number) => {
 const book = books.value.find((book) => {
   return book.id === id
 })
 if (book?.available) {
   // submit order
 }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
</style>

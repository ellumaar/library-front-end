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
            <Button
                label="Return"
                @click="bookReturn(data.id)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Column from "primevue/column";

const myBooksDummy = [
  { id: 1, author: "Louis-Ferdinand Céline", title: "Reis öö lõppu", deadline: '2024-20-05' },
];

const myBooks = ref(myBooksDummy);

const bookReturn = (id: number) => {
  // send return request
}
</script>

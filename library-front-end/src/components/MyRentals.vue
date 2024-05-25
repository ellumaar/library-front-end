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
import {useGetMyRentedBooksQuery, useReturnBookMutation} from "../queries/queries.ts";
import {Book} from "../models/models.ts";

const { data: myBooks } = useGetMyRentedBooksQuery();
const { mutateAsync: mutateAsync } = useReturnBookMutation()

const bookReturn = async (id: number) => {
  const book = myBooks.value?.find((book: Book) => {
    return book.id === id;
  });
  if (book?.id) {
    try {
      await mutateAsync(id).then((data) => {
        console.log(data)
      })
    } catch(error) {
      console.log(error)
    }
  }
};
</script>

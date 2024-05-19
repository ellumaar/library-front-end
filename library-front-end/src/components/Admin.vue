<template>
  <div>
    <h1>Add book</h1>
    <Button label="Add book" @click="visible = true" />
    <Dialog
      v-model:visible="visible"
      modal
      header="Add book"
      :style="{ width: '25rem' }"
    >
      <h5>Add new book</h5>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="author" class="font-semibold w-6rem">Author</label>
        <InputText id="author" v-model="form.author" class="flex-auto" />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="title" class="font-semibold w-6rem">Title</label>
        <InputText id="title" v-model="form.title" class="flex-auto" />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="isbn" class="font-semibold w-6rem">Isbn</label>
        <InputText id="isbn" v-model="form.isbn" class="flex-auto" />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="year" class="font-semibold w-6rem">Year</label>
        <InputText id="year" v-model="form.year" class="flex-auto" />
      </div>
      <div class="flex align-items-center gap-3 mb-3">
        <label for="pages" class="font-semibold w-6rem">Pages</label>
        <InputText id="pages" v-model="form.pages" class="flex-auto" />
      </div>
      <div class="flex justify-content-end gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
const visible = ref(false);

const form = reactive({
  author: "",
  title: "",
  isbn: "",
  year: "",
  pages: "",
});

const addBook = () => {
  // add book
};
</script>

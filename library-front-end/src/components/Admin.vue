<template>
  <div>
    <h1>Add book</h1>
    <Button label="Add book" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <div>dialog</div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";

const visible = ref(false)

const addBook = () => {
  // add book
}
</script>

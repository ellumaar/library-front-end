<template>
  <div class="flex gap-4">
    <Catalogue />
    <Divider />
    <MyRentals v-if="currentVIew === VIEW.READER" />
    <Admin v-if="currentVIew === VIEW.ADMIN" />
  </div>
</template>

<script setup lang="ts">
import Catalogue from "./components/Catalogue.vue";
import {ref} from "vue";
import MyRentals from "./components/MyRentals.vue";
import Admin from "./components/Admin.vue";
import Divider from 'primevue/divider';

const enum VIEW {
  ADMIN = 'admin',
  READER = 'reader'
}

const currentVIew = ref(VIEW.READER)
</script>

<style lang="scss" scoped></style>

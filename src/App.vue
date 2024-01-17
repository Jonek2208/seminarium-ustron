<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MyFooter from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <MyFooter />
</template>
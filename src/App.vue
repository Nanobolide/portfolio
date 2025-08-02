<template>
  <div class="portfolio-app w-full h-full">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'; // Correction du nom d'import
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
  background-color: #fff;
  color: #333;
}

.portfolio-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Permet d'occuper tout l'espace vertical */
}
</style>
<template>
  <header class="fixed top-0 w-full bg-white shadow z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-xl font-semibold text-gray-800">Japhet Maidou</h1>

      <!-- BOUTON HAMBURGER -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- MENU NAVIGATION SUR GRAND ÉCRAN -->
      <nav class="hidden md:flex gap-6 text-gray-700">
        <a href="#home" class="hover:text-red-600 transition">Accueil</a>
        <a href="#about" class="hover:text-red-600 transition">À propos</a>
        <a href="#projects" class="hover:text-red-600 transition">Projets</a>
        <a href="#contact" class="hover:text-red-600 transition">Contact</a>
        <a href="#cv" class="hover:text-red-600 transition">CV</a>
      </nav>
    </div>

    <!-- MENU MOBILE -->
    <div v-if="isOpen" class="md:hidden px-6 pb-4 flex flex-col gap-3 text-gray-700 bg-white shadow">
      <a href="#home" class="hover:text-red-600 transition">Accueil</a>
      <a href="#about" class="hover:text-red-600 transition">À propos</a>
      <a href="#projects" class="hover:text-red-600 transition">Projets</a>
      <a href="#contact" class="hover:text-red-600 transition">Contact</a>
      <a href="#cv" class="hover:text-red-600 transition">CV</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

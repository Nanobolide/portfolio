<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo avec dégradé harmonisé -->
      <h1 class="text-xl font-bold text-gray-800">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0A1] to-[#0A1A2F]">Japhet Maidou</span>
      </h1>

      <!-- BOUTON HAMBURGER -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <!-- MENU NAVIGATION SUR GRAND ÉCRAN -->
      <nav class="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="home" class="hover:text-[#00E0A1] transition-colors duration-300 relative group">
          Accueil
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E0A1] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" class="hover:text-[#00E0A1] transition-colors duration-300 relative group">
          À propos
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E0A1] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" class="hover:text-[#00E0A1] transition-colors duration-300 relative group">
          Projets
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E0A1] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" class="hover:text-[#00E0A1] transition-colors duration-300 relative group">
          Contact
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E0A1] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="cv" class="px-4 py-2 bg-gradient-to-r from-[#00E0A1] to-[#0A1A2F] text-white rounded-lg hover:from-[#0A1A2F] hover:to-[#00E0A1] transition-all duration-500 shadow-sm">
          CV
        </a>
      </nav>
    </div>

    <!-- MENU MOBILE -->
    <div v-if="isOpen" class="md:hidden px-6 py-4 flex flex-col gap-4 text-gray-700 bg-white/95 backdrop-blur-sm shadow-lg">
      <a href="home" @click="isOpen = false" class="py-2 hover:text-[#00E0A1] transition border-b border-gray-100">
        Accueil
      </a>
      <a href="#about" @click="isOpen = false" class="py-2 hover:text-[#00E0A1] transition border-b border-gray-100">
        À propos
      </a>
      <a href="#projects" @click="isOpen = false" class="py-2 hover:text-[#00E0A1] transition border-b border-gray-100">
        Projets
      </a>
      <a href="#contact" @click="isOpen = false" class="py-2 hover:text-[#00E0A1] transition border-b border-gray-100">
        Contact
      </a>
      <a href="cv" @click="isOpen = false" class="mt-2 px-4 py-2 bg-gradient-to-r from-[#00E0A1] to-[#0A1A2F] text-white text-center rounded-lg hover:from-[#0A1A2F] hover:to-[#00E0A1] transition-all duration-500">
        Télécharger CV
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
<template>
  <div class="font-sans text-gray-900 scroll-smooth w-full bg-gray-100">
    <Hero />
    <About />
    <Project />
    <Contact />
    <footer class="bg-gray-800 text-white text-center py-5">
      © 2025 Japhet Maidou - Tous droits réservés
    </footer>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'
import Contact from '../components/Contact.vue'
</script>

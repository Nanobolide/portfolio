<template>
  <section id="about" class="relative py-32 overflow-hidden bg-white">
    <!-- Éléments décoratifs animés -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E0A1]/10 rounded-full mix-blend-multiply filter blur-[100px] animate-float"></div>
      <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0A1A2F]/10 rounded-full mix-blend-multiply filter blur-[100px] animate-float animation-delay-3000"></div>
      <div class="absolute bottom-1/3 left-1/2 w-96 h-96 bg-green-600/10 rounded-full mix-blend-multiply filter blur-[100px] animate-float animation-delay-6000"></div>
      
      <!-- Motifs africains subtils -->
      <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJhZnJpY2FuLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwTDEwMCAxMDBNMTAwIDBMMCAxMDAiIHN0cm9rZT0iIzAwQTBBNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTUwIDBMNTAgMTAwTDAgNTBMMTAwIDUwWiIgc3Ryb2tlPSIjMEEyQTNGIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjYWZyaWNhbi1wYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <!-- En-tête avec effet de découpe -->
      <div class="text-center mb-20 relative">
        <div class="absolute -top-10 -left-10 w-32 h-32 bg-green-600/10 rounded-full filter blur-3xl -z-10"></div>
        <span class="inline-block mb-6 text-sm font-semibold tracking-wider uppercase text-green-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-600/20">
          Mon Identité Numérique
        </span>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-[#00E0A1] to-[#0A1A2F] inline-block py-2">
            Vision & Réalisation
          </span>
        </h2>
        <div class="max-w-3xl mx-auto relative">
          <p class="text-xl text-gray-600 relative z-10 bg-white/80 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-gray-200">
            Créateur de solutions digitales au service du développement africain
          </p>
          <div class="absolute -bottom-2 -right-2 w-full h-full bg-green-600/20 rounded-lg -z-10"></div>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Photo avec effet holographique -->
        <div class="relative group">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 group-hover:rotate-0 transition duration-700">
            <img 
              src="/src/assets/moi.jpg" 
              alt="Japhet Maidou, Architecte Digital" 
              class="w-full h-auto object-cover transform group-hover:scale-105 transition duration-1000"
            >
            <!-- Effet holographique au survol -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-1000 flex flex-col justify-end p-8">
              <div class="translate-y-10 group-hover:translate-y-0 transition duration-700">
                <p class="text-white text-xl font-medium mb-2">"L'innovation naît de la compréhension des réalités locales"</p>
                <div class="flex items-center">
                  <div class="w-8 h-0.5 bg-green-400 mr-3"></div>
                  <span class="text-green-300 text-sm">Japhet Maidou</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Effets périphériques -->
          <div class="absolute -z-10 -bottom-8 -right-8 w-full h-full border-4 border-green-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          <div class="absolute -z-20 -bottom-16 -right-16 w-full h-full border-4 border-[#0A1A2F]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-1500"></div>
          
          <!-- Badge animé -->
          <div class="absolute -top-5 -left-5 bg-[#0A1A2F] text-white px-4 py-2 rounded-full shadow-lg flex items-center transform -rotate-6 group-hover:rotate-0 transition duration-500">
            <div class="relative flex items-center justify-center mr-2">
              <div class="absolute w-6 h-6 bg-green-400 rounded-full opacity-70 animate-ping"></div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <span class="text-sm font-medium">Disponible</span>
          </div>
        </div>

        <!-- Contenu texte enrichi -->
        <div>
          <div class="space-y-8">
            <!-- Bloc de texte avec effet -->
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div class="relative bg-white rounded-xl p-6 border border-gray-100 hover:border-transparent transition">
                <p class="text-xl text-gray-700 leading-relaxed">
                  <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#0A1A2F]">Architecte de solutions numériques</span>, je conçois des plateformes qui répondent aux défis uniques du marché africain en combinant expertise technique et compréhension approfondie des besoins locaux.
                </p>
              </div>
            </div>
            
            <!-- Citation mise en valeur -->
            <div class="relative pl-8 border-l-4 border-green-500 my-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600/30 absolute -left-2 top-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p class="text-lg italic text-gray-600">
                "Je crois en une technologie inclusive qui ne se contente pas de suivre les tendances mondiales, mais qui s'adapte et résout les problèmes concrets de nos communautés."
              </p>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
              Chaque projet que j'entreprends vise à créer un impact mesurable - que ce soit en améliorant l'accès aux services financiers, en facilitant les échanges commerciaux intra-africains ou en démocratisant l'accès à la santé numérique. Pour moi, le code est un moyen, pas une fin en soi.
            </p>
          </div>

          <!-- Compétences sous forme de nuage interactif -->
          <div class="mt-16">
            <h3 class="text-2xl font-semibold mb-8 text-gray-900 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-[#0A1A2F]">Expertises Techniques</span>
            </h3>
            
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <div v-for="(tech, index) in technologies" :key="index" 
                   class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-[#00E0A1] rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="relative bg-white rounded-full px-5 py-3 flex items-center group-hover:bg-gray-50 transition shadow-sm hover:shadow-md border border-gray-100">
                  <span class="text-gray-800 font-medium">{{ tech }}</span>
                  <span class="ml-2 text-green-600 opacity-0 group-hover:opacity-100 transition duration-300">+</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA améliorés -->
          <div class="mt-16 flex flex-wrap gap-6">
            <a href="#projects" class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-[#0A1A2F] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div class="relative px-8 py-4 bg-[#0A1A2F] text-white rounded-lg hover:bg-[#0A1A2F]/90 transition flex items-center group">
                <span>Explorer mes réalisations</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 transform group-hover:translate-x-1 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </a>
            
            <a href="#contact" class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#00E0A1] to-green-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div class="relative px-8 py-4 bg-white text-[#0A1A2F] rounded-lg hover:bg-gray-50 transition flex items-center border-2 border-[#0A1A2F] group">
                <span>Contactez-moi</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 transform group-hover:translate-x-1 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  'Frontend: Vue.js,React',  
  'Backend: FastAPI, ,Laravel,Spring Boot', 
  'Bases de données : PostgreSQL, SQL',
  'GraphQL',
  'DevOps & Cloud : Docker, AWS, Kubernetes, CI/CD',
  'Ansible'
];
</script>

<style>
.animate-float {
  animation: float 12s ease-in-out infinite;
}
.animation-delay-3000 {
  animation-delay: 3s;
}
.animation-delay-6000 {
  animation-delay: 6s;
}
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, 20px) rotate(5deg);
  }
  50% {
    transform: translate(0, 30px) rotate(0deg);
  }
  75% {
    transform: translate(-20px, 20px) rotate(-5deg);
  }
}

/* Effet de découpe texte */
.text-cutout {
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #00E0A1, #0A1A2F);
  position: relative;
}
.text-cutout::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
</style>
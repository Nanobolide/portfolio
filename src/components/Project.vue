<template>
  <section id="projects" class="relative py-28 bg-gradient-to-b from-white to-gray-50">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00E0A1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-[#0A1A2F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <div class="text-center mb-20">
        <span class="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-green-600">
          Nos Réalisations
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Solutions <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#0A1A2F]">Concrètes</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Des applications qui transforment le quotidien des Centrafricains
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Projet Fintech RCA -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="/public/Fintech.png"
              alt="Interface Fintech RCA"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-4 right-4 bg-[#00E0A1] text-white text-xs font-bold px-3 py-1 rounded-full">
              Projet Phare
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="bg-[#0A1A2F] text-white text-xs px-2 py-1 rounded mr-2">2024</span>
              <span class="text-sm text-gray-500">Solution Nationale</span>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Fintech RCA</h3>
            <p class="text-gray-700 mb-4">
              Plateforme d'inclusion financière centrafricaine.Mobile money local: <a href="https://fintech-rca.vercel.app/">fintech-rca.vercel.app/</a>
 
            </p>
            <div class="flex justify-between items-center">
              <div class="flex space-x-2">
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">React 18</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">TypeScript</span>
              </div>
              <a href="https://github.com/Nanobolide/fintech-rca-web" target="_blank" rel="noopener" class="text-gray-800 hover:text-[#00E0A1] transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Projet E-commerce -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="/public/ecommerce.jpeg"
              alt="Plateforme E-commerce"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="bg-[#0A1A2F] text-white text-xs px-2 py-1 rounded mr-2">2023</span>
              <span class="text-sm text-gray-500">Commerce Digital</span>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">E-commerce Local</h3>
            <p class="text-gray-700 mb-4">
              Solution complète pour les commerçants locaux avec paiements mobiles intégrés.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex space-x-2">
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Vue 3</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Node.js</span>
              </div>
              <a href="#" class="text-gray-800 hover:text-[#00E0A1] transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Projet Taxi Moto -->
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="/public/taxi-moto.png"
              alt="Application Taxi Moto"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <span class="bg-[#0A1A2F] text-white text-xs px-2 py-1 rounded mr-2">2023</span>
              <span class="text-sm text-gray-500">Mobilité Urbaine</span>
            </div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Taxi Moto RCA</h3>
            <p class="text-gray-700 mb-4">
              Application de transport révolutionnaire pour les villes centrafricaines.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex space-x-2">
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">React Native</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Laravel</span>
              </div>
              <a href="#" class="text-gray-800 hover:text-[#00E0A1] transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a 
          href="https://github.com/Nanobolide?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-[#0A1A2F] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#00E0A1] transition-all duration-300 group"
        >
          <span class="relative z-10">Voir plus sur GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 relative z-10 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.animate-blob {
  animation: blob 8s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
@keyframes blob {
  0%, 100% {
    transform: translate(0,0) scale(1);
  }
  25% {
    transform: translate(50px,-50px) scale(1.1);
  }
  50% {
    transform: translate(0,50px) scale(0.9);
  }
  75% {
    transform: translate(-50px,-25px) scale(1.05);
  }
}
</style>

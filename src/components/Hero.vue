<template>
  <section id="home" class="relative min-h-screen overflow-hidden bg-white">
    <!-- Fond artistique -->
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBMNDAgNDBNNDAgMEwwIDQwIiBzdHJva2U9IiMwMEEwQTAiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
    </div>

    <div class="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen pt-28 pb-20 relative z-10">
      <!-- Texte -->
      <div class="max-w-2xl text-center md:text-left mt-12 md:mt-0">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#0A1A2F]">Innovation</span> 
          <br>Technologique 
          <span class="text-green-600">Africaine</span>
        </h1>
        
        <div class="mb-8">
          <p class="text-xl md:text-2xl text-gray-700 mb-2">
            Je suis <span class="font-semibold text-gray-900">Japhet Maidou</span>,
          </p>
          <div class="inline-flex items-center bg-green-100 text-green-800 text-lg px-4 py-2 rounded-full mb-4">
            <span class="relative flex h-3 w-3 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            Développeur Full-Stack Disponible
          </div>
        </div>

        <p class="text-lg text-gray-600 mb-8 max-w-lg">
          Je conçois des solutions numériques sur mesure qui répondent aux défis uniques du marché africain, combinant expertise technique et compréhension locale.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-[#0A1A2F] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div class="relative px-8 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
              <span class="text-gray-900 font-semibold">Explorer mes projets</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </a>

          <a href="#contact" class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#0A1A2F] to-green-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div class="relative px-8 py-3 bg-[#0A1A2F] text-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-2 hover:bg-[#0A1A2F]/90 transition">
              <span class="font-semibold">Discutons de votre projet</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </a>
        </div>

        <div class="mt-12 flex justify-center md:justify-start space-x-6">
          <a href="https://github.com/Nanobolide" target="_blank" class="text-gray-700 hover:text-[#0A1A2F] transition">
            <span class="sr-only">GitHub</span>
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-[#0A1A2F] transition">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Photo -->
      <div class="relative w-full md:w-auto">
        <div class="relative">
          <img 
            src="/src/assets/photo.JPG" 
            alt="Japhet Maidou, Développeur Full-Stack" 
            class="rounded-2xl shadow-2xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500"
          >
          <div class="absolute -z-10 top-6 left-6 w-full h-full rounded-2xl bg-gradient-to-br from-green-600 to-[#0A1A2F]"></div>
        </div>
        
        <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-gray-500">Disponible pour</p>
              <p class="font-semibold text-gray-900">Projets Freelance</p>
              <p class="font-semibold text-gray-900">Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
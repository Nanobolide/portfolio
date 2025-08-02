<template>
  <div class="cv-container font-sans bg-white text-gray-800 max-w-4xl mx-auto p-8 shadow-lg mt-10">
    <!-- En-tête -->
    <header class="border-b-2 border-red-600 pb-6 mb-8">
      <h1 class="text-4xl font-bold text-gray-900">MAIDOU GEOFFROY JAPHET</h1>
      <h2 class="text-2xl text-red-600 mt-2">Chef de Projet IT & Développeur Full-Stack</h2>
      
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>+225 0789103731</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>maidougeoffroyjaphet@gmail.com</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>Abidjan, Cocody - Côte d'Ivoire</span>
        </div>
      </div>
    </header>

    <!-- Colonnes -->
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Colonne gauche -->
      <div class="md:col-span-1">
        <!-- Compétences -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">COMPÉTENCES</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold">Frontend</h4>
              <ul class="list-disc list-inside text-sm">
                <li>React / React Native</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Backend</h4>
              <ul class="list-disc list-inside text-sm">
                <li>Django</li>
                <li>Laravel</li>
                <li>ExpressJS</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Bases de données</h4>
              <ul class="list-disc list-inside text-sm">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Outils</h4>
              <ul class="list-disc list-inside text-sm">
                <li>Git, Docker</li>
                <li>CI/CD</li>
                <li>GitHub Actions</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Langues -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">LANGUES</h3>
          <div class="flex justify-between text-sm">
            <span>Français</span>
            <span class="text-gray-600">Langue maternelle</span>
          </div>
          <div class="flex justify-between text-sm mt-2">
            <span>Anglais</span>
            <span class="text-gray-600">Professionnel</span>
          </div>
        </section>

        <!-- Centres d'intérêt -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">CENTRES D'INTÉRÊT</h3>
          <div class="flex flex-wrap gap-2 text-sm">
            <span class="bg-gray-100 px-3 py-1 rounded">Tech & Développement</span>
            <span class="bg-gray-100 px-3 py-1 rounded">Mangas & Anime</span>
            <span class="bg-gray-100 px-3 py-1 rounded">Jeux vidéo</span>
            <span class="bg-gray-100 px-3 py-1 rounded">Sport & Bien-être</span>
          </div>
        </section>

        <!-- Portfolio -->
            <section class="mb-8">
                    <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">TÉLÉCHARGER MON CV</h3>
                    <div class="flex flex-col space-y-3">
                        <a 
                        href="/public/CV_Japhet_Maidou.pdf" 
                        download="CV_Japhet_Maidou.pdf"
                        class="flex items-center text-red-600 hover:text-red-800 transition"
                        >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        Version Française (PDF)
                        </a>
                        
                        <!-- Optionnel : version anglaise -->
                        <a 
                        href="/path/to/your-cv-en.pdf" 
                        download="CV_Japhet_Maidou_EN.pdf"
                        class="flex items-center text-red-600 hover:text-red-800 transition"
                        >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        English Version (PDF)
                        </a>
                    </div>
            </section>
      </div>

      <!-- Colonne droite -->
      <div class="md:col-span-2">
        <!-- Expérience -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">EXPÉRIENCE PROFESSIONNELLE</h3>
          
          <div class="mb-6">
            <div class="flex justify-between items-start">
              <h4 class="font-bold">Worldev Solutions - Développeur Backend & Chef de Projet</h4>
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Nov 2024 - Présent</span>
            </div>
            <p class="text-sm italic mb-2">Application sécuritaire pour forces de l'ordre</p>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Mise en place de mécanismes de sécurité avancés (cryptage, auth multi-facteurs)</li>
              <li>Conformité aux réglementations de protection des données sensibles</li>
              <li>Gestion d'équipe et planification Agile</li>
              <li class="text-red-600 font-medium">Résultat : Application sécurisée répondant aux exigences réglementaires</li>
            </ul>
          </div>

          <div class="mb-6">
            <div class="flex justify-between items-start">
              <h4 class="font-bold">Défis et Stratégie - Consultant Informatique</h4>
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Mars 2024 - Oct 2024</span>
            </div>
            <p class="text-sm italic mb-2">Cocody, Abidjan (Côte d'Ivoire)</p>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Développement d'applications avec Laravel et intégration d'API</li>
              <li>Optimisation des performances et sécurité des applications</li>
              <li>Gestion de projets et respect des délais</li>
              <li class="text-red-600 font-medium">Résultat : Réduction de 40% des temps de réponse API</li>
            </ul>
          </div>

          <div class="mb-6">
            <div class="flex justify-between items-start">
              <h4 class="font-bold">Zuritech - Développeur Front-End (Vue.js)</h4>
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Avril 2024 - Nov 2024</span>
            </div>
            <p class="text-sm italic mb-2">Remote</p>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Développement d'interfaces utilisateur avec Vue.js</li>
              <li>Optimisation des performances mobiles</li>
              <li>Correction de bugs et améliorations</li>
              <li class="text-red-600 font-medium">Résultat : Réduction de 25% du temps de chargement mobile</li>
            </ul>
          </div>
        </section>

        <!-- Éducation -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">ÉDUCATION & FORMATION</h3>
          
          <div class="mb-4">
            <div class="flex justify-between">
              <h4 class="font-bold">Master 2 en Génie Logiciel</h4>
              <span class="text-gray-600">2024-2025</span>
            </div>
            <p class="text-sm">EDHEC Abidjan - Côte d'Ivoire</p>
          </div>

          <div class="mb-4">
            <div class="flex justify-between">
              <h4 class="font-bold">Master 1: Science Informatique</h4>
              <span class="text-gray-600">2023-2024</span>
            </div>
            <p class="text-sm">ITA Abidjan - Côte d'Ivoire</p>
          </div>

          <div class="mb-4">
            <div class="flex justify-between">
              <h4 class="font-bold">Licence en Informatique (Génie Logiciel)</h4>
              <span class="text-gray-600">2020-2023</span>
            </div>
            <p class="text-sm">EDHEC Abidjan - Côte d'Ivoire</p>
          </div>
        </section>

        <!-- Projets -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">PROJETS PERSONNELS</h3>
          
          <div class="mb-4">
            <h4 class="font-bold">Application de Sondage Full-Stack (Laravel + Livewire)</h4>
            <p class="text-sm mb-1">Création et gestion de sondages en temps réel avec analyse des résultats</p>
            <a href="https://github.com/Nanobolide/LivewirePoll.git" class="text-red-600 hover:underline text-sm">
              github.com/Nanobolide/LivewirePoll
            </a>
          </div>

          <div class="mb-4">
            <h4 class="font-bold">Application E-commerce avec Symfony</h4>
            <p class="text-sm mb-1">Gestion de produits, utilisateurs et commandes avec API REST</p>
            <a href="https://github.com/Nanobolide/Boutique.git" class="text-red-600 hover:underline text-sm">
              github.com/Nanobolide/Boutique
            </a>
          </div>
        </section>

        <!-- Certifications -->
        <section>
          <h3 class="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">CERTIFICATIONS</h3>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>PMP (Project Management Professional) - En cours</li>
            <li>PSM I (Professional Scrum Master I) - En cours</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonCV'
}
</script>

<style>
.cv-container {
  line-height: 1.6;
}

@page {
  size: A4;
  margin: 1cm;
}

@media print {
  body {
    background: white;
  }
  .cv-container {
    box-shadow: none;
    padding: 0;
    max-width: 100%;
  }
}
</style>
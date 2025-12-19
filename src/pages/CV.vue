<template>
  <div class="cv-container font-sans bg-white text-gray-800 max-w-4xl mx-auto p-8 shadow-lg mt-10">
    <!-- En-tête -->
    <header class="border-b-2 border-green-600 pb-6 mb-8">
      <h1 class="text-4xl font-bold text-gray-900">GEOFFROY JAPHET MAIDOU</h1>
      <h2 class="text-2xl text-green-600 mt-2">SOFTWARE ENGINEER</h2>
      
      <div class="grid md:grid-cols-3 gap-4 mt-6">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>+236 74440234</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>maidougeoffroyjaphet@gmail.com</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>Plateau, Bangui - République Centrafricaine</span>
        </div>
      </div>
      
      <p class="text-gray-600 mt-4">
        Ingénieur Logiciel passionné par l'automatisation, la sécurité et la modernisation des systèmes d'information. 
        Fort d'expériences dans les secteurs privé et public, je conçois des architectures robustes et scalables, 
        tout en pilotant des projets à fort impact.
      </p>
    </header>

    <!-- Colonnes -->
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Colonne gauche -->
      <div class="md:col-span-1">
        <!-- Compétences -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">COMPÉTENCES</h3>
          
          <!-- DevOps & Cloud -->
          <div class="mb-4">
            <h4 class="font-semibold text-gray-700 mb-2">DevOps & Cloud</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Docker</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Kubernetes</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Ansible</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">CI/CD</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">GitHub Actions</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">AWS</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Render</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Vercel</span>
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Openshift</span>
            </div>
          </div>

          <!-- Développement -->
          <div class="mb-4">
            <h4 class="font-semibold text-gray-700 mb-2">Développement</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Vue.js</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React Native</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">JAVA: Spring Boot</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">PHP: Laravel</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">API REST</span>
            </div>
          </div>

          <!-- Systèmes & Réseaux -->
          <div class="mb-4">
            <h4 class="font-semibold text-gray-700 mb-2">Systèmes & Réseaux</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Linux</span>
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Windows Server</span>
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Nginx</span>
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Apache</span>
             </div>
          </div>

          <!-- Outils -->
          <div class="mb-4">
            <h4 class="font-semibold text-gray-700 mb-2">Outils</h4>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Git/Github</span>
              <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Jira</span>
              <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Trello</span>
              <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Agile/Scrum</span>
            </div>
          </div>

          <!-- Compétences Transversales -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-700 mb-2">Transversales</h4>
            <ul class="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>Support technique</li>
              <li>Documentation</li>
              <li>Collaboration Dev/Ops</li>
              <li>Gestion de projet</li>
              <li>Intégration de systèmes</li>
            </ul>
          </div>
        </section>

        <!-- Langues -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">LANGUES</h3>
          <div class="space-y-3">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">Français</span>
                <span class="text-sm text-green-600 font-medium">Langue maternelle</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm font-medium text-gray-700">Anglais</span>
                <span class="text-sm text-green-600 font-medium">B1 – intermédiaire</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- Centres d'intérêt -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">CENTRES D'INTÉRÊT</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              Sport
            </span>
            <span class="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Lecture
            </span>
            <span class="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Jeux vidéo
            </span>
          </div>
        </section>

        <!-- Liens -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">LIENS</h3>
          <div class="space-y-3">
            <a href="https://www.linkedin.com/in/japhet-geoffroy-maidou-5546a1244" target="_blank" class="flex items-center text-gray-700 hover:text-green-600 transition">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/Nanobolide" target="_blank" class="flex items-center text-gray-700 hover:text-green-600 transition">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              GitHub
            </a>
            <a href="https://portfolio-sepia-seven-41.vercel.app/" target="_blank" class="flex items-center text-gray-700 hover:text-green-600 transition">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              Portfolio
            </a>

            <!-- Lien pour télécharger le CV -->
            <a 
              href="/CV_Japhet_Maidou_fr.pdf" 
              download="CV_Geoffroy_MAIDOU.pdf"
              class="flex items-center text-green-600 hover:text-green-800 transition font-medium bg-green-50 px-4 py-2 rounded-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Télécharger mon CV (PDF)
            </a>
          </div>
        </section>
      </div>

      <!-- Colonne droite -->
      <div class="md:col-span-2">
        <!-- Expérience Professionnelle -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">EXPÉRIENCES PROFESSIONNELLES</h3>
          
          <!-- Ministère des Finances et du Budget -->
            <div class="mb-6 pb-6 border-b border-gray-100">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-lg text-gray-900">Stagiaire Ingénieur Logiciel</h4>
                  <p class="text-green-600 font-medium">Ministère des Finances et du Budget</p>
                </div>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Sept. 2025 – Aujourd'hui | Bangui (République Centrafricaine)
                </span>
              </div>
              <ul class="list-disc list-inside text-sm space-y-2 text-gray-700 mt-3">
                <li>Analyse des systèmes existants et conception d’une architecture d’API centralisée</li>
                <li>Collaboration avec la DSI pour optimiser les flux applicatifs</li>
                <li>Rédaction de rapports techniques et mise en place de mesures de sécurité renforcées</li>
                <li>
                 <span class="text-green-600 font-medium"> Projet en cours :</span>Développement d’une API passerelle pour centraliser les données, garantir leur cohérence, validité et sécurité dans les systèmes du ministère
                </li>
                <li >
                  <span class="text-green-600 font-medium"> Projet en cours : </span>Conception d’un Système de Gestion du Personnel pour la DSI
                </li>
              </ul>
            </div>

          <!-- Défis et Stratégie -->
          <div class="mb-6">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-lg text-gray-900">Consultant IT</h4>
                <p class="text-green-600 font-medium">Défis et Stratégie</p>
              </div>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Nov. 2024 – Août 2025 | Abidjan (Côte d'Ivoire)
              </span>
            </div>
            <ul class="list-disc list-inside text-sm space-y-2 text-gray-700 mt-3">
              <li>Gestion d'une application de sécurité critique pour les forces de l'ordre</li>
              <li>Implémentation de protocoles de chiffrement et conformité</li>
            </ul>
          </div>

                    <!-- Worldev Solutions -->
         <div class="mb-6 pb-6 border-b border-gray-100">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-lg text-gray-900">Développeur Full-Stack & Chef de Projet</h4>
                <p class="text-green-600 font-medium">Worldev Solutions CI</p>
              </div>
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Mars – Oct. 2024 | Abidjan (Côte d'Ivoire)
              </span>
            </div>
           <ul class="list-disc list-inside text-sm space-y-2 text-gray-700 mt-3">
            <li>Conception et développement d’applications web complètes en <strong>Laravel</strong> (backend) et <strong>Vue.js</strong> (frontend), avec une architecture modulaire, évolutive et orientée microservices</li>
            <li>Mise en place et documentation de <strong>API sécurisées</strong> (JWT, OAuth2) permettant l’intégration fluide avec des systèmes tiers et garantissant la confidentialité des données sensibles</li>
            <li>Pilotage de projets en méthodologie <strong>Agile/Scrum</strong> : définition des user stories, planification des sprints, suivi des livrables et coordination des équipes Dev/Ops pour respecter les délais</li>
            <li>Optimisation des performances applicatives via <strong>tests unitaires et automatisés</strong>, refactoring du code et monitoring, afin d’assurer une haute disponibilité et une expérience utilisateur optimale</li>
            <li>Collaboration directe avec les parties prenantes (clients, équipes métiers) pour traduire les besoins fonctionnels en solutions techniques robustes</li>
          </ul>

          </div>

        </section>

        <!-- Formation -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">FORMATIONS</h3>
          
          <div class="space-y-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-gray-900">Master 2 en Ingénierie Logicielle</h4>
                  <p class="text-green-600">EDHEC Abidjan – Côte d'Ivoire</p>
                </div>
                <span class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">2024 - 2025</span>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-gray-900">Master 1 en Informatique</h4>
                  <p class="text-green-600">ITA Abidjan – Côte d'Ivoire</p>
                </div>
                <span class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">2023 - 2024</span>
              </div>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-gray-900">Licence en Informatique – Ingénierie Logicielle</h4>
                  <p class="text-green-600">EDHEC Abidjan – Côte d'Ivoire</p>
                </div>
                <span class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">2020 – 2023</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Projets Stratégiques -->
        <section class="mb-8">
          <h3 class="text-xl font-bold border-b-2 border-green-600 pb-2 mb-4">PROJETS STRATÉGIQUES</h3>
          
          <div class="space-y-6">
            <!-- APP 1: Sydonia-Simba -->
            <div class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-gray-900">API Gateway Ministère des Finances (RCA)</h4>
                  <div class="flex items-center mt-1">
                    <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-2">Ministère des Finances</span>
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">En cours</span>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-3 mt-2">
                 Développement d’une API passerelle centralisée destinée au Ministère des Finances et du Budget de la République Centrafricaine.
                  Cette solution agit comme un point d’entrée unique pour les différents systèmes existants </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Laravel API</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Docker</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">CI/CD</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Render</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">FileSystem Watcher</span>
              </div>
              <div class="text-xs text-gray-500 space-y-1">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span>Déploiement automatique sur Render</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span>Transfert sécurisé via connexion locale (UNC/SMB)</span>
                </div>
              </div>
            </div>

            <!-- APP 2: Gestion DSI -->
            <div class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-gray-900">Système de Gestion du Personnel DSI</h4>
                  <div class="flex items-center mt-1">
                    <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium mr-2">Ministère des Finances</span>
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">En cours</span>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-600 mb-3 mt-2">
                Application Full-Stack pour la gestion du personnel de la DSI avec cartographie OpenShift des sites et agents.
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">Laravel</span>
                <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">OpenShift</span>
                <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">API REST</span>
                <span class="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">Docker</span>
              </div>
              <div class="text-xs text-gray-500 space-y-1">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                  <span>Gestion centralisée du personnel et des affectations</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  <span>Cartographie interactive des sites DSI avec OpenShift</span>
                </div>
              </div>
            </div>

            <!-- Fintech RCA -->
            <div class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-gray-900">Mobile Money Centrafricain</h4>
                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Fintech</span>
              </div>
              <p class="text-sm text-gray-600 mb-3 mt-1">
                Plateforme unifiant banque, mobile money et transferts pour l'inclusion financière
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Microservices</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">Docker</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">CI/CD</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">API Rest</span>
                <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">React Native</span>
              </div>
              <a href="https://fintech-rca.vercel.app/" target="_blank" class="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Voir la démo: fintech-rca.vercel.app
              </a>
            </div>

            <!-- E-Santé -->
            <div class="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
              <div class="flex justify-between items-start">
                <h4 class="font-bold text-gray-900">e-Santé RCA</h4>
                <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Santé</span>
              </div>
              <p class="text-sm text-gray-600 mb-3 mt-1">
                Outil de transparence pour le ministère de la Santé : centralisation des données et suivi des structures sanitaires
              </p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">Vue.js</span>
                <span class="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">Laravel</span>
                <span class="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">PostgreSQL</span>
              </div>
              <a href="https://e-sante-six.vercel.app/login" target="_blank" class="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Voir la démo: e-sante-six.vercel.app
              </a>
            </div>

     
          </div>
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
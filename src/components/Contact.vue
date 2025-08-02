<template>
        <section id="contact" class="py-20 bg-white px-6 md:px-12">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Contact</h2>
      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">Recherche active d'opportunités</h3>
          <p class="text-gray-700 mb-6">
            Je suis actuellement disponible pour des missions en freelance, CDD ou CDI.
            N'hésitez pas à me contacter pour discuter de collaborations.
          </p>
          <div class="space-y-3">
            <p class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>maidougeoffroyjaphet@gmail.com</span>
            </p>
            <p class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+225 07 89 10 37 31</span>
            </p>
            <p class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bangui, RCA - Ouvert au remote</span>
            </p>
          </div>
        </div>

        <!-- Formulaire -->
        <form 
          action="https://formspree.io/f/xgvzlkwa" 
          method="POST"
          class="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            class="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            class="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            class="w-full border border-gray-300 px-4 py-2 rounded min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
          <button
            type="submit"
            class="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
</template>
<template>
<section
      id="home"
      class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-12 pt-28 bg-white"
    >
      <div class="max-w-lg text-center md:text-left">
        <h2 class="text-4xl font-bold mb-3">Salut, je suis <span class="text-gray-800">Japhet</span></h2>
        <p class="text-lg mb-4 text-gray-700">
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">Disponible immédiatement</span>
            Développeur Full-Stack
        </p>
        <p class="text-gray-600 mb-6">
            Actuellement à la recherche de nouvelles opportunités challengeantes.
            Passionné par la création de solutions numériques innovantes pour l'Afrique.
        </p>
        <div class="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            class="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
            >Voir mes projets</a
          >
          <a
            href="#contact"
            class="border border-gray-800 text-gray-800 px-5 py-2 rounded hover:bg-gray-800 hover:text-white transition"
            >Contact</a
          >
        </div>
      </div>
      <img
        src="/src/assets/photo.JPG"
        alt="Photo Japhet Maidou"
        class="rounded-full shadow w-72 h-72 object-cover"
      />
    </section>
</template>

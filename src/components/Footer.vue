<template>
  <footer class="gx mt-20 overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
    <nav class="-mb-6 columns-2 md:flex sm:justify-center gap-x-12" aria-label="Footer">
      <div v-for="item in items" class="pb-6"><a :href="item.href" class="text-sm leading-6 text-gray-600">{{ item.name }}</a></div>
    </nav>
    <div class="mt-10 flex justify-center gap-x-10">
      <a href="https://www.facebook.com/seminarium.teologiczne.ustron" class="text-gray-400 bkx">
        <span class="sr-only">Facebook</span>
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10"
          aria-hidden="true">
          <path fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"></path>
        </svg>
      </a>

    </div>
    <p class="mt-10 text-center text-xs leading-5 text-gray-500">© {{ year }} Seminarium Teologiczne w Ustroniu</p>
  </footer>
</template>

<script setup lang="ts">
const items = [
  {name: 'Strona główna', href: '/'},
  {name: 'O uczelni', href: '/o-uczelni'},
  {name: 'Kontakt', href: '/kontakt'},
  {name: 'Rekrutacja', href: '/rekrutacja'},
  {name: 'Terminy zjazdów', href: '/terminy-zjazdow'},
  // {name: 'Program nauki', href: '/program-nauki'},
  // {name: 'Materiały dydaktyczne', href: '/materialy-dydaktyczne'},
  // {name: 'Galeria', href: '/galeria'},
  {name: 'Polityka prywatności', href: '/polityka-prywatnosci'},
]

const year = new Date().getFullYear() 
</script>
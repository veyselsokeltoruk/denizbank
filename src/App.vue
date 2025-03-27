<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import ChatBot from './components/ChatBot.vue';
import MoreContent from './components/MoreContent.vue';

const toggleMenu = () => {
  open.value = !open.value;
};
const open = ref(false);

const closeMenu = () => {
  open.value = false;
};
</script>

<template>
  <!-- Fixed Header -->
  <header class="fixed top-0 left-0 w-full z-50">
    <!-- Main Navigation Bar -->
    <div class="bg-white shadow-md w-full">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between xl:justify-evenly">
        <!-- Logo (always visible on larger screens, hidden on mobile when menu closed) -->
        <div class="hidden xl:block">
          <RouterLink to="/" class="flex items-center">
            <img class="h-12" src="/denizbank.svg" alt="İş Bankası Logo">
          </RouterLink>
        </div>

        <!-- Mobile Logo (for smaller screens) -->
        <div class="xl:hidden flex-1">
          <RouterLink to="/" class="flex items-center" @click="closeMenu">
            <img class="h-10" src="/denizbank.svg" alt="İş Bankası Logo">
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center space-x-4">
          <RouterLink activeClass="bg-[#06BFDD] text-white" to="/degeryaratma"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300">
            Nasıl Değer Yaratıyoruz?</RouterLink>
          <RouterLink activeClass="bg-[#06BFDD] text-white" to="/guvenilir"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300">
            Güvenilir Finansal Aktör</RouterLink>
          <RouterLink activeClass="bg-[#06BFDD] text-white" to="/sorumluop"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300">
            Sorumlu Operasyonlar</RouterLink>
          <RouterLink activeClass="bg-[#06BFDD] text-white" to="/iyivatandas"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300">
            İyi Kurumsal Vatandaş</RouterLink>
          <RouterLink activeClass="bg-[#06BFDD] text-white" to="/raporlar"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300">
            Finansal Raporlar ve Ekler</RouterLink>
        </nav>

        <!-- Hamburger Button -->
        <button @click="toggleMenu" type="button"
          class="xl:hidden text-white bg-[#06BFDD] p-2 rounded-full focus:outline-none transition duration-300">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="open" class="xl:hidden bg-white shadow-lg w-full">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-3">
        <RouterLink activeClass="bg-[#06BFDD] text-white" to="/degeryaratma" @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300 text-center">
          Nasıl Değer Yaratıyoruz?</RouterLink>
        <RouterLink activeClass="bg-[#06BFDD] text-white" to="/guvenilir" @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300 text-center">
          Güvenilir Finansal Aktör</RouterLink>
        <RouterLink activeClass="bg-[#06BFDD] text-white" to="/sorumluop" @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300 text-center">
          Sorumlu Operasyonlar</RouterLink>
        <RouterLink activeClass="bg-[#06BFDD] text-white" to="/iyivatandas" @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300 text-center">
          İyi Kurumsal Vatandaş</RouterLink>
        <RouterLink activeClass="bg-[#06BFDD] text-white" to="/raporlar" @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] border rounded-md px-4 py-2 transition duration-300 text-center">
          Finansal Raporlar ve Ekler</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
  <ChatBot />
  <MoreContent />
</template>

<style scoped>
.router-link-active {
  font-weight: 600;
}

/* Ensure smooth transitions for the mobile menu */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

main {
  min-height: calc(100vh - 64px);
}
</style>

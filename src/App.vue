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
  <!-- Minimal Fixed Header -->
  <header class="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-50 shadow-sm">
    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
        :class="{ 'bg-[#06BFDD] text-white': $route.path === '/' }"
 @click="closeMenu">
          <!-- <img class="h-8 md:h-10" src="/denizbank.svg" alt="İş Bankası Logo"> -->
          İlerisi Deniz
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-3">
          <RouterLink
            to="/degeryaratma"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/degeryaratma' }"
          >
          Değer Yaratma Anlayışımız
          </RouterLink>
          <RouterLink
            to="/guvenilir"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/guvenilir' }"
          >
            İlerisi İçin Yeni Nesil Bankacılık
          </RouterLink>
          <RouterLink
            to="/sorumluop"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/sorumluop' }"
          >
          İlerisi için Sürdürülebilir Finansman
          </RouterLink>
          <RouterLink
            to="/iyivatandas"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/iyivatandas' }"
          >
          İlerisi İçin Geleceğin Yeteneği
          </RouterLink>
          <RouterLink
            to="/saglamktemeller"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/saglamktemeller' }"
          >
          İlerisi İçin Sağlam Kurumsal Temeller
          </RouterLink>
          <RouterLink
            to="/raporlar"
            class="text-gray-600 hover:text-white hover:bg-[#06BFDD] rounded-full px-5 py-2 transition duration-300 text-sm font-medium"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/raporlar' }"
          >
          Denetim Raporları ve Ek Bilgiler
          </RouterLink>
        </nav>

        <!-- Minimal Hamburger Button -->
        <button @click="toggleMenu" type="button"
          class="lg:hidden text-[#06BFDD] p-1 rounded-full focus:outline-none transition-colors duration-200 hover:bg-gray-100">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Minimal Mobile Menu Dropdown -->
    <div
      v-if="open"
      class="lg:hidden bg-white w-full absolute left-0 top-full overflow-hidden transition-all duration-200 shadow-sm"
      :class="open ? 'max-h-screen' : 'max-h-0'"
    >
      <div class="container mx-auto px-4 py-2 flex flex-col">
        <RouterLink
          to="/degeryaratma"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/degeryaratma' }"
        >
          Değer Yaratma Anlayışımız
        </RouterLink>
        <RouterLink
          to="/guvenilir"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/guvenilir' }"
        >
          Yeni Nesil Bankacılık
        </RouterLink>
        <RouterLink
          to="/sorumluop"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/sorumluop' }"
        >
          İlerisi için Sürdürülebilir Finansman
        </RouterLink>
        <RouterLink
          to="/iyivatandas"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/iyivatandas' }"
        >
          Geleceğin Yeteneği
        </RouterLink>
        <RouterLink
          to="/saglamktemeller"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/saglamktemeller' }"
        >
          Sağlam Kurumsal Temeller
        </RouterLink>
        <RouterLink
          to="/raporlar"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200 rounded-lg px-3 hover:bg-gray-50"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/raporlar' }"
        >
        Denetim Raporları ve Ek Bilgiler
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- Main Content with proper padding for fixed header -->
  <main class="pt-12 md:pt-14">
    <RouterView />
  </main>

  <ChatBot />
  <MoreContent />
</template>

<style>
/* Galano Grotesque fontunu global olarak kullan */
html, body, button, input, select, textarea {
  font-family: 'Galano Grotesque', sans-serif;
}
</style>

<style scoped>
/* Modern navbar stilini aktif olmayan linkler için kaldır */
.router-link-active::after {
  display: none;
}

/* Navbar stili için özel efektler */
nav a {
  position: relative;
  transition: all 0.3s ease;
}

nav a:hover {
  transform: translateY(-1px);
}

main {
  min-height: calc(100vh - 48px);
}
</style>

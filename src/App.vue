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
  <header class="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center" @click="closeMenu">
          <img class="h-8 md:h-10" src="/denizbank.svg" alt="İş Bankası Logo">
        </RouterLink>

        <!-- Desktop Navigation - Minimalist Design -->
        <nav class="hidden lg:flex items-center justify-between">
          <div class="flex space-x-1">
            <RouterLink
              to="/degeryaratma"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/degeryaratma' }"
            >
              Değer Yaratma
            </RouterLink>
            <RouterLink
              to="/guvenilir"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/guvenilir' }"
            >
              Yeni Nesil Bankacılık
            </RouterLink>
            <RouterLink
              to="/sorumluop"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/sorumluop' }"
            >
              Sürdürülebilir Finansman
            </RouterLink>
            <RouterLink
              to="/iyivatandas"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/iyivatandas' }"
            >
              Geleceğin Yeteneği
            </RouterLink>
            <RouterLink
              to="/saglamktemeller"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/saglamktemeller' }"
            >
              Kurumsal Temeller
            </RouterLink>
            <RouterLink
              to="/raporlar"
              class="text-gray-600 hover:text-[#06BFDD] px-3 py-2 text-sm rounded-md transition-colors duration-200"
              :class="{ 'text-[#06BFDD] font-medium': $route.path === '/raporlar' }"
            >
              Raporlar
            </RouterLink>
          </div>
        </nav>

        <!-- Minimal Hamburger Button -->
        <button @click="toggleMenu" type="button"
          class="lg:hidden text-[#06BFDD] p-1 rounded-md focus:outline-none transition-colors duration-200 hover:bg-gray-100">
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
      class="lg:hidden bg-white border-t border-gray-100 w-full absolute left-0 top-full overflow-hidden transition-all duration-200 shadow-sm"
      :class="open ? 'max-h-96' : 'max-h-0'"
    >
      <div class="container mx-auto px-4 py-2 flex flex-col divide-y divide-gray-100">
        <RouterLink
          to="/degeryaratma"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/degeryaratma' }"
        >
          Değer Yaratma Anlayışımız
        </RouterLink>
        <RouterLink
          to="/guvenilir"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/guvenilir' }"
        >
          Yeni Nesil Bankacılık
        </RouterLink>
        <RouterLink
          to="/sorumluop"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/sorumluop' }"
        >
          İlerisi için Sürdürülebilir Finansman
        </RouterLink>
        <RouterLink
          to="/iyivatandas"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/iyivatandas' }"
        >
          Geleceğin Yeteneği
        </RouterLink>
        <RouterLink
          to="/saglamktemeller"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/saglamktemeller' }"
        >
          Sağlam Kurumsal Temeller
        </RouterLink>
        <RouterLink
          to="/raporlar"
          @click="closeMenu"
          class="text-gray-600 hover:text-[#06BFDD] py-3 transition-colors duration-200"
          :class="{ 'text-[#06BFDD] font-medium': $route.path === '/raporlar' }"
        >
          Finansal Raporlar ve Ekler
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

<style scoped>
/* Subtle active link indication */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 2px;
  background-color: #06BFDD;
  border-radius: 2px;
}

main {
  min-height: calc(100vh - 48px);
}
</style>

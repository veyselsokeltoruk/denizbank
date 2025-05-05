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
  <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center" @click="closeMenu">
          <img class="h-10 md:h-12" src="/denizbank.svg" alt="İş Bankası Logo">
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-4">
          <RouterLink
            to="/degeryaratma"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/degeryaratma' }"
          >
          Değer Yaratma Anlayışımız
          </RouterLink>
          <RouterLink
            to="/guvenilir"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/guvenilir' }"
          >
            İlerisi İçin Yeni Nesil Bankacılık
          </RouterLink>
          <RouterLink
            to="/sorumluop"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/sorumluop' }"
          >
          İlerisi için Sürdürülebilir Finansman
          </RouterLink>
          <RouterLink
            to="/iyivatandas"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/iyivatandas' }"
          >
          İlerisi İçin Geleceğin Yeteneği
          </RouterLink>
          <RouterLink
            to="/saglamktemeller"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/saglamktemeller' }"
          >
          İlerisi İçin Sağlam Kurumsal Temeller
          </RouterLink>
          <RouterLink
            to="/raporlar"
            class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-2 transition duration-300"
            :class="{ 'bg-[#06BFDD] text-white': $route.path === '/raporlar' }"
          >
          Denetim Raporları ve Ek Bilgiler
          </RouterLink>
        </nav>

        <!-- Hamburger Button -->
        <button @click="toggleMenu" type="button"
          class="lg:hidden text-white bg-[#06BFDD] p-2 rounded-full focus:outline-none transition duration-300">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="open"
      class="lg:hidden bg-white shadow-lg w-full absolute left-0 top-full mobile-menu-height overflow-y-auto"
    >
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-3">
        <RouterLink
          to="/degeryaratma"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/degeryaratma' }"
        >
        Değer Yaratma Anlayışımız
        </RouterLink>
        <RouterLink
          to="/guvenilir"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/guvenilir' }"
        >
          Yeni Nesil Bankacılık
        </RouterLink>
        <RouterLink
          to="/sorumluop"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/sorumluop' }"
        >
        İlerisi için Sürdürülebilir Finansman
        </RouterLink>
        <RouterLink
          to="/iyivatandas"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/iyivatandas' }"
        >
        Geleceğin Yeteneği
        </RouterLink>
        <RouterLink
          to="/saglamktemeller"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/saglamktemeller' }"
        >
        Sağlam Kurumsal Temeller
        </RouterLink>
        <RouterLink
          to="/raporlar"
          @click="closeMenu"
          class="text-[#06BFDD] hover:text-white hover:bg-[#06BFDD] bg-[#E0F7FB] rounded-md px-4 py-3 transition duration-300 text-center"
          :class="{ 'bg-[#06BFDD] text-white': $route.path === '/raporlar' }"
        >
        Denetim Raporları ve Ek Bilgiler
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- Main Content with proper padding for fixed header -->
  <main class="pt-16 md:pt-20">
    <RouterView />
  </main>

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

/* Custom class for mobile menu height */
.mobile-menu-height {
  max-height: 70vh;
}
</style>

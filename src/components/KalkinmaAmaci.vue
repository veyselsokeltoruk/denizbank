<template>
  <div class="bg-gradient-to-br from-white to-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Başlık Alanı -->
      <div class="mb-12 text-center">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058]">
          Odak Alanlarımız ve Sürdürülebilir Kalkınma Amaçlarına Sağladığımız Katkı
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto mt-4"></div>
      </div>

      <!-- Ana Kategoriler -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Yeni Nesil Bankacılık -->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#072CAD] to-[#052488] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Yeni Nesil Bankacılık</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#072CAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in financialActor" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#072CAD] mb-3">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-2">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-12 h-12 flex items-center justify-center rounded-md overflow-hidden"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 min-w-[180px] text-center">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- İlerisi için Sürdürülebilir Finansmanorumlu Operasyonlar -->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#52C4FE] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#52C4FE] to-[#3694c8] p-4 flex items-center justify-between">İlerisi için Sürdürülebilir Finansman<div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#52C4FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in responsibleOps" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#52C4FE] mb-3">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-2">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-12 h-12 flex items-center justify-center rounded-md overflow-hidden"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 min-w-[180px] text-center">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Geleceğin Yeteneği -->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#D20058] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#D20058] to-[#9e0043] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Geleceğin Yeteneği</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in corporateCitizen" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#D20058] mb-3">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-2">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-12 h-12 flex items-center justify-center rounded-md overflow-hidden"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 min-w-[180px] text-center">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Sağlam Kurumsal Temeller-->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#D20058] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#D20058] to-[#9e0043] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Sağlam Kurumsal Temeller</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in corporateCitizen" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#D20058] mb-3">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-2">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-12 h-12 flex items-center justify-center rounded-md overflow-hidden"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-2 min-w-[180px] text-center">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SDG Açıklaması ve Tanımlar -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <h2 class="text-xl font-bold text-gray-700 mb-4 text-center">Sürdürülebilir Kalkınma Amaçları Tanımları</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="(goal, index) in sdgDefinitions" :key="index"
               class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all">
            <div class="w-12 h-12 rounded-md overflow-hidden flex items-center justify-center mr-3">
              <img :src="getSdgImagePath(goal.number)" :alt="`SDG ${goal.number}`" class="w-full h-full object-contain" />
            </div>
            <div class="text-sm text-gray-600 flex-1">{{ goal.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTooltip = ref(null);

// SDG Tooltip fonksiyonları
const showTooltip = (goal) => {
  activeTooltip.value = goal;
};

const hideTooltip = () => {
  activeTooltip.value = null;
};

// SDG logo yolunu alma fonksiyonu
const getSdgImagePath = (number) => {
  return `/denizefr24/${number}.png`;
};

// SDG Tanımları
const sdgDefinitions = [
  { number: 4, title: 'Nitelikli Eğitim' },
  { number: 5, title: 'Toplumsal Cinsiyet Eşitliği' },
  { number: 7, title: 'Erişilebilir ve Temiz Enerji' },
  { number: 8, title: 'İnsana Yakışır İş ve Ekonomik Büyüme' },
  { number: 9, title: 'Sanayi, Yenilikçilik ve Altyapı' },
  { number: 10, title: 'Eşitsizliklerin Azaltılması' },
  { number: 13, title: 'İklim Eylemi' },
  { number: 16, title: 'Barış, Adalet ve Güçlü Kurumlar' },
  { number: 17, title: 'Amaçlar İçin Ortaklıklar' },
];

// SDG için başlık getir
const getSdgTitle = (number) => {
  const definition = sdgDefinitions.find(d => d.number === number);
  return definition ? definition.title : `SDG ${number}`;
};

// Tüm kategorileri içeren veri
const financialActor = [
  { title: 'Finansal Performans ve Kârlılık', goals: [8, 10, 16] },
  { title: 'Dijital Bankacılık', goals: [8, 9] },
  { title: 'Müşteri Odaklılık', goals: [8, 10] },
  { title: 'Finansal Kapsayıcılık', goals: [10] },
  { title: 'İnsan Hakları', goals: [8, 16] },
  { title: 'İklim Eylemi', goals: [7, 13, 17] },
  { title: 'Siber Güvenlik ve Müşteri Gizliliği', goals: [9] },
  { title: 'Sorumlu Ürün ve Hizmetler', goals: [5, 8, 10] }
];

const responsibleOps = [
  { title: 'İşin Geleceği ve Yeni Çalışma Modelleri', goals: [4] },
  { title: 'Sorumlu Satın Alma ve Tedarik Zinciri', goals: [8, 16] },
  { title: 'Çalışan Hakları, Bağlılığı ve Memnuniyeti', goals: [4, 5, 8, 10] },
  { title: 'Fırsat Eşitliği, Çeşitlilik ve Toplumsal Cinsiyet Eşitliği', goals: [5, 10] }
];

const corporateCitizen = [
  { title: 'Toplumsal Refaha Katkı', goals: [4, 8, 10] },
  { title: 'Etkin Risk Yönetimi', goals: [8] },
  { title: 'İş Etiği, Şeffaflık, Kurumsal Yönetim', goals: [8, 16, 17] }
];
</script>

<style scoped>
.sdg-badge {
  transition: all 0.3s ease;
}

.sdg-badge:hover {
  transform: scale(1.2);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>

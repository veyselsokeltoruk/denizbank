<template>
  <div>
    <!-- Header Section -->
    <div class="bg-[#DAF2FF] py-6 mt-12">
      <p class="text-[#072CAD] text-md sm:text-2xl font-bold text-center">
        Sürdürülebilirlik Alanında Dâhil Olunan İnisiyatifler ve Endeksler
      </p>
    </div>

    <!-- Logos Slider Container -->
    <div class="bg-[#DAF2FF] pt-4">
      <swiper
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination'
        }"
        :modules="modules"
        :autoplay="autoplay"
        :breakpoints="breakpoints"
        class="bg-[#DAF2FF] pb-8"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(logo, index) in logos" :key="index">
          <div class="flex flex-col justify-center items-center h-full p-4">
            <div class="w-1/2 border-b border-[#072CAD] mb-6"></div>

            <!-- Logo Card -->
            <div class="w-full h-28 flex items-center justify-center bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative">
              <!-- SVG Logos -->
              <template v-if="logo.path.endsWith('.svg')">
                <div
                  class="w-full h-full bg-contain bg-center bg-no-repeat"
                  :style="{ backgroundImage: `url(${getImagePath(logo.path)})` }"
                  :title="logo.alt"
                ></div>

                <!-- SVG Fallback -->
                <div
                  v-show="svgFailed[index]"
                  class="absolute inset-0 flex items-center justify-center bg-white text-[#072CAD] font-bold text-center p-2"
                  @error="handleSvgError(index)"
                >{{ logo.alt }}</div>
              </template>

              <!-- Regular Images -->
              <img
                v-else
                :src="getImagePath(logo.path)"
                :alt="logo.alt"
                class="max-h-20 max-w-full object-contain"
                @error="handleImageError(index)"
              >

              <!-- Image Fallback -->
              <div
                v-if="imageErrors[index]"
                class="absolute inset-0 flex items-center justify-center bg-white text-[#072CAD] font-bold text-center p-2"
              >
                {{ logo.alt }}
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- Navigation & Pagination -->
        <div class="swiper-button-next !text-[#072CAD]"></div>
        <div class="swiper-button-prev !text-[#072CAD]"></div>
        <div class="swiper-pagination !bottom-0 !text-[#072CAD]"></div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Logo verileri
const logos = [
  { path: '/logos/30Club.webp', alt: '30% Club' },
  { path: '/logos/bist-logo.webp', alt: 'BIST' },
  { path: '/logos/bloomberg-logo.webp', alt: 'Bloomberg' },
  { path: '/logos/cdp-logo.webp', alt: 'CDP' },
  { path: '/logos/logo-ert.png', alt: 'ERT' },
  { path: '/logos/wep-logo.png', alt: 'WEP' },
  { path: '/logos/ftse4good.svg', alt: 'FTSE4Good' },
  { path: '/logos/GRI-logo.webp', alt: 'GRI' },
  { path: '/logos/NZBA-PRB.webp', alt: 'NZBA-PRB' },
  { path: '/logos/Refintiv_Logo.webp', alt: 'Refinitiv' },
  { path: '/logos/science.webp', alt: 'Science Based Targets' },
  { path: '/logos/sdg.webp', alt: 'SDG' },
  { path: '/logos/skd-turkiye-logo.webp', alt: 'SKD Türkiye' },
  { path: '/logos/sustainalytics.webp', alt: 'Sustainalytics' },
  { path: '/logos/un.webp', alt: 'United Nations' },
  { path: '/logos/unep-fi.webp', alt: 'UNEP FI' }
];

// Error handling states
const imageErrors = ref(Array(logos.length).fill(false));
const svgFailed = ref(Array(logos.length).fill(false));

// Error handling functions
const handleImageError = (index) => {
  imageErrors.value[index] = true;
};

const handleSvgError = (index) => {
  svgFailed.value[index] = true;
};

// Image path helper function with subdirectory support
const getImagePath = (name) => {
  return name.startsWith('/') ? `/denizefr24${name}` : `/denizefr24/${name}`;
};

// Swiper configuration
const modules = [Autoplay, Navigation, Pagination];

const autoplay = {
  delay: 3000,
  disableOnInteraction: false,
};

const breakpoints = {
  '640': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

const onSwiper = (swiper) => {
  swiper.params.autoplay.delay = 3000;
  swiper.autoplay.start();
};
</script>

<style>
/* Only keeping minimal necessary styling that can't be handled with Tailwind */
.swiper-pagination-bullet-active {
  background-color: #072CAD !important;
}

.swiper-slide {
  height: auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>

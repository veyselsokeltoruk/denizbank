<template>
  <div class="bg-[#F7FAFC] py-16 overflow-hidden">
    <p class="text-[#072CAD] text-3xl lg:text-4xl font-bold text-center mb-10 lg:mb-12">
      Rakamlarla 2024
    </p>

    <div class="swiper-container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }"
        :autoplay="autoplay"
        :breakpoints="breakpoints"
        :loop="true"
        :space-between="30"
        class="mySwiper pb-16"
        :style="{ minHeight: '320px' }"
        @swiper="onSwiper"
        @destroy="onSwiperDestroy"
      >
        <SwiperSlide v-for="(stat, index) in stats" :key="index" class="h-auto pb-4">
          <div class="flex flex-col justify-between text-center h-full bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-20 h-1.5 bg-gradient-to-r from-[#06BFDD] to-[#075AAA] mx-auto mb-6 rounded-full"></div>
            <StatCard
              :icon="stat.icon"
              :value="stat.value"
              :suffix="stat.suffix"
              :prefix="stat.prefix"
              :label="stat.label"
              :decimal-places="stat.decimalPlaces"
              simple
              class="flex-grow mb-4"
            />
          </div>
        </SwiperSlide>

        <!-- Navigation buttons positioned outside the swiper container -->
      </Swiper>

      <!-- Navigation buttons moved outside the Swiper component but still inside the container -->
      <button
        aria-label="Önceki slayt"
        class="swiper-button-prev-custom group absolute top-1/2 left-0 transform -translate-y-1/2 z-20 cursor-pointer p-4 bg-white rounded-full shadow-xl transition-all duration-300 ml-2 sm:ml-6 lg:ml-4 xl:ml-2 hover:scale-110 active:scale-100">
        <svg class="w-6 h-6 lg:w-7 lg:h-7 text-[#072CAD] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        aria-label="Sonraki slayt"
        class="swiper-button-next-custom group absolute top-1/2 right-0 transform -translate-y-1/2 z-20 cursor-pointer p-4 bg-white rounded-full shadow-xl transition-all duration-300 mr-2 sm:mr-6 lg:mr-4 xl:mr-2 hover:scale-110 active:scale-100">
        <svg class="w-6 h-6 lg:w-7 lg:h-7 text-[#072CAD] transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <div
        aria-label="Slayt navigasyonu"
        class="swiper-pagination-custom absolute bottom-6 left-0 right-0 flex justify-center space-x-2.5 z-10">
      </div>
    </div>
  </div>
</template>

<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import StatCard from './StatCard.vue'; // Ensure the path is correct

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Autoplay, Navigation, Pagination];

// Stats data array
const stats = ref([
  { icon: 'money', value: '1.579', suffix: 'milyar TL', label: 'Konsolide Aktif Büyüklüğü', decimalPlaces: 3 },
  { icon: 'profit', value: '45.3', suffix: 'milyar TL', label: 'Konsolide Net Kâr', decimalPlaces: 1 },
  { icon: 'money-growth', value: '950', suffix: 'milyar TL', label: 'Konsolide Mevduat Büyüklüğü' },
  { icon: 'credit-card', value: '796', suffix: 'milyar TL', label: 'Konsolide Kredi Büyüklüğü' },
  { icon: 'equity', value: '152', suffix: 'milyar TL', label: 'Konsolide Özkaynak Büyüklüğü' },
  { icon: 'percentage', value: '18.41', prefix: '%', label: 'Sermaye Yeterlilik Rasyosu', decimalPlaces: 2 },
  { icon: 'employee', value: '15.073', label: 'Toplam Çalışan Sayısı' },
  { icon: 'bank', value: '644', label: 'Toplam Şube Sayısı (DFHG)' },
  { icon: 'mobile', value: '5.0', suffix: 'milyon', label: 'Aktif Mobil Deniz Kullanıcı Sayısı', decimalPlaces: 1 },
]);

// Autoplay configuration
const autoplay = {
  delay: 4500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

// Breakpoints configuration
const breakpoints = {
  320: { slidesPerView: 1, spaceBetween: 20 },
  640: { slidesPerView: 2, spaceBetween: 25 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1280: { slidesPerView: 4, spaceBetween: 30 },
};

// Swiper instance ref (optional)
const swiperInstance = ref(null);

// Swiper initialized event handler
const onSwiper = (swiper) => {
  console.log('Swiper initialized:', swiper);
  swiperInstance.value = swiper;
};

// Swiper destroyed event handler
const onSwiperDestroy = () => {
  console.log('Swiper destroyed');
};

// Lifecycle hooks (optional)
onMounted(() => {});
onBeforeUnmount(() => {});

</script>

<style scoped>
/* Card Styles within Slides */
.swiper-slide > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 240px;
  height: 100%;
}

/* Custom Pagination Bullet Styles */
:deep(.swiper-pagination-custom .swiper-pagination-bullet-custom) {
  width: 11px;
  height: 11px;
  background-color: #A0AEC0; /* Tailwind gray-500 */
  opacity: 0.7;
  transition: all 0.3s ease;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  margin: 0 4px;
}

:deep(.swiper-pagination-custom .swiper-pagination-bullet-active-custom) {
  background-color: #06BFDD; /* Active color */
  transform: scale(1.25);
  opacity: 1;
}

/* Hide default Swiper arrows */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none !important;
}

/* Ensure Swiper container has enough bottom padding */
.mySwiper {
  padding-bottom: 70px !important;
  margin: 0 24px; /* Add margin to ensure navigation buttons are fully visible */
}

/* Custom navigation button styles with proper visibility */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
}

/* Optional: Add a subtle focus ring for accessibility on buttons */
.swiper-button-prev-custom:focus-visible,
.swiper-button-next-custom:focus-visible {
  outline: 2px solid #06BFDD;
  outline-offset: 2px;
}

/* Medium screens */
@media (min-width: 768px) {
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    width: 52px;
    height: 52px;
  }
}

/* Large screens */
@media (min-width: 1024px) {
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    width: 56px;
    height: 56px;
  }
}
</style>

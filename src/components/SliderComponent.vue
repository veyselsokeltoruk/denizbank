<template>
  <div class="slider-container relative overflow-hidden">
    <!-- Main Swiper with Modern Navigation -->
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      }"
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }"
      :modules="modules"
      class="main-swiper rounded-lg shadow-xl"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
    >
      <!-- First Slide - Main Info -->
      <swiper-slide class="relative">
        <img src="/01_SPR.jpg" alt="İş Bankası 100. Yıl" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
          <div class="w-full md:w-1/2 px-6 md:pl-16 my-4 flex flex-col gap-6 max-h-5/6 overflow-auto custom-scrollbar">
            <div class="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <h2 class="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4">
                Türkiye'nin ve Geleceğin Bankası:
              </h2>
              <p class="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                Tam 100 Yıldır!
              </p>
              <p class="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
                Asırlık kurumsal mirasını, yenilikçilik
                ve gelecek vizyonuyla harmanlayan İş
                Bankası, 100. yılında yayınladığı Entegre
                Faaliyet Raporu'nu gururla sunar.
              </p>
              <p class="text-white/90 text-sm md:text-base lg:text-lg mb-6">
                2023 yılı Entegre Faaliyet Raporu, Banka'nın ikinci
                yüzyılına nasıl hazırlandığını paydaşlarına sunmayı
                amaçlamaktadır.
              </p>
              <a
                href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf"
                class="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg backdrop-blur-sm transition-all"
              >
                <img class="h-6 w-auto mr-3" src="/pdf.svg" alt="PDF">
                <span class="mr-3">Entegre Faaliyet Raporu 2023</span>
                <img class="h-5 w-auto" src="/download.svg" alt="Download">
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Second Slide - Güvenilir Finansal Aktör -->
      <swiper-slide class="relative">
        <img src="/03_SPR.jpg" alt="Güvenilir Finansal Aktör" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
          <div class="w-full md:w-1/2 px-6 md:pl-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                Güvenilir Finansal Aktör
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Kapsayıcı, dayanıklı, çevreye duyarlı bir ekonomi için yeni nesil bankacılık
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Third Slide - Sorumlu Operasyonlar -->
      <swiper-slide class="relative">
        <img src="/04_SPR.jpg" alt="Sorumlu Operasyonlar" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
          <div class="w-full md:w-1/2 px-6 md:pl-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                Sorumlu Operasyonlar
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Tercih edilen bir işveren ve iş ortağı
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Fourth Slide - İyi Kurumsal Vatandaş -->
      <swiper-slide class="relative">
        <img src="/05_SPR.jpg" alt="İyi Kurumsal Vatandaş" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
          <div class="w-full md:w-1/2 px-6 md:pl-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                İyi Kurumsal Vatandaş
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Adil, şeffaf ve etik yönetim, toplumsal refaha sürdürülebilir katkı
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Custom Navigation Controls -->
    <div class="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
      <button class="swiper-button-prev-custom bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>

    <div class="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
      <button class="swiper-button-next-custom bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Slide Indicator -->
    <div class="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
      <div class="slide-indicators flex gap-2">
        <!-- Indicators will be rendered by Swiper pagination -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const modules = [Autoplay, Navigation, Pagination, EffectFade];
</script>

<style>
@font-face {
  font-family: "handwritten";
  src: url("/fonts/Amsterdam-Signature.ttf");
}

.handwritten {
  font-family: "handwritten", cursive;
}

.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.main-swiper {
  width: 100%;
  height: 600px;
  max-height: 80vh;
}

.swiper-slide {
  overflow: hidden;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(178, 232, 255, 0.5) rgba(0, 0, 0, 0.2);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(178, 232, 255, 0.5);
  border-radius: 10px;
}

/* Pagination Bullets Styling */
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #A0D5FF;
  width: 20px;
  border-radius: 5px;
  opacity: 1;
}
</style>

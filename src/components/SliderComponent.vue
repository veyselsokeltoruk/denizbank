<template>
  <div class="slider-container relative overflow-hidden">
    <!-- Main Swiper -->
    <swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      }"
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }"
      :modules="modules"
      :effect="'fade'"
      :fadeEffect="{ crossFade: true }"
      class="main-swiper rounded-lg shadow-xl"
    >
      <!-- Slide 1 - Main Info -->
      <swiper-slide class="relative">
        <img src="/03_SPR.jpg" alt="Yeni Nesil Bankacılık" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center">
          <div class="w-full md:w-1/2 px-6 md:pl-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                 İlerisi Deniz
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                DenizBank, kuruluşundan bu yana sorumlu bankacılık yaklaşımı ile hareket etmekte; sermayedar, çalışan, müşteri ve topluma değer katmayı hedeflemektedir. Tüm iş süreçlerini sürdürülebilirlik odağında ele almakta ve faaliyetlerini Sürdürülebilir Finansman, Yeni Nesil Bankacılık ve Geleceğin Yeteneği değer alanlarıyla gerçekleştirmektedir.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Slide 2 - Yeni Nesil Bankacılık -->
      <swiper-slide class="relative">
        <img src="/slide-2.png" alt="Yeni Nesil Bankacılık" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent flex items-center justify-end">
          <div class="w-full md:w-1/2 px-6 md:pr-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                Yeni Nesil Bankacılık
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                 Dijitalleşme ve inovasyon yardımıyla geliştirilen yenilikçi ürün ve hizmetlerimizin sürdürülebilirlik etkisini daha geniş bir müşteri kitlesine ulaştırmak ve müşteri deneyimi ile operasyonel verimliliği yukarı taşımak öncelikli hedeflerimiz arasında yer almaktadır.

              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Slide 3 - İlerisi için Sürdürülebilir Finansman -->
      <swiper-slide class="relative">
        <img src="/slide-3.png" alt="İlerisi için Sürdürülebilir Finansman" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent flex items-center justify-end">
          <div class="w-full md:w-1/2 px-6 md:pr-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                İlerisi için Sürdürülebilir Finansman
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Sürdürülebilirlik dönüşümünün kolaylaştırıcısı olma misyonuyla; finansmanı, yeşil dönüşüme hizmet eden sektör ve alanlara yönlendiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Slide 4 - Geleceğin Yeteneği -->
      <swiper-slide class="relative">
        <img src="/slide-4.png" alt="Geleceğin Yeteneği" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent flex items-center justify-end">
          <div class="w-full md:w-1/2 px-6 md:pr-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                Geleceğin Yeteneği
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Sürdürülebilirlik hedefleri için gereken dönüşümün temel taşlarından biri yeni nesil yeteneklerdir.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Slide 5 - Sağlam Kurumsal Temeller -->
      <swiper-slide class="relative">
        <img src="/slide-5.png" alt="Sağlam Kurumsal Temeller" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent flex items-center justify-end">
          <div class="w-full md:w-1/2 px-6 md:pr-16 my-4 flex flex-col gap-4">
            <div class="backdrop-blur-sm p-6 rounded-lg">
              <h2 class="handwritten text-[#A0D5FF] text-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
                Sağlam Kurumsal Temeller
              </h2>
              <p class="text-white text-sm md:text-lg lg:text-xl bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                Veri Gizliliği ve Güvenliği, Sistematik Risk Yönetimi ile Yönetişim, Uyum ve Etik yönetsel temellerimizdir.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Navigation Controls -->
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
  </div>
</template>

<script setup>
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Autoplay, Navigation, Pagination, EffectFade];
</script>

<style>
@font-face {
  font-family: "handwritten";
  src: url("/fonts/GalanoGrotesqueSemiBoldItalic.otf");
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

/* Pagination Styling */
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

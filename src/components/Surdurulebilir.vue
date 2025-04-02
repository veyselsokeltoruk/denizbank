<template>
  <div>
    <div class="bg-[#DAF2FF] py-6 mt-12">
      <p class="text-[#072CAD] text-md sm:text-2xl font-bold text-center">
        Sürdürülebilirlik Alanında Dâhil Olunan İnisiyatifler ve Endeksler
      </p>
    </div>

    <div class="swiper-container bg-[#DAF2FF] pt-4">
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
        class="mySwiper"
        style="height: max-content; background-color: #DAF2FF; padding-bottom: 2rem"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(logo, index) in logos" :key="index">
          <div class="flex flex-col justify-center items-center h-full p-4">
            <div class="border-b border-[#072CAD] w-1/2 mb-6"></div>
            <div class="logo-card">
              <!-- Logo görüntüleme, fallback ile -->
              <template v-if="logo.path.endsWith('.svg')">
                <!-- SVG dosyaları için CSS background kullanma -->
                <div
                  class="logo-background w-full h-full bg-contain bg-center bg-no-repeat"
                  :style="{ backgroundImage: `url(${getImagePath(logo.path)})` }"
                  :title="logo.alt"
                ></div>

                <!-- Fallback - SVG yüklenmezse metni göster -->
                <div
                  class="fallback-text"
                  v-show="svgFailed[index]"
                  @error="handleSvgError(index)"
                >{{ logo.alt }}</div>
              </template>

              <!-- SVG olmayan dosyalar için normal img kullanma -->
              <img
                v-else
                :src="getImagePath(logo.path)"
                :alt="logo.alt"
                class="logo-image"
                @error="handleImageError(index)"
              >

              <!-- Fallback - Görsel yüklenmezse metni göster -->
              <div v-if="imageErrors[index]" class="fallback-content">{{ logo.alt }}</div>
            </div>
          </div>
        </swiper-slide>

        <!-- Navigation buttons -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

        <!-- Pagination -->
        <div class="swiper-pagination"></div>
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

// Logo verileri - FTSE4good için alternatif format da eklendi
const logos = [
  { path: '/logos/30Club.webp', alt: '30% Club' },
  { path: '/logos/bist-logo.webp', alt: 'BIST' },
  { path: '/logos/bloomberg-logo.webp', alt: 'Bloomberg' },
  { path: '/logos/cdp-logo.webp', alt: 'CDP' },
  { path: '/logos/logo-ert.png', alt: 'ERT' },
  { path: '/logos/wep-logo.png', alt: 'WEP' },
  // FTSE4good için 3 alternatif (biri çalışacaktır)
  { path: '/logos/ftse4good.svg', alt: 'FTSE4Good' }, // Orijinal SVG
  // { path: '/logos/ftse4good.png', alt: 'FTSE4Good (PNG)' }, // PNG alternatifi (dosyayı oluşturursanız)
  // { path: '/logos/ftse4good.webp', alt: 'FTSE4Good (WebP)' }, // WebP alternatifi (dosyayı oluşturursanız)
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

// Image error tracking
const imageErrors = ref(Array(logos.length).fill(false));
const svgFailed = ref(Array(logos.length).fill(false));

// Handle image loading errors
const handleImageError = (index) => {
  imageErrors.value[index] = true;
};

// Handle SVG background loading errors
// Not: Bu tam olarak çalışmaz çünkü CSS background error eventi yoktur
// Sadece örnek amaçlıdır
const handleSvgError = (index) => {
  svgFailed.value[index] = true;
};

// Public klasöründeki görsellere doğrudan erişim için helper fonksiyon
const getImagePath = (name) => {
  // Dosya adında büyük/küçük harf sorunlarını önlemek için
  // Tam yolu kontrol edip doğru şekilde yazabilirsiniz

  // SVG için FTSE4good dosya adı kontrolü
  if (name.toLowerCase().includes('ftse4good.svg')) {
    // Doğru dosya adını kullanın (büyük/küçük harf duyarlı olabilir)
    // Bu örneğin dosya adı FTSE4Good.svg olarak kaydedilmişse:
    // return '/logos/FTSE4Good.svg';

    // SVG yüklenmiyorsa alternatif bir format deneyin:
    // return '/logos/ftse4good.png';

    // Mevcut dosya adını kullan:
    return name;
  }

  return name;
};

// Swiper yapılandırması
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

<style scoped>
:deep(.swiper-slide) {
  height: auto;
  background-color: #DAF2FF;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper) {
  height: auto;
  background-color: #DAF2FF;
  padding-bottom: 40px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #072CAD;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #072CAD;
}

.logo-card {
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  position: relative; /* Fallback içeriği için */
}

.logo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.logo-image {
  max-height: 80px;
  max-width: 100%;
  object-fit: contain;
}

.logo-background {
  width: 100%;
  height: 80px;
}

.fallback-content, .fallback-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #072CAD;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
}
</style>

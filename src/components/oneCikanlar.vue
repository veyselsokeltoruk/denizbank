<template>
  <div>
    <p class="text-[#06BFDD] bg-[#E0F7FB] text-2xl font-bold text-center py-6 mt-12">
      Rakamlarla 2023
    </p>
  </div>

  <div class="swiper-container bg-[#E0F7FB] pt-4">
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
      style="height: max-content; background-color: #E0F7FB; padding-bottom: 2rem"
      @swiper="onSwiper"
    >
      <!-- Şube -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="bank"
            value="1088"
            label="şube"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Müşteri -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="people"
            :value="24.3"
            suffix="milyon"
            label="müşteri"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Çalışan -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="employee"
            value="21167"
            label="çalışan"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Toplam aktiflerde artış -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <p class="text-black text-2xl font-light">Toplam aktiflerde</p>
          <StatCard
            icon="percentage"
            :value="74.2"
            prefix="%"
            label="artış"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Mevduatta artış -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <p class="text-black text-2xl font-light">Mevduatta</p>
          <StatCard
            icon="money-growth"
            :value="78.5"
            prefix="%"
            label="artış"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- TL net kâr -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="profit"
            :value="72.3"
            suffix="milyar"
            label="TL net kâr"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Özkaynaklarda artış -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <p class="text-black text-2xl font-light">Özkaynaklarda</p>
          <StatCard
            icon="equity"
            :value="39.9"
            prefix="%"
            label="artış"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- TL piyasa değeri -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="market-value"
            :value="233.6"
            suffix="milyar"
            label="TL piyasa değeri"
            decimal-places="1"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Bankamatik -->
      <swiper-slide class="items-center" style="align-items: start">
        <div class="flex flex-col justify-center text-center">
          <div class="border-b border-[#06BFDD] mb-6"></div>
          <StatCard
            icon="atm"
            value="6312"
            label="adet Bankamatik"
            simple
          />
        </div>
      </swiper-slide>

      <!-- Navigation buttons -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>

      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </swiper>
  </div>

  <!-- Read More Button -->
  <div class="text-center py-6 bg-[#E0F7FB]">
    <a
      href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf"
      target="_blank"
      class="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-[#06BFDD] hover:bg-[#06BFDD] transition duration-300 group"
    >
      <span class="text-[#06BFDD] font-semibold group-hover:text-white">Faaliyet Raporunu İnceleyin</span>
      <ArrowRight class="h-5 w-5 ml-3 text-[#06BFDD] group-hover:text-white transition-all transform group-hover:translate-x-1" />
    </a>
  </div>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import StatCard from './StatCard.vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Autoplay, Navigation, Pagination];

const autoplay = {
  delay: 5500,
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
  swiper.params.autoplay.delay = 5500;
  swiper.autoplay.start();
};
</script>

<style scoped>
:deep(.swiper-slide) {
  height: auto;
  background-color: #E0F7FB;
}

:deep(.swiper) {
  height: auto;
  background-color: #E0F7FB;
  padding-bottom: 40px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #06BFDD;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #06BFDD;
}
</style>

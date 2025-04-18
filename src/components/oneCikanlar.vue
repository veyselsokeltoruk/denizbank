<template>
  <div>
    <p class="text-[#06BFDD] bg-[#E0F7FB] text-2xl font-bold text-center py-6 mt-12">
      Rakamlarla 2024
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
          <!-- Konsolide Aktif Büyüklüğü -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="money"
          value="1.579"
          suffix="milyar"
          label="Konsolide Aktif Büyüklüğü"
          decimal-places="3"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Konsolide Net Kâr -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="profit"
          value="45.3"
          suffix="milyar TL"
          label="Konsolide Net Kâr"
          decimal-places="1"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Konsolide Mevduat Büyüklüğü -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="money-growth"
          value="950"
          suffix="milyar TL"
          label="Konsolide Mevduat Büyüklüğü"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Konsolide Kredi Büyüklüğü -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="credit-card"
          value="796"
          suffix="milyar TL"
          label="Konsolide Kredi Büyüklüğü"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Konsolide Özkaynak Büyüklüğü -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="equity"
          value="152"
          suffix="milyar TL"
          label="Konsolide Özkaynak Büyüklüğü"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Sermaye Yeterlilik Rasyosu -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="percentage"
          value="18.41"
          prefix="%"
          label="Sermaye Yeterlilik Rasyosu"
          decimal-places="2"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Toplam Çalışan Sayısı -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="employee"
          value="15073"
          label="Toplam Çalışan Sayısı"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Toplam Şube Sayısı -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="bank"
          value="644"
          label="Toplam Şube Sayısı (DFHG)"
          simple
        />
      </div>
    </swiper-slide>

    <!-- Aktif MobilDeniz Kullanıcı Sayısı -->
    <swiper-slide class="items-center" style="align-items: start">
      <div class="flex flex-col justify-center text-center">
        <div class="border-b border-[#06BFDD] mb-6"></div>
        <StatCard
          icon="mobile"
          value="5.0"
          suffix="milyon"
          label="Aktif Mobil Deniz Kullanıcı Sayısı"
          decimal-places="1"
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

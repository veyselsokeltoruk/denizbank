<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper" style="height: 100%;">
    <swiper-slide><img src="/01_SPR.jpg" alt="">
      <div class="absolute flex flex-col items-start w-full h-full justify-center">
        <div class="w-1/2 pl-12 my-4 flex flex-col gap-4 max-h-3/6 overflow-auto items-start"
          style="scrollbar-color: #B2E8FF78 #00000029;">
          <p class="text-left font-bold sm:text-lg text-md md:text-xl lg:text-2xl xl:text-3xl">
            Türkiye’nin ve Geleceğin Bankası:
          </p>
          <p class="text-left font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Tam 100 Yıldır!
          </p>
          <p class="text-left font-semibold text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
            Asırlık kurumsal mirasını, yenilikçilik
            ve gelecek vizyonuyla harmanlayan İş
            Bankası, 100. yılında yayınladığı Entegre
            Faaliyet Raporu'nu gururla sunar.
          </p>
          <p class="text-left text-sm md:text-md lg:text-lg xl:text-xl">
            2023 yılı Entegre Faaliyet Raporu, Banka’nın ikinci
            yüzyılına nasıl hazırlandığını paydaşlarına sunmayı
            amaçlamaktadır.
          </p>
          <a href="">
            <a href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf" class="flex sm:items-center">
              <img class="md:h-7 h-5 w-auto m-2" src="/pdf.svg" alt="">
              <p class="hidden sm:block">Entegre Faaliyet Raporu 2023</p>
              <img class="md:h-7 h-5 w-auto m-2" src="/download.svg" alt="">
            </a>
          </a>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide><img src="/03_SPR.jpg" alt="">
      <div class="absolute flex flex-col items-start w-full">
        <div class="w-1/3 pl-12 my-4 flex flex-col gap-4">
          <p
            class="elyazisi text-[#A0D5FF] text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Güvenilir Finansal Aktör
          </p>
          <p class="text-left text-md lg:text-xl xl:text-2xl hidden sm:block">
            Kapsayıcı, dayanıklı, çevreye duyarlı bir ekonomi için yeni nesil bankacılık
          </p>
        </div>
      </div>
    </swiper-slide><swiper-slide><img src="/04_SPR.jpg" alt="">
      <div class="absolute flex flex-col items-start w-full">
        <div class="w-1/3 pl-12 my-4 flex flex-col gap-4">
          <p
            class="elyazisi text-[#A0D5FF] text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Sorumlu Operasyonlar
          </p>
          <p class="text-left text-md lg:text-xl xl:text-2xl hidden sm:block">
            Tercih edilen bir işveren ve iş ortağı
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide><img src="/05_SPR.jpg" alt="">
      <div class="absolute flex flex-col items-start w-full">
        <div class="w-1/3 pl-12 my-4 flex flex-col gap-4">
          <p
            class="elyazisi text-[#A0D5FF] text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            İyi Kurumsal Vatandaş
          </p>
          <p class="text-left text-md lg:text-xl xl:text-2xl hidden sm:block">
            Adil, şeffaf ve etik yönetim, toplumsal refaha sürdürülebilir katkı
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>


<style>
@font-face {
  font-family: "elyazisi";
  src: url("/fonts/Amsterdam-Signature.ttf");
}

.elyazisi {
  font-family: "elyazisi";
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}
</style>
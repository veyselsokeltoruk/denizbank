<template>
    <div class="flex flex-col items-center my-9">
        <div class="w-full flex flex-col items-center">
            <div class="w-full max-w-[1024px] px-3 lg:px-0">
                <a href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=55" target="_blank">
                    <h1 class="text-[#072CAD] text-md sm:text-3xl font-bold mb-6">
                        Operasyonların Olumsuz Etkilerinin Azaltılması
                    </h1>
                </a>
                <p class="text-black text-sm sm:text-xl font-light mb-9">
                    İş Bankası, geniş operasyon ağını yönetirken neden olduğu çevresel etkileri en aza indirmek,
                    tedarikçilerine kendisiyle özdeş çalışma normlarını benimsetmek ve tüm çalışanları için
                    güvenilir
                    bir işveren olma gayesiyle çalışmaktadır.
                </p>
                <div class="w-full flex flex-col gap-3 mb-9">
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            İş Bankası, 2023 yıl sonu itibarıyla doğrudan operasyonlarından kaynaklanan
                            emisyonlarını
                            2018 baz yılına kıyasla %79 oranında azaltırken, Karbon-nötr faaliyet gösterme hedefini
                            2035
                            yılından 2026 yılına çekti.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            İş Bankası kendi operasyonlarından kaynaklanan elektrik tüketimi için %100 yenilenebilir
                            enerji tedarik etti.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            Bankanın tüm lokasyonları ISO 14001 Çevre Yönetim Sertifikasına sahiptir.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center py-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            2023 yılında, afetlere karşı Banka’nın direncinin ve organizasyonel dayanıklılığının
                            artırılması amacıyla “Afet Yönetimi ve Koordinasyonu Programı” hayata geçirildi.
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg-[#DAF2FF] w-full">
                <p class="text-[#072CAD] text-2xl font-bold text-center py-6">2023'te öne
                    çıkanlar
                </p>
            </div>
            <swiper :navigation="true" :modules="modules" :autoplay="autoplay" :breakpoints="breakpoints"
                class="mySwiper" style="height: max-content; background-color: #DAF2FF; padding-bottom: 2rem;"
                @swiper="onSwiper">
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            Çalışan başına düşen <br> emisyon miktarında önceki yıla kıyasla
                        </p>
                        <count-up :end-val="8.4" :duration="3" :delay="1" :options="options" :decimal-places="1"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                            <template #prefix>
                                <span class="text-xl sm:text-3xl text-[#072CAD] font-light">%</span>
                            </template>
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            azaltım
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            Kağıt tüketiminde düşüş
                        </p>
                        <count-up :end-val="5" :duration="3" :delay="1" :options="options"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                            <template #prefix>
                                <span class="text-xl sm:text-3xl text-[#072CAD] font-light">%</span>
                            </template>
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            düşüş
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <count-up :end-val="97" :duration="3" :delay="1" :options="options"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                            <template #prefix>
                                <span class="text-xl sm:text-3xl text-[#072CAD] font-light">%</span>
                            </template>
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            yerel tedarik oranı
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            Dijital imza ve KEP uygulamaları ile
                        </p>
                        <count-up :end-val="238" :duration="3" :delay="1" :options="options"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            milyon sayfa kâğıt tasarrufu
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="w-full max-w-[1024px] px-3 lg:px-0">
                <div class="flex md:flex-row flex-col items-stretch gap-12 my-12">
                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-5">
                        <legend class="text-[#072CAD] text-center px-2">Katkı Sağlanan SKA’lar</legend>
                        <div class="w-full flex flex-col gap-4 mb-1 items-center justify-center h-full">
                            <div class="flex justify-between w-full">
                                <div class="w-1/3 max-w-[85px]">
                                    <img src="/7.png" alt="">
                                </div>
                                <div class="w-1/3 max-w-[85px]">
                                    <img src="/8.png" alt="">
                                </div>
                                <div class="w-1/3 max-w-[85px]">
                                    <img src="/10.png" alt="">
                                </div>
                                <div class="w-1/3 max-w-[85px]">
                                    <img src="/13.png" alt="">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-7">
                        <legend class="text-[#072CAD] text-center px-2">İlgili Sermaye Ögeleri</legend>
                        <div class="flex flex-col gap-5 h-full justify-center">
                            <div class="flex items-center justify-center gap-5 h-1/2 w-full">
                                <div
                                    class="flex items-center text-left sm:text-lg text-sm font-semibold text-[#4ABFDF] w-1/2 gap-2">
                                    <img class="w-1/3 object-contain" src="/sosyal-sermaye-yatay.webp" alt="">
                                    <span>Sosyal-İlişkisel Sermaye</span>
                                </div>
                                <div
                                    class="flex items-center text-left sm:text-lg text-sm font-semibold text-[#5CB533] w-1/2 gap-2">
                                    <img class="w-1/3 object-contain" src="/dogal-sermaye-yatay.webp" alt="">
                                    <span>Doğal Sermaye</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="m-9 max-w-[1024px] w-full px-3 lg:px-0">
            <h1 class="text-[#072CAD] font-bold text-center mb-8">
                Bu bölümde ulaşabileceğiniz içerikler
            </h1>
            <div class="flex w-full md:flex-row flex-col md:gap-12 gap-2 items-center">
                <div class="flex flex-col md:w-1/2 w-5/6 gap-2">
                    <div class="flex items-center justify-between">
                        <a class="text-[#072CAD] underline text-sm md:text-base"
                            href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=57" target="_blank">
                            Çevresel Etki Yönetimi
                        </a>
                        <img class="h-4" src="/arrow.svg" alt="">
                    </div>
                    <div class="flex items-center justify-between">
                        <a class="text-[#072CAD] underline text-sm md:text-base"
                            href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=57" target="_blank">
                            Sorumlu Tedarik Zinciri Yönetimi
                        </a>
                        <img class="h-4" src="/arrow.svg" alt="">
                    </div>
                </div>
                <div class="flex flex-col md:w-1/2 w-5/6 gap-2">
                    <div class="flex items-center justify-between">
                        <a class="text-[#072CAD] underline text-sm md:text-base"
                            href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=58" target="_blank">
                            İş Sürekliliği Yönetimi Programı
                        </a>
                        <img class="h-4" src="/arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b border-[#072CAD] w-full">
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import CountUp from 'vue-countup-v3';

import type { CountUpOptions } from 'vue-countup-v3';

const props = defineProps({
    nummber: String,
    label: String,
});

const options: CountUpOptions = {
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay: 300,
    decimal: ',',
    separator: '.'
}

const modules = [Autoplay, Navigation];

const autoplay = {
    delay: 5500,
    disableOnInteraction: false,
}

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
}

const onSwiper = (swiper) => {
    swiper.params.autoplay.delay = 5500;
    swiper.autoplay.start();
}
</script>

<style>
.swiper-slide {
    height: auto;
    background-color: transparent;
}

.swiper {
    height: 15rem;
    background-color: transparent;
}
</style>

<style>
.swiper-slide {
    height: auto;
    background-color: transparent;
}

.swiper {
    height: 15rem;
    background-color: transparent;
}
</style>
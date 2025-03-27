<template>
    <div class="flex flex-col items-center my-9">
        <div class="w-full flex flex-col items-center">
            <div class="w-full max-w-[1024px] px-3 lg:px-0">
                <a href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=84" target="_blank">
                    <h1 class="text-[#072CAD] text-md sm:text-3xl font-bold mb-6">
                        Toplumsal Refaha Katkı
                    </h1>
                </a>
                <p class="text-black text-sm sm:text-xl font-light mb-9">
                    İş Bankası, toplumun ihtiyaçlarını gözeten, uzun soluklu ve kalıcı etki sağlamayı amaçlayan sosyal
                    sorumluluk projelerini hayata geçirmektedir.
                </p>
                <div class="w-full flex flex-col gap-3 mb-9">
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            Türkiye İş Bankası Resim ve Heykel Müzesi, Cumhuriyetimizin 100. yılına özel Türkiye İş
                            Bankası'nın ülkemize armağanı olarak 29 Ekim 2023’te kapılarını sanatseverlere açtı.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            İşNet iştiraki aracılığı ile kırsal alanların ekonomik ve sosyal kalkınmasına katkıda
                            bulunmak amacıyla “100 Köye İnternet” projesi hayata geçirildi.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center pt-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            İş Bankası ve Koç Üniversitesi iş birliği ile bilimsel ve akademik faaliyetlere katkıda
                            bulunmak ve yapay zekâ alanında ileri düzey çalışmalar gerçekleştirmek amacıyla “Yapay Zekâ
                            Uygulama ve Araştırma Merkezi” kuruldu.
                        </p>
                    </div>
                    <div class="flex gap-10 items-center py-3">
                        <img class="h-6" src="/tik-ikon.png" alt="">
                        <p class="text-black text-sm sm:text-xl font-light">
                            Asya ve Avrupa’yı sporun gücüyle birleştiren İstanbul Maratonu, Cumhuriyet’in 100. yılı
                            olan 2023’te ve İş Bankası’nın 100. yılı olan 2024’te “Türkiye İş Bankası İstanbul
                            Maratonu” adını taşıyacak.
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
                            81 İlden 81 Öğrenci<br>projesi kapsamında<br>toplam
                        </p>
                        <count-up :end-val="428" :duration="3" :delay="1" :options="options"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            mezun öğrenci
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            Okullara
                        </p>
                        <div class="flex justify-center">
                            <count-up :end-val="167" :duration="3" :delay="1" :options="options"
                                class="text-xl sm:text-3xl text-[#072CAD] font-light">
                            </count-up>
                            <p class="text-[#072CAD] text-xl sm:text-3xl font-light">
                                &nbsp;bin
                            </p>
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            kitap hediyesi
                        </p>
                    </div>
                </swiper-slide><swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <div class="flex justify-center">
                            <count-up :end-val="35" :duration="3" :delay="1" :options="options"
                                class="text-xl sm:text-3xl text-[#072CAD] font-light">
                            </count-up>
                            <p class="text-[#072CAD] text-xl sm:text-3xl font-light">
                                &nbsp;bin
                            </p>
                        </div>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            satranç sınıfı
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide class="slider-align-center inlineOverride">
                    <div class="flex flex-col justify-center">
                        <div class="border-b border-[#072CAD] mb-6">
                        </div>
                        <count-up :end-val="100" :duration="3" :delay="1" :options="options"
                            class="text-xl sm:text-3xl text-[#072CAD] font-light">
                        </count-up>
                        <p class="text-black text-sm sm:text-2xl font-light">
                            Köye İnternet Projesi
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="w-full max-w-[1024px] px-3 lg:px-0">
                <div class="flex md:flex-row flex-col items-stretch gap-10 my-12">
                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-5">
                        <legend class="text-[#072CAD] text-center px-2">Katkı Sağlanan SKA’lar</legend>
                        <div class="w-full flex flex-col gap-4 mb-1 items-center justify-center h-full">
                            <div class="flex justify-evenly w-full gap-1">
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
                            href="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=85" target="_blank">
                            Sosyal Sorumluluk Projelerimiz
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
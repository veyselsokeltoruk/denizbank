<template>
    <div>
        <p class="text-[#072CAD] bg-[#DAF2FF] text-md sm:text-2xl font-bold text-center pt-4 mt-12">Sürdürülebilirlik
            Alanında Dâhil Olunan İnisiyatifler ve Endeksler
        </p>
    </div>
    <swiper :navigation="true" :modules="modules" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :breakpoints="{
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
    }" class="mySwiper" style="background-color: #DAF2FF; height: max-content;">
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/30Club.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/bist-logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/bloomberg-logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/cdp-logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6">
                <img class="h-full max-h-24 w-auto" src="/logos/logo-ert.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/wep-logo.png" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/ftse4good.svg" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/GRI-logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/NZBA-PRB.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex justify-center p-6">
                <img class="h-full max-h-24 w-auto" src="/logos/Refintiv_Logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/science.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/sdg.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-full" src="/logos/skd-turkiye-logo.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6">
                <img class="h-auto max-h-24 w-auto" src="/logos/sustainalytics.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-full max-h-24 w-auto" src="/logos/un.webp" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex  justify-center p-6 h-full">
                <img class="h-auto max-h-24 w-auto" src="/logos/unep-fi.webp" alt="">
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        nummber: String,
        label: String
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>

<style scoped>
.swiper-slide {
    height: auto;
    background-color: #DAF2FF;
}

.swiper {
    height: 17rem;
    background-color: #DAF2FF;
}
</style>

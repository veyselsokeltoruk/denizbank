<template>
    <div class="flex flex-col items-center my-12">
        <div class="w-full flex flex-col items-center">
            <!-- Header Section with Improved Styling -->
            <div class="w-full max-w-[1200px] px-4 lg:px-0">
                <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf#page=46" target="_blank">
                    <h1 class="text-[#072CAD] text-xl sm:text-4xl font-bold mb-8 hover:underline transition-all">
                        100 Yıldır Yenilikçi Banka
                    </h1>
                </a>
                <p class="text-gray-800 text-sm sm:text-xl font-normal mb-12 max-w-3xl">
                    İş Bankası teknolojiyi verimli ve güncel haliyle kullanarak müşterilerine her temas noktasında
                    kusursuz ve güvenli bir deneyim sunmaktadır.
                </p>

                <!-- Feature List with Improved Visual Design -->
                <div class="w-full flex flex-col gap-5 mb-12">
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            Türkiye'nin ilk mobil bankacılık uygulaması İşCep, Global Finance tarafından
                            <span class="font-semibold">"Dünyanın En İyi Mobil Bankacılık Uygulaması"</span> seçildi.
                        </p>
                    </div>
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            2023 yılında hayata geçirilen Proemtia, ülkemizde alanındaki
                            <span class="font-semibold">ilk dijital pazaryeridir</span>.
                        </p>
                    </div>
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            İş Bankası 2023 yılında kendi büyük dil modelini
                            <span class="font-semibold">(İşGPT)</span> geliştirme çalışmalarına başladı.
                        </p>
                    </div>
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            Türkiye'de bankacılık sektöründe bir ilk olan
                            <span class="font-semibold">Dijital Kart</span> hayata geçirildi.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Stats Section with Improved Visual Design -->
            <div class="bg-gradient-to-r from-[#DAF2FF] to-[#E6F7FF] w-full py-8">
                <p class="text-[#072CAD] text-2xl sm:text-3xl font-bold text-center pb-8">
                    2023'te öne çıkanlar
                </p>

                <!-- Stats Cards -->
                <div class="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto px-4">
                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64">
                        <div class="border-b-2 border-[#072CAD] w-1/2 mb-6"></div>
                        <div class="flex justify-center items-end mb-2">
                            <span class="text-3xl text-[#072CAD] font-semibold">{{ digitalCustomers }}</span>
                            <span class="text-xl text-[#072CAD] ml-1">milyon</span>
                        </div>
                        <p class="text-black text-xl font-medium text-center">
                            dijital müşteri
                        </p>
                    </div>

                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64">
                        <div class="border-b-2 border-[#072CAD] w-1/2 mb-6"></div>
                        <div class="flex justify-center items-end mb-2">
                            <span class="text-3xl text-[#072CAD] font-semibold">%{{ nonBranchShare }}</span>
                        </div>
                        <p class="text-black text-xl font-medium text-center">
                            şube dışı kanal payı
                        </p>
                    </div>

                    <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64">
                        <div class="border-b-2 border-[#072CAD] w-1/2 mb-6"></div>
                        <p class="text-black text-lg font-medium text-center mb-2">
                            Dijitalleşme ile
                        </p>
                        <div class="flex justify-center items-end mb-2">
                            <span class="text-3xl text-[#072CAD] font-semibold">{{ paperSaved }}</span>
                            <span class="text-xl text-[#072CAD] ml-1">milyon</span>
                        </div>
                        <p class="text-black text-xl font-medium text-center">
                            sayfa kağıt tasarrufu
                        </p>
                    </div>
                </div>
            </div>

            <!-- Additional Info Section -->
            <div class="w-full max-w-[1200px] px-4 lg:px-0">
                <div class="flex md:flex-row flex-col items-stretch gap-8 mt-12">
                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-6 rounded-lg">
                        <legend class="text-[#072CAD] text-center px-4 font-semibold">Katkı Sağlanan SKA'lar</legend>
                        <div class="w-full flex flex-col gap-4 mb-1 items-center justify-center h-full">
                            <div class="flex justify-evenly gap-4 w-full">
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/8.png" alt="" class="rounded-md shadow-sm">
                                </div>
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/9.png" alt="" class="rounded-md shadow-sm">
                                </div>
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/10.png" alt="" class="rounded-md shadow-sm">
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-6 rounded-lg">
                        <legend class="text-[#072CAD] text-center px-4 font-semibold">İlgili Sermaye Ögeleri</legend>
                        <div class="flex flex-col gap-6 h-full justify-center">
                            <div class="flex items-center justify-center gap-5 h-1/2 w-full">
                                <div class="flex items-center text-left sm:text-lg text-sm font-semibold text-[#EB8A24] w-1/2 gap-3 p-3 hover:bg-orange-50 rounded-lg transition-all">
                                    <img class="w-1/3 object-contain" src="/entelektuel-sermaye-yatay.webp" alt="">
                                    <span>Entelektüel Sermaye</span>
                                </div>
                                <div class="flex items-center text-left sm:text-lg text-sm font-semibold text-[#4ABFDF] w-1/2 gap-3 p-3 hover:bg-blue-50 rounded-lg transition-all">
                                    <img class="w-1/3 object-contain" src="/sosyal-sermaye-yatay.webp" alt="">
                                    <span>Sosyal-İlişkisel Sermaye</span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <!-- Links Section -->
        <div class="my-12 max-w-[1200px] w-full px-4 lg:px-0">
            <h1 class="text-[#072CAD] font-bold text-center text-2xl mb-8">
                Bu bölümde ulaşabileceğiniz içerikler
            </h1>
            <div class="flex w-full md:flex-row flex-col md:gap-12 gap-4 items-center">
                <div class="flex flex-col md:w-1/2 w-full gap-4">
                    <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf#page=47" target="_blank"
                       class="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-[#072CAD] transition-all">
                        <span class="text-[#072CAD] text-base md:text-lg font-medium">
                            Dijital Bankacılık
                        </span>
                        <img class="h-5" src="/arrow.svg" alt="">
                    </a>
                    <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf#page=49" target="_blank"
                       class="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-[#072CAD] transition-all">
                        <span class="text-[#072CAD] text-base md:text-lg font-medium">
                            İnovasyon ve Girişimcilik
                        </span>
                        <img class="h-5" src="/arrow.svg" alt="">
                    </a>
                </div>
                <div class="flex flex-col md:w-1/2 w-full gap-4">
                    <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf#page=52" target="_blank"
                       class="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-[#072CAD] transition-all">
                        <span class="text-[#072CAD] text-base md:text-lg font-medium">
                            Bilgi Güvenliği
                        </span>
                        <img class="h-5" src="/arrow.svg" alt="">
                    </a>
                </div>
            </div>
        </div>

        <div class="border-b-2 border-[#072CAD] w-full opacity-50"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Animation for count-up effect can be implemented with a simple function
// instead of using an external library
const digitalCustomers = ref(0);
const nonBranchShare = ref(0);
const paperSaved = ref(0);

onMounted(() => {
  const animateCount = (targetRef, finalValue, duration) => {
    const steps = 60;
    const stepValue = finalValue / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= finalValue) {
        targetRef.value = finalValue;
        clearInterval(timer);
      } else {
        targetRef.value = Math.round(current * 10) / 10;
      }
    }, interval);
  };

  // Start animations with slight delays
  setTimeout(() => animateCount(digitalCustomers, 15, 2000), 500);
  setTimeout(() => animateCount(nonBranchShare, 97.1, 2500), 700);
  setTimeout(() => animateCount(paperSaved, 238, 3000), 900);
});
</script>

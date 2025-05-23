<template>
    <div class="flex flex-col items-center my-12">
        <div class="w-full flex flex-col items-center">
            <!-- Header Section -->
            <div class="w-full max-w-[1200px] px-4 lg:px-0">
                <a href="/denizefr24/DenizBank_EFR_2024.pdf#page=84" target="_blank"
                   class="group transition-all duration-300">
                    <h1 class="text-[#072CAD] text-xl sm:text-4xl font-bold mb-8 group-hover:underline">
                        Toplumsal Refaha Katkı
                    </h1>
                </a>

                <p class="text-gray-800 text-sm sm:text-xl font-normal mb-12 max-w-3xl">
                    İş Bankası, toplumun ihtiyaçlarını gözeten, uzun soluklu ve kalıcı etki sağlamayı amaçlayan sosyal
                    sorumluluk projelerini hayata geçirmektedir.
                </p>

                <!-- Features with hover effects -->
                <div class="w-full flex flex-col gap-5 mb-12">
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            <span class="font-semibold">Türkiye İş Bankası Resim ve Heykel Müzesi</span>, Cumhuriyetimizin 100. yılına özel
                            Türkiye İş Bankası'nın ülkemize armağanı olarak <span class="font-semibold">29 Ekim 2023'te</span>
                            kapılarını sanatseverlere açtı.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            İşNet iştiraki aracılığı ile kırsal alanların ekonomik ve sosyal kalkınmasına katkıda
                            bulunmak amacıyla <span class="font-semibold">"100 Köye İnternet"</span> projesi hayata geçirildi.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            İş Bankası ve Koç Üniversitesi iş birliği ile bilimsel ve akademik faaliyetlere katkıda
                            bulunmak ve yapay zekâ alanında ileri düzey çalışmalar gerçekleştirmek amacıyla
                            <span class="font-semibold">"Yapay Zekâ Uygulama ve Araştırma Merkezi"</span> kuruldu.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            Asya ve Avrupa'yı sporun gücüyle birleştiren İstanbul Maratonu, Cumhuriyet'in 100. yılı
                            olan 2023'te ve İş Bankası'nın 100. yılı olan 2024'te
                            <span class="font-semibold">"Türkiye İş Bankası İstanbul Maratonu"</span> adını taşıyacak.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Stats Header -->
            <div class="bg-gradient-to-r from-[#DAF2FF] to-[#E6F7FF] w-full py-8">
                <p class="text-[#072CAD] text-2xl sm:text-3xl font-bold text-center pb-8">
                    2023'te öne çıkanlar
                </p>

                <!-- Stats Cards Carousel -->
                <div class="stats-carousel max-w-[1200px] mx-auto px-4">
                    <div class="flex flex-wrap justify-center gap-8">
                        <!-- Card 1 -->
                        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64 h-64 justify-center transform hover:scale-105 transition-all">
                            <div class="border-b-2 border-[#072CAD] w-1/2 mb-4"></div>
                            <p class="text-gray-700 text-sm font-medium text-center mb-3">
                                81 İlden 81 Öğrenci projesi kapsamında toplam
                            </p>
                            <div class="flex justify-center items-end">
                                <span class="text-3xl text-[#072CAD] font-semibold">{{ mezunOgrenci }}</span>
                            </div>
                            <p class="text-gray-700 text-sm font-medium text-center mt-2">
                                mezun öğrenci
                            </p>
                        </div>

                        <!-- Card 2 -->
                        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64 h-64 justify-center transform hover:scale-105 transition-all">
                            <div class="border-b-2 border-[#072CAD] w-1/2 mb-4"></div>
                            <p class="text-gray-700 text-sm font-medium text-center mb-3">
                                Okullara
                            </p>
                            <div class="flex justify-center items-end">
                                <span class="text-3xl text-[#072CAD] font-semibold">{{ kitapHediyesi }}</span>
                                <span class="text-xl text-[#072CAD] ml-1">bin</span>
                            </div>
                            <p class="text-gray-700 text-sm font-medium text-center mt-2">
                                kitap hediyesi
                            </p>
                        </div>

                        <!-- Card 3 -->
                        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64 h-64 justify-center transform hover:scale-105 transition-all">
                            <div class="border-b-2 border-[#072CAD] w-1/2 mb-4"></div>
                            <div class="flex justify-center items-end mb-2">
                                <span class="text-3xl text-[#072CAD] font-semibold">{{ satrancSinifi }}</span>
                                <span class="text-xl text-[#072CAD] ml-1">bin</span>
                            </div>
                            <p class="text-gray-700 text-sm font-medium text-center">
                                satranç sınıfı
                            </p>
                        </div>

                        <!-- Card 4 -->
                        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-64 h-64 justify-center transform hover:scale-105 transition-all">
                            <div class="border-b-2 border-[#072CAD] w-1/2 mb-4"></div>
                            <div class="flex justify-center items-end mb-2">
                                <span class="text-3xl text-[#072CAD] font-semibold">{{ koyeInternet }}</span>
                            </div>
                            <p class="text-gray-700 text-sm font-medium text-center">
                                Köye İnternet Projesi
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Info Boxes -->
            <div class="w-full max-w-[1200px] px-4 lg:px-0">
                <div class="flex md:flex-row flex-col items-stretch gap-10 my-12">
                    <!-- First Box - SKA'lar -->
                   <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-6 rounded-lg hover:shadow-lg transition-all">
                        <legend class="text-[#072CAD] text-center px-4 font-semibold text-lg">Katkı Sağlanan SKA'lar</legend>
                        <div class="w-full flex flex-col gap-4 mb-2 items-center justify-center h-full">
                            <div class="flex justify-evenly w-full gap-3">
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/8.png" alt="" class="rounded-md shadow-sm">
                                </div>
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/10.png" alt="" class="rounded-md shadow-sm">
                                </div>
                                <div class="w-1/3 max-w-[100px] transition-transform hover:scale-110">
                                    <img src="/13.png" alt="" class="rounded-md shadow-sm">
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <!-- Second Box - Sermaye Ögeleri -->
                    <fieldset class="flex flex-col md:w-1/2 border-2 border-[#072CAD] p-6 rounded-lg hover:shadow-lg transition-all">
                        <legend class="text-[#072CAD] text-center px-4 font-semibold text-lg">İlgili Sermaye Ögeleri</legend>
                        <div class="flex flex-col gap-6 h-full justify-center py-4">
                            <div class="flex items-center justify-center gap-5 w-full">
                                <div class="flex items-center text-left sm:text-base text-sm font-semibold text-[#4ABFDF] w-full gap-3 p-3 hover:bg-blue-50 rounded-lg transition-all">
                                    <img class="w-1/6 object-contain" src="/sosyal-sermaye-yatay.webp" alt="">
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

            <div class="flex w-full md:flex-row flex-col md:gap-8 gap-4 justify-center">
                <div class="flex flex-col md:w-1/2 w-full gap-4">
                    <a href="/denizefr24/DenizBank_EFR_2024.pdf#page=85" target="_blank"
                       class="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-[#072CAD] transition-all">
                        <span class="text-[#072CAD] text-base md:text-lg font-medium">
                            Sosyal Sorumluluk Projelerimiz
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
import { onMounted, ref } from 'vue';

// Animation counters
const mezunOgrenci = ref(0);
const kitapHediyesi = ref(0);
const satrancSinifi = ref(0);
const koyeInternet = ref(0);

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
        targetRef.value = Math.round(current);
      }
    }, interval);
  };

  // Start animations with slight delays
  setTimeout(() => animateCount(mezunOgrenci, 428, 2000), 500);
  setTimeout(() => animateCount(kitapHediyesi, 167, 2300), 700);
  setTimeout(() => animateCount(satrancSinifi, 35, 2600), 900);
  setTimeout(() => animateCount(koyeInternet, 100, 2900), 1100);
});
</script>

<style scoped>
.stats-carousel {
  scrollbar-width: thin;
  scrollbar-color: #072CAD transparent;
}

.stats-carousel::-webkit-scrollbar {
  height: 8px;
}

.stats-carousel::-webkit-scrollbar-track {
  background: transparent;
}

.stats-carousel::-webkit-scrollbar-thumb {
  background-color: #072CAD;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .stats-carousel {
    overflow-x: auto;
  }

  .stats-carousel > div {
    width: max-content;
    padding: 0 20px;
  }
}
</style>

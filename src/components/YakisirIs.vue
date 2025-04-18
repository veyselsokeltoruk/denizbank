<template>
    <div class="flex flex-col items-center my-12">
        <div class="w-full flex flex-col items-center">
            <!-- Header Section -->
            <div class="w-full max-w-[1200px] px-4 lg:px-0">
                <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf#page=59" target="_blank"
                   class="group transition-all duration-300">
                    <h1 class="text-[#072CAD] text-xl sm:text-4xl font-bold mb-8 group-hover:underline">
                        İnsana Yakışır İş
                    </h1>
                </a>

                <p class="text-gray-800 text-sm sm:text-xl font-normal mb-12 max-w-3xl">
                    İş Bankası, en kıymetli sermayesi olarak tanımladığı çalışanlarına; huzurlu, güvenli, saygılı, adil
                    ve destekleyici bir çalışma ortamı sunmaktadır.
                </p>

                <!-- Features with hover effects -->
                <div class="w-full flex flex-col gap-5 mb-12">
                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            <span class="font-semibold">"İŞ'im her yerde"</span> vizyonu ile tasarlanan MaxiOfisler,
                            açıldığı 2022 yılından beri <span class="font-semibold">44 bin kez</span> ziyaret edildi.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            <span class="font-semibold">Bir Önerim Var</span> uygulamasına 2023 yılında iletilen
                            önerilerden <span class="font-semibold">182 tanesi</span> hayata geçirildi.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            <span class="font-semibold">Öz Değerlendirme ve 360 Derece Değerlendirme</span> uygulamaları ile
                            Performans Yönetimi Sistemi tüm unsurlarıyla yenilendi.
                        </p>
                    </div>

                    <div class="flex gap-6 items-start pt-3 hover:bg-blue-50 p-4 rounded-lg transition-all">
                        <img class="h-8 mt-1" src="/tik-ikon.png" alt="">
                        <p class="text-gray-800 text-sm sm:text-xl font-normal">
                            Toplumsal cinsiyet eşitliğini desteklemek amacıyla geliştirilen
                            <span class="font-semibold">"Cinsiyetsiz Sözlük"</span> uygulaması kullanıma sunuldu.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-b-2 border-[#072CAD] w-full opacity-50"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Animation counters
const calisanDevirOrani = ref(0);
const sendikalilikOrani = ref(0);
const egitimSaati = ref(0);
const kadinYonetici = ref(0);

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
        targetRef.value = Math.round(current * 100) / 100;
      }
    }, interval);
  };

  // Start animations with slight delays
  setTimeout(() => animateCount(calisanDevirOrani, 1.63, 2000), 500);
  setTimeout(() => animateCount(sendikalilikOrani, 97.2, 2300), 700);
  setTimeout(() => animateCount(egitimSaati, 56.5, 2600), 900);
  setTimeout(() => animateCount(kadinYonetici, 40, 2900), 1100);
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

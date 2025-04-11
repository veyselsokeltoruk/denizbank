<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import FloatingButton from '../components/FloatingButton.vue';
import FooterComponent from '../components/FooterComponent.vue';
import Mesajlar from '../components/Pages/Mesajlar.vue';
import SliderComponentVue from '../components/SliderComponent.vue';
import OneCikanlar from '../components/oneCikanlar.vue';

onMounted(() => {
  // Initialize AOS with global settings
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>

<template>
  <!-- Page container with spacing for fixed header -->
  <div class="page-container pt-16">
    <!-- Hero Section -->
    <section class="relative">
      <SliderComponentVue />
    </section>

    <!-- Welcome Section with subtle separator -->
    <section class="welcome-section py-12 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl lg:text-5xl font-light text-[#072CAD] mb-6" data-aos="fade-up">İlerisi Deniz..</h1>
        <div class="w-32 h-1 bg-[#072CAD] mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-gray-700 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
          DenizBank 2024 Entegre Faaliyet Raporu, “İlerisi İçin…Yenilikçi Finans ile Sürdürülebilirlik Dönüşümünün Kolaylaştırıcısı Olmak” vizyonuna uyumlu olarak “İlerisi için” mottosu ile hazırlandı.
        </p>
        <br>
        <p class="text-gray-700 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
         DenizBank 2024 yılı Entegre Faaliyet Raporunu indiriniz
        </p>
      </div>
    </section>

    <!-- Messages Section -->
    <section class="bg-gray-50 py-10">
      <Mesajlar />
    </section>

    <!-- Stats Section -->
    <section class="py-12">
      <OneCikanlar />
    </section>

    <!-- Call to Action Section -->
    <section class="bg-[#072CAD] text-white py-16" data-aos="fade-up">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl lg:text-4xl font-light mb-6">Entegre Faaliyet Raporumuzu İnceleyin</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          İkinci yüzyılımıza hazırlanırken, daha sürdürülebilir ve kapsayıcı bir gelecek için taahhütlerimizi keşfedin.
        </p>
        <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf" target="_blank"
           class="inline-flex items-center bg-white text-[#072CAD] px-6 py-3 rounded-lg hover:bg-[#E0F7FB] transition duration-300">
          <span class="font-semibold">2023 Faaliyet Raporu</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Footer Section -->
    <FooterComponent />

    <!-- Floating Button for scrolling to top -->
    <FloatingButton />
  </div>
</template>

<style scoped>
.page-container {
  overflow-x: hidden;
}

.welcome-section {
  position: relative;
}

.welcome-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(7, 44, 173, 0.3), transparent);
}

section {
  position: relative;
}

h1, h2, h3 {
  color: #072CAD;
}

.section-bg-pattern {
  position: relative;
}

.section-bg-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/denizefr24/bg-pattern.png');
  background-size: 200px;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
</style>

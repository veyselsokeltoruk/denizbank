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
          DenizBank 2024 Entegre Faaliyet Raporu, “İlerisi İçin… Yenilikçi Finans ile Sürdürülebilirlik Dönüşümünün Kolaylaştırıcısı Olmak” vizyonuna uyumlu olarak “İlerisi için” mottosu ile hazırlandı.
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
  background-size: 200px;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
</style>

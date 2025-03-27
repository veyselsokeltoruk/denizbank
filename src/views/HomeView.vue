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
    <!-- Hero Section -->
    <div class="mt-15" >
<SliderComponentVue />
    </div>

    <!-- Welcome Section with subtle separator -->
    <div class="welcome-section py-12 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl lg:text-5xl font-light text-[#06BFDD] mb-6" data-aos="fade-up">Denizbank</h1>
        <div class="w-32 h-1 bg-[#06BFDD] mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
        <p class="text-gray-700 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
          Denizbank olarak 100. yılımıza girerken sürdürülebilir büyüme, dijital dönüşüm ve müşteri odaklı hizmet
          anlayışıyla geleceğe güvenle ilerliyoruz.
        </p>
      </div>
    </div>

    <!-- Messages Section -->
    <Mesajlar />

    <!-- Stats Section -->
    <OneCikanlar />

    <!-- Footer Section -->
    <FooterComponent />

    <!-- Floating Button for scrolling to top -->
    <FloatingButton />
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
  background: linear-gradient(90deg, transparent, rgba(6, 191, 221, 0.3), transparent);
}
</style>

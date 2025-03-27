<template>
  <section class="mesajlar-section py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl lg:text-4xl font-light text-[#06BFDD] mb-4">Yönetici Mesajları</h2>
        <div class="w-24 h-1 bg-[#06BFDD] mx-auto"></div>
      </div>

      <!-- Messages Cards -->
      <div class="messages-container">
        <MessageCard
          name="Hesham Abdulla Al Qassim"
          title="Yönetim Kurulu Başkanı"
          ek="'nın"
          message="İş Bankası'nın, köklerinden gelen değerleri modern gereklilikler ile birleştirmeyi başardığını ve alanında öncü kurumlar arasında kendine güçlü bir yer edindiğini görmekten büyük mutluluk duyuyoruz."
          link="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=9"
        />

        <MessageCard
          name="Recep Baştuğ"
          title="Genel Müdür"
          ek="'ün"
          message="Taşıdığımız mirasın büyüklüğünün bilinciyle ikinci yüzyılımıza hazırlanıyoruz."
          link="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=10"
        />

        <MessageCard
          name="İzlem Erdem"
          title="Sürdürülebilirlik Lideri"
          ek="'nin"
          message="İş Bankası olarak 100. yılımıza girerken, karbonsuzlaşma yolunda belirlediğimiz hedefler, Bankamızın sürdürülebilirlik stratejisinin temel unsurlarını temsil ediyor ve müşterilerimizin yeşil dönüşümünde yol gösterici bir iş ortağı olma amacımızı yansıtıyor."
          link="/ir/2023/2023TR/is_bankasi_faaliyet_raporu_web.pdf#page=15"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import MessageCard from '../MessageCard.vue';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
});
</script>

<style scoped>
.mesajlar-section {
  position: relative;
  overflow: hidden;
}

.mesajlar-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/ir/2023/2023TR/bg-pattern.png');
  background-size: 200px;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}

.messages-container {
  position: relative;
  z-index: 1;
}
</style>

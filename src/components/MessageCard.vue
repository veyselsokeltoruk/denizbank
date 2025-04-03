<template>
  <div class="message-card">
    <div class="p-6 flex-1 flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/4 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
        <div class="person-image-container">
          <img
            class="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-[#E0F7FB]"
            :src="imageUrl"
            :alt="name"
            data-aos="fade-right"
            data-aos-duration="800"
          >
        </div>
        <div class="mt-4 text-center lg:text-left">
          <h3 class="text-[#06BFDD] font-bold text-xl">{{ name }}</h3>
          <p class="text-gray-600 font-medium">{{ title }}</p>
        </div>
      </div>

      <div class="lg:w-3/4 lg:pl-8 flex flex-col">
        <h2 class="text-2xl lg:text-3xl font-light text-[#06BFDD] mb-4" data-aos="fade-up" data-aos-delay="100">
          {{ title }}{{ ek }} mesajı
        </h2>

        <div class="message-content" data-aos="fade-up" data-aos-delay="200">
          <div class="relative">
            <span class="absolute -left-6 top-0 text-[#00a6c0] text-5xl opacity-20">"</span>
            <p class="text-gray-700 font-medium text-lg leading-relaxed mb-6 italic">
              {{ message }}
            </p>
            <span class="absolute -bottom-6 right-0 text-[#06BFDD] text-5xl opacity-20">"</span>
          </div>
        </div>

        <div class="mt-4" data-aos="fade-up" data-aos-delay="300">
          <a
            :href="link"
            target="_blank"
            class="inline-flex items-center bg-[#cff8ff] px-5 py-3 rounded-lg hover:bg-[#06BFDD] transition duration-300 group"
          >
            <span class="text-[#06BFDD] font-semibold group-hover:text-white">Devamını Okumak İçin</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-[#06BFDD] group-hover:text-white transition-all transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="border-b border-[#06BFDD] opacity-30 my-4"></div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  props: {
    name: String,
    title: String,
    message: String,
    ek: String,
    link: String
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true
    });
  },
  computed: {
    imageUrl() {
      return `/denizefr24/yoneticiler/${this.name.replace(/İ/g, 'i').toLowerCase().replace(/\s+/g, '-')}.png`;
    }
  }
};
</script>

<style scoped>
.message-card {
  position: relative;
  overflow: hidden;
}

.message-card:hover .person-image-container img {
  transform: scale(1.05);
}

.person-image-container img {
  transition: transform 0.5s ease;
}
.person-image-container img {
  object-position: top;
}
.message-content {
  position: relative;
  padding: 1rem 1.5rem;
  background-color: rgba(178, 243, 255, 0.2);
  border-radius: 0.5rem;
}
</style>

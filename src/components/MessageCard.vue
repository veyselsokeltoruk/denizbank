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
            @error="handleImageError"
          >
        </div>
        <div class="mt-4 text-center lg:text-left">
          <h3 class="text-[#072CAD] font-bold text-xl">{{ name }}</h3>
          <p class="text-gray-600 font-medium">{{ title }}</p>
        </div>
      </div>

      <div class="lg:w-3/4 lg:pl-8 flex flex-col">
        <h2 class="text-2xl lg:text-3xl font-light text-[#072CAD] mb-4" data-aos="fade-up" data-aos-delay="100">
          {{ title }}{{ ek }} mesajı
        </h2>

        <div class="message-content" data-aos="fade-up" data-aos-delay="200">
          <div class="relative">
            <span class="absolute -left-6 top-0 text-[#072CAD] text-5xl opacity-20">"</span>
            <p class="text-gray-700 font-medium text-lg leading-relaxed mb-6 italic">
              {{ message }}
            </p>
            <span class="absolute -bottom-6 right-0 text-[#072CAD] text-5xl opacity-20">"</span>
          </div>
        </div>

        <div class="mt-4" data-aos="fade-up" data-aos-delay="300">
          <a
            :href="link"
            target="_blank"
            class="inline-flex items-center bg-[#E0F7FB] px-5 py-3 rounded-lg hover:bg-[#072CAD] transition duration-300 group"
          >
            <span class="text-[#072CAD] font-semibold group-hover:text-white">Devamını Okumak İçin</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-[#072CAD] group-hover:text-white transition-all transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="border-b border-[#072CAD] opacity-30 my-4"></div>
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
  data() {
    return {
      imageLoadError: false
    }
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true
    });
  },
  computed: {
    imageUrl() {
      if (this.imageLoadError) {
        return '/ir/2023/2023TR/default-profile.png'; // Yedek resim
      }

      // Türkçe karakterleri düzeltme
      const normalized = this.name
        .replace(/İ/g, 'i')
        .replace(/I/g, 'i')
        .replace(/Ş/g, 's')
        .replace(/Ğ/g, 'g')
        .replace(/Ü/g, 'u')
        .replace(/Ö/g, 'o')
        .replace(/Ç/g, 'c')
        .toLowerCase()
        .replace(/\s+/g, '-');

      return `/ir/2023/2023TR/yoneticiler/${normalized}.png`;
    }
  },
  methods: {
    handleImageError(e) {
      console.error(`Resim yüklenemedi: ${this.imageUrl}`);
      this.imageLoadError = true;
      // Alternatif çözüm: default bir resim göster ya da sadece isimleri kullan
      e.target.src = '/ir/2023/2023TR/default-profile.png'; // varsayılan resim
    }
  }
};
</script>

<style scoped>
.message-card {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(7, 44, 173, 0.1);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.message-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(7, 44, 173, 0.15);
}

.message-card:hover .person-image-container img {
  transform: scale(1.05);
}

.person-image-container img {
  transition: transform 0.5s ease;
  object-position: top;
}

.message-content {
  position: relative;
  padding: 1rem 1.5rem;
  background-color: rgba(224, 247, 251, 0.3);
  border-radius: 0.5rem;
  border-left: 3px solid #072CAD;
}

/* DegerYaratmaView sayfasındaki stile benzer ek stiller */
h2, h3 {
  color: #072CAD;
}

a:hover {
  text-decoration: none;
}
</style>

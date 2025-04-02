<template>
  <div class="flex flex-col items-center my-9 overflow-hidden">
    <!-- Başlık alanı - Diğer komponentlerle uyumlu tasarım -->
    <div class="bg-[#072CAD] w-full py-6">
      <p class="text-white text-md sm:text-2xl font-bold text-center max-w-[1024px] mx-auto px-4">
        İkinci Yüzyılımıza Hazırlanırken, Daha Sürdürülebilir ve Kapsayıcı Bir Gelecek İçin Taahhütlerimiz
      </p>
    </div>

    <div class="w-full bg-[#072CAD] text-white">
      <div class="max-w-[1024px] mx-auto px-3 lg:px-0 py-8 relative">
        <!-- Arkaplan illustrasyonu - Mobilde göster -->
        <img class="absolute right-0 mt-64 sm:hidden opacity-20 z-0" src="/illustrasyon.webp" alt="">

        <!-- Üst Taahhütler - 3 Kartta Gösterim -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light mb-2">
              Net-Sıfır Bankacılık Birliği taahhütlerimiz kapsamında, 2050 yılına kadar kredi portföyümüzü bilim temelli olarak,
            </p>
            <p class="text-white text-lg md:text-xl font-bold">
              net sıfır emisyon hedefleriyle uyumlu hale getirmek
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light mb-2">
              Kredilerden kaynaklanan emisyonlarımızı azaltmak için karbon yoğun sektörlerden başlayarak
            </p>
            <p class="text-white text-lg md:text-xl font-bold">
              sektörel karbonsuzlaşma rotalarını oluşturmak
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              Karbon yoğun sektörlerden;
            </p>
            <p class="text-white text-lg md:text-xl font-bold">
              enerji üretimi, demir-çelik ve çimento sektörlerindeki emisyon azaltımına ilişkin
            </p>
            <p class="text-white/80 text-sm md:text-base font-light">
              2030 yılı hedeflerimizi kamuoyu ile paylaştık.
            </p>
          </div>
        </div>

        <!-- Orta Bölüm - Daire ve Yanındaki Taahhütler -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 relative z-10">
          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 md:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2028 yılına kadar
            </p>
            <p class="text-white text-lg md:text-xl font-bold">
              100 milyar TL
            </p>
            <p class="text-white/80 text-sm md:text-base font-light">
              kadın işletmeci finansmanı
            </p>
          </div>

          <!-- Merkez Daire - Ortak tasarıma uygun modernize edildi -->
          <div class="relative w-48 h-48 md:w-72 md:h-72 flex-shrink-0 my-4 md:my-0"
               data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <div class="absolute inset-0 rounded-full bg-white shadow-xl p-2 flex items-center justify-center">
              <div class="absolute inset-2 rounded-full bg-[#1e81b0] flex items-center justify-center">
                <div class="absolute inset-2 rounded-full bg-white shadow-inner flex flex-col items-center justify-center p-4 text-center">
                  <p class="text-[#072CAD] text-xl md:text-2xl font-light">2050</p>
                  <p class="text-[#072CAD] text-xl md:text-2xl font-light">yılına kadar</p>
                  <p class="text-[#072CAD] text-xl md:text-2xl font-bold">Net-Sıfır</p>
                  <p class="text-[#072CAD] text-xl md:text-2xl font-bold">Bankacılık</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 md:w-1/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2026 yılına kadar
            </p>
            <p class="text-white text-lg md:text-xl font-bold">
              300 milyar TL
            </p>
            <p class="text-white/80 text-sm md:text-base font-light">
              sürdürülebilir kredi
            </p>
          </div>
        </div>

        <!-- Alt Taahhütler - 5 Kartta Gösterim -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 relative z-10">
          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2040 yılına kadar kömür ve kömürle ilişkili olarak tanımlanan faaliyet alanlarının finansmanından çıkış
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2030'a kadar tüm İş Bankası temas noktalarını engelli dostu haline getirmek
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2030'da kağıtsız operasyonlar yürütmek
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              Tasarruf bilincini pekiştiren ürünlerin sayısını ve bilinirliğini artırmak
            </p>
          </div>

          <div class="bg-[#072CAD] border border-white/20 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <div class="border-b border-white/50 mb-6"></div>
            <p class="text-white/80 text-sm md:text-base font-light">
              2030'a kadar dijital bankacılık kanallarını kullanan müşteri sayısını 20 milyonun üzerine çıkarmak
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Alt çizgi -->
    <div class="border-b border-[#072CAD] w-full"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // AOS kütüphanesini başlat (eğer dışarıda başlatılmamışsa)
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
</script>

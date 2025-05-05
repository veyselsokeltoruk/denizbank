<template>
  <div class="font-sans bg-gradient-to-b from-[#0a1e57] to-[#16317f] overflow-hidden relative mt-24">
    <!-- Dekoratif arka plan elementleri -->
    <div class="absolute top-0 right-0 w-full h-full overflow-hidden">
      <div class="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#b81c3c] opacity-10"></div>
      <div class="absolute bottom-60 left-20 w-96 h-96 rounded-full bg-[#b81c3c] opacity-5"></div>
      <div class="absolute top-20 left-40 w-32 h-32 rounded-full bg-white opacity-5"></div>
    </div>

    <!-- Üst Başlık Alanı - Denizbank Stili -->
    <div class="relative z-10 border-b border-white/10">
      <div class="max-w-6xl mx-auto px-4 py-10">
        <div class="bg-[#b81c3c]/10 backdrop-blur-sm border border-[#b81c3c]/20 rounded-xl p-6 md:p-8">
          <h1 class="text-white text-2xl md:text-4xl font-bold text-center mb-4">
            İkinci Yüzyılımıza Hazırlanırken, Daha Sürdürülebilir ve Kapsayıcı Bir Gelecek İçin Taahhütlerimiz
          </h1>
          <div class="w-32 h-1 bg-[#b81c3c] mx-auto rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Ana İçerik Bölümü -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 py-12">
      <!-- Net Sıfır Bankacılık Merkez Bölümü -->
      <div class="flex flex-col items-center mb-16">
        <div class="w-full max-w-xl perspective-1000">
          <div class="bg-gradient-to-br from-[#16317f] to-[#0a1e57] border border-white/20 rounded-2xl shadow-2xl p-8 transform hover:rotate-y-3 transition-all duration-700 relative overflow-hidden">
            <!-- Dekoratif arka plan -->
            <div class="absolute inset-0">
              <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#b81c3c] blur-3xl opacity-10"></div>
              <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b81c3c] blur-3xl opacity-10"></div>
            </div>
            <!-- Sınırlayıcı çizgiler -->
            <div class="absolute top-4 left-4 right-4 bottom-4 border border-white/10 rounded-xl pointer-events-none"></div>

            <div class="relative flex flex-col items-center">
              <!-- 2050 Net Sıfır Hedef -->
              <div class="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white p-1 shadow-xl mb-6 relative">
                <div class="absolute inset-2 rounded-full border-4 border-[#b81c3c]/30 animate-pulse"></div>
                <div class="w-full h-full rounded-full bg-gradient-to-br from-[#b81c3c] to-[#ef334a] p-1 flex items-center justify-center">
                  <div class="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 text-center">
                    <p class="text-[#16317f] text-lg md:text-xl font-light">2050</p>
                    <p class="text-[#16317f] text-lg md:text-xl font-light">yılına kadar</p>
                    <p class="text-[#16317f] text-lg md:text-xl font-bold">Net-Sıfır</p>
                    <p class="text-[#16317f] text-lg md:text-xl font-bold">Bankacılık</p>
                  </div>
                </div>
              </div>

              <h2 class="text-white text-xl md:text-2xl font-bold text-center mb-4">
                Sürdürülebilir Bankacılık Taahhütlerimiz
              </h2>
              <p class="text-white/80 text-center mb-6">
                2050 yılına kadar Net Sıfır Emisyon hedefimize ulaşmak için attığımız adımlar
              </p>

              <!-- İki Finansman Hedefi -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
                  <div class="text-[#b81c3c] text-3xl md:text-4xl font-bold mb-2">100</div>
                  <div class="text-white text-lg font-bold mb-1">milyar TL</div>
                  <div class="text-white/70 text-sm">2028 yılına kadar kadın işletmeci finansmanı</div>
                </div>
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
                  <div class="text-[#b81c3c] text-3xl md:text-4xl font-bold mb-2">300</div>
                  <div class="text-white text-lg font-bold mb-1">milyar TL</div>
                  <div class="text-white/70 text-sm">2026 yılına kadar sürdürülebilir kredi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Taahhütler Bölümü - Yatay Stil -->
      <div class="mb-16">
        <div class="border-l-4 border-[#b81c3c] pl-4 mb-8">
          <h2 class="text-white text-2xl font-bold">Ana Taahhütlerimiz</h2>
        </div>

        <div class="grid grid-cols-1 gap-8 md:gap-12">
          <!-- Taahhüt 1 -->
          <div class="bg-gradient-to-r from-[#0a1e57] to-[#16317f] border border-white/10 rounded-xl shadow-xl overflow-hidden transform transition-all hover:translate-x-2 group">
            <div class="flex flex-col md:flex-row">
              <div class="bg-[#b81c3c] w-full md:w-3 flex-shrink-0 md:h-auto h-2 group-hover:bg-[#ef334a] transition-all"></div>
              <div class="p-6 md:p-8 w-full">
                <div class="border-b border-white/20 mb-4 pb-4 group-hover:border-white/40 transition-all">
                  <div class="bg-white/10 rounded-full px-4 py-1 inline-block text-white/80 text-sm mb-3">Taahhüt 1</div>
                  <h3 class="text-white text-xl md:text-2xl font-bold">Net Sıfır Emisyon Hedefi</h3>
                </div>
                <p class="text-white/80 text-sm md:text-base font-light mb-2">
                  Net-Sıfır Bankacılık Birliği taahhütlerimiz kapsamında, 2050 yılına kadar kredi portföyümüzü bilim temelli olarak,
                </p>
                <p class="text-white text-lg md:text-xl font-bold">
                  net sıfır emisyon hedefleriyle uyumlu hale getirmek
                </p>
              </div>
            </div>
          </div>

          <!-- Taahhüt 2 -->
          <div class="bg-gradient-to-r from-[#0a1e57] to-[#16317f] border border-white/10 rounded-xl shadow-xl overflow-hidden transform transition-all hover:translate-x-2 group">
            <div class="flex flex-col md:flex-row">
              <div class="bg-[#b81c3c] w-full md:w-3 flex-shrink-0 md:h-auto h-2 group-hover:bg-[#ef334a] transition-all"></div>
              <div class="p-6 md:p-8 w-full">
                <div class="border-b border-white/20 mb-4 pb-4 group-hover:border-white/40 transition-all">
                  <div class="bg-white/10 rounded-full px-4 py-1 inline-block text-white/80 text-sm mb-3">Taahhüt 2</div>
                  <h3 class="text-white text-xl md:text-2xl font-bold">Sektörel Karbonsuzlaşma</h3>
                </div>
                <p class="text-white/80 text-sm md:text-base font-light mb-2">
                  Kredilerden kaynaklanan emisyonlarımızı azaltmak için karbon yoğun sektörlerden başlayarak
                </p>
                <p class="text-white text-lg md:text-xl font-bold">
                  sektörel karbonsuzlaşma rotalarını oluşturmak
                </p>
              </div>
            </div>
          </div>

          <!-- Taahhüt 3 -->
          <div class="bg-gradient-to-r from-[#0a1e57] to-[#16317f] border border-white/10 rounded-xl shadow-xl overflow-hidden transform transition-all hover:translate-x-2 group">
            <div class="flex flex-col md:flex-row">
              <div class="bg-[#b81c3c] w-full md:w-3 flex-shrink-0 md:h-auto h-2 group-hover:bg-[#ef334a] transition-all"></div>
              <div class="p-6 md:p-8 w-full">
                <div class="border-b border-white/20 mb-4 pb-4 group-hover:border-white/40 transition-all">
                  <div class="bg-white/10 rounded-full px-4 py-1 inline-block text-white/80 text-sm mb-3">Taahhüt 3</div>
                  <h3 class="text-white text-xl md:text-2xl font-bold">Sektörel Emisyon Azaltımı</h3>
                </div>
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
          </div>
        </div>
      </div>

      <!-- Alt Taahhütler - Zaman Çizgisi Stili -->
      <div class="mb-16">
        <div class="border-l-4 border-[#b81c3c] pl-4 mb-8">
          <h2 class="text-white text-2xl font-bold">Zaman Planımız</h2>
        </div>

        <div class="bg-gradient-to-br from-[#0a1e57] to-[#16317f] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
          <!-- Dekoratif arka plan -->
          <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#b81c3c] blur-3xl opacity-5"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#b81c3c] blur-3xl opacity-5"></div>

          <!-- Zaman Çizelgesi -->
          <div class="relative pl-4 md:pl-0">
            <!-- Zaman çizgisi çizgisi - Mobilde -->
            <div class="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-[#b81c3c] via-white to-white/50 md:hidden"></div>

            <!-- Zaman kutuları -->
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-6 md:space-y-0">
              <!-- 2030 - Engelli Dostu -->
              <div class="relative md:border-t-2 border-[#b81c3c]/50 pt-0 md:pt-6 pl-8 md:pl-0">
                <!-- Mobil nokta -->
                <div class="absolute left-0 top-0 w-4 h-4 bg-[#b81c3c] rounded-full md:hidden flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <!-- Tarih işaretçisi -->
                <div class="hidden md:block absolute top-0 left-0 -translate-y-1/2 text-center w-full">
                  <div class="inline-block bg-[#b81c3c] text-white px-3 py-1 rounded-full text-sm font-bold">2030</div>
                </div>
                <!-- İçerik kutusu -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-white/20">
                  <div class="text-white font-bold mb-2 md:hidden">2030</div>
                  <p class="text-white/80 text-sm md:text-base">
                    2030'a kadar tüm İş Bankası temas noktalarını engelli dostu haline getirmek
                  </p>
                </div>
              </div>

              <!-- 2030 - Kağıtsız Operasyonlar -->
              <div class="relative md:border-t-2 border-[#b81c3c]/50 pt-0 md:pt-6 pl-8 md:pl-0">
                <!-- Mobil nokta -->
                <div class="absolute left-0 top-0 w-4 h-4 bg-[#b81c3c] rounded-full md:hidden flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <!-- Tarih işaretçisi -->
                <div class="hidden md:block absolute top-0 left-0 -translate-y-1/2 text-center w-full">
                  <div class="inline-block bg-[#b81c3c] text-white px-3 py-1 rounded-full text-sm font-bold">2030</div>
                </div>
                <!-- İçerik kutusu -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-white/20">
                  <div class="text-white font-bold mb-2 md:hidden">2030</div>
                  <p class="text-white/80 text-sm md:text-base">
                    2030'da kağıtsız operasyonlar yürütmek
                  </p>
                </div>
              </div>

              <!-- Tasarruf Bilinci -->
              <div class="relative md:border-t-2 border-[#b81c3c]/50 pt-0 md:pt-6 pl-8 md:pl-0">
                <!-- Mobil nokta -->
                <div class="absolute left-0 top-0 w-4 h-4 bg-[#b81c3c] rounded-full md:hidden flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <!-- Tarih işaretçisi -->
                <div class="hidden md:block absolute top-0 left-0 -translate-y-1/2 text-center w-full">
                  <div class="inline-block bg-[#b81c3c] text-white px-3 py-1 rounded-full text-sm font-bold">Sürekli</div>
                </div>
                <!-- İçerik kutusu -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-white/20">
                  <div class="text-white font-bold mb-2 md:hidden">Sürekli</div>
                  <p class="text-white/80 text-sm md:text-base">
                    Tasarruf bilincini pekiştiren ürünlerin sayısını ve bilinirliğini artırmak
                  </p>
                </div>
              </div>

              <!-- 2030 - Dijital Bankacılık -->
              <div class="relative md:border-t-2 border-[#b81c3c]/50 pt-0 md:pt-6 pl-8 md:pl-0">
                <!-- Mobil nokta -->
                <div class="absolute left-0 top-0 w-4 h-4 bg-[#b81c3c] rounded-full md:hidden flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <!-- Tarih işaretçisi -->
                <div class="hidden md:block absolute top-0 left-0 -translate-y-1/2 text-center w-full">
                  <div class="inline-block bg-[#b81c3c] text-white px-3 py-1 rounded-full text-sm font-bold">2030</div>
                </div>
                <!-- İçerik kutusu -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-white/20">
                  <div class="text-white font-bold mb-2 md:hidden">2030</div>
                  <p class="text-white/80 text-sm md:text-base">
                    2030'a kadar dijital bankacılık kanallarını kullanan müşteri sayısını 20 milyonun üzerine çıkarmak
                  </p>
                </div>
              </div>

              <!-- 2040 - Kömür -->
              <div class="relative md:border-t-2 border-[#b81c3c]/50 pt-0 md:pt-6 pl-8 md:pl-0">
                <!-- Mobil nokta -->
                <div class="absolute left-0 top-0 w-4 h-4 bg-[#b81c3c] rounded-full md:hidden flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <!-- Tarih işaretçisi -->
                <div class="hidden md:block absolute top-0 left-0 -translate-y-1/2 text-center w-full">
                  <div class="inline-block bg-[#b81c3c] text-white px-3 py-1 rounded-full text-sm font-bold">2040</div>
                </div>
                <!-- İçerik kutusu -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-white/20">
                  <div class="text-white font-bold mb-2 md:hidden">2040</div>
                  <p class="text-white/80 text-sm md:text-base">
                    2040 yılına kadar kömür ve kömürle ilişkili olarak tanımlanan faaliyet alanlarının finansmanından çıkış
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alt CTA Bölümü -->
      <!-- <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#" class="w-full sm:w-auto bg-white text-[#16317f] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-center">
          Detaylı Bilgi
        </a>
        <a href="#" class="w-full sm:w-auto bg-[#b81c3c] text-white hover:bg-[#a01834] px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-center">
          Sürdürülebilirlik Raporumuz
        </a>
      </div> -->
    </div>
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

<style>
/* Özel animasyonlar ve 3D efektler için */
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-3 {
  transform: rotateY(3deg);
}
.hover\:rotate-y-3:hover {
  transform: rotateY(3deg);
}
</style>

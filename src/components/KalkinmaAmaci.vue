<template>
  <div class="bg-gradient-to-br from-white to-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

      <!-- Üst Çatı: Vizyon -->
      <div class="text-center space-y-2">
        <h2 class="text-lg font-semibold text-[#072CAD] tracking-wider uppercase">İLERİSİ İÇİN</h2>
        <p class="text-xl sm:text-2xl font-bold text-gray-700">Yenilikçi Finansman ile Sürdürülebilirlik Dönüşümünde Kolaylaştırıcı Olmak</p>
      </div>

      <!-- Değer Alanları Başlığı -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058]">
          Değer Alanları
        </h3>
        <div class="w-16 h-1 mt-2 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto"></div>
      </div>

      <!-- 3 Ana Blok -->
      <div class="gap-8 justify-item-center">
            <!-- Ana Kategoriler -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Yeni Nesil Bankacılık -->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Yeni Nesil Bankacılık</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in financialActor" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#072CAD] mb-3">{{ item.title }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sürdürülebilir Finansman-->
        <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Sürdürülebilir Finansman</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in responsibleOps" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#072CAD] mb-3">{{ item.title }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

                <!-- Geleceğin Yeteneği -->
                <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Geleceğin Yeteneği</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-4">
                <li v-for="(item, index) in corporateCitizen" :key="index" class="bg-gray-50 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md">
                  <div class="flex flex-col">
                    <span class="font-medium text-[#072CAD] mb-3">{{ item.title }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>

      <!-- Kurumsal Temeller -->

      <div class="group relative transition-all duration-300 hover:-translate-y-2">
          <div class="absolute inset-0 bg-black rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
          <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 ">

        <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r text-white text-center">
          Kurumsal Temeller
        </h3>
        <div class="w-16 h-1 mt-2 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto"></div>
      </div>

            </div>
            <div class="bg-gray-100 rounded-xl px-6 py-4 text-sm text-gray-600 text-center">
        Veri Gizliliği ve Güvenliği • Yönetişim, Uyum ve Etik • Sistematik Risk Yönetimi
      </div>
          
        </div>

      <!-- Alt Hedef: Düşük Karbon -->

        <div class="group relative transition-all duration-300 hover:-translate-y-2">
            <div class="absolute inset-0 bg-black rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
            <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 ">

          <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r text-white text-center">
            Düşük Karbon Ekonomisine Geçiş
          </h3>
          <div class="w-16 h-1 mt-2 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto"></div>
        </div>

              </div>
              <div class="bg-gray-100 rounded-xl px-6 py-4 text-sm text-gray-600 text-center">
          İklim
        </div>
          
        </div>

              <div class="group relative transition-all duration-300 hover:-translate-y-2">
                  <div class="absolute inset-0 bg-black rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                  <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 ">

                <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r text-white text-center">
                  Değer Alanlarımız
                </h3>
                <div class="w-16 h-1 mt-2 bg-gradient-to-r text-white mx-auto"></div>
                </div>
                </div>
              </div>

              <div class="group relative transition-all duration-300 hover:-translate-y-2">
                  <div class="absolute inset-0 bg-black rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                  <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 ">

                <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r text-white text-center">
                  Katkı Sağladığımız Sürdürülebilir Kalkınma Amaçları
                </h3>
                <div class="w-16 h-1 mt-2 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto"></div>
                </div>
                </div>
              </div>

              <!-- Değer Alanları Başlığı -->
                <div class="text-center">
                  <h3 class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058]">
                    Sürdürülebilirlik Hedeflerimiz
                  </h3>
                  <div class="w-16 h-1 mt-2 bg-gradient-to-r from-[#072CAD] via-[#52C4FE] to-[#D20058] mx-auto"></div>
                </div>

                <!-- 3 Ana Blok -->
                <div class="gap-8 justify-item-center">
                      <!-- Ana Kategoriler -->
                      <div class="grid grid-cols-5 gap-6 mb-12">
                  <!-- Yeni Nesil Bankacılık -->
                  <div class="group relative transition-all duration-300 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
                        <h2 class="text-white text-xl font-bold">-</h2>
                        <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <ul class="space-y-4 text-black">
                          <li>2030'a kadar ENBD grup geneli kullandırılacak 30 milyar USD'lik kaynak İçerisinde DFHG payının artırılması</li>
                          <li>Sürdürülebilir Finans (2025-30) Eylem Planı Oluşturulması</li>
                          <li>Yeşil Portföy Hacmi Genişletilmesine</li>
                          <li>Global ve Yerel İyi Uygulamalara hizalı İnovatif Finansal Ürünler ile Sektörel Emisyon Yoğunluklarının Azaltılmasına yönelik aksiyonları İçerecek şekilde hazırlanılması
                          </li>
                          <li>Yeşil ve Sosyal Varlıkların sistemsel olarak takip edilmesi</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Sürdürülebilir Finansman-->
                  <div class="group relative transition-all duration-300 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
                        <h2 class="text-white text-xl font-bold">-</h2>
                        <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <ul class="space-y-4 text-black">
                          <li>ENBD grup net-sıfır taahhütleri ve Türkiye NDC'si ile hizalı Karbonsuzlaşma Stratejisi'nin tamamlanması</li>
                          <li>DFHG seviyesindeki operasyonel emisyon hesabının dijital altyapı sistemlerine aktarılması ve paralelde veri optimizasyonu ile hesap kalitesinin arttırılması</li>
                          <li>İklim Riskleri ve Fırsatlarının Kurumsal Risk Yönetimi sistemi içerisine entegrasyonunun tamanlanması</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                          <!-- Geleceğin Yeteneği -->
                          <div class="group relative transition-all duration-300 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
                        <h2 class="text-white text-xl font-bold">-</h2>
                        <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <ul class="space-y-4 text-black">
                          <li>DFHG TSRS raporunun yayınlanması</li>
                          <li>Sürdürülebilirlik politikaların DFHG geneline yaygınlaştırılması</li>
                          <li>Denizbank AS Sürdürülebilirlik Stratejisinin DFHG seviyesine yaygınlaştıniması ve DFHG is Stratejisi ile entegrasyonunun sağlanması</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="group relative transition-all duration-300 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
                        <h2 class="text-white text-xl font-bold">-</h2>
                        <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <ul class="space-y-4 text-black">
                          <li>Dijital penetrasyon oranını yükseltmek<br>
                            Müşteri deneyimini iyileştirmek ve memnuniyeti arttırmak adına müşteri ihtiyaçlarına cevap verebilecek yenilikçi dijital ürünler geliştirilmesi </li></ul>
                      </div>
                    </div>
                  </div>
                  <div class="group relative transition-all duration-300 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-[#072CAD] rounded-2xl transform rotate-1 opacity-20 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"></div>
                    <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div class="bg-gradient-to-r from-[#072CAD] to-[#06BFDD] p-4 flex items-center justify-between">
                        <h2 class="text-white text-xl font-bold">-</h2>
                        <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#D20058]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <ul class="space-y-4 text-black">
                          <li>Kadın Liderlik ve Gelişim programının uygulanması</li>
                          <li>İç ve Dış Paydaşların ÇSY bağlamındaki kapasitesini artıracak eğitim programlarının tasarlanması ve uygulanması</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
              </div>
            </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTooltip = ref(null);

// SDG Tooltip fonksiyonları
const showTooltip = (goal) => {
  activeTooltip.value = goal;
};

const hideTooltip = () => {
  activeTooltip.value = null;
};

// SDG logo yolunu alma fonksiyonu
const getSdgImagePath = (number) => {
  return `/denizefr24/${number}.png`;
};

// SDG Tanımları
const sdgDefinitions = [
  { number: 4, title: 'Nitelikli Eğitim' },
  { number: 5, title: 'Toplumsal Cinsiyet Eşitliği' },
  { number: 7, title: 'Erişilebilir ve Temiz Enerji' },
  { number: 8, title: 'İnsana Yakışır İş ve Ekonomik Büyüme' },
  { number: 9, title: 'Sanayi, Yenilikçilik ve Altyapı' },
  { number: 10, title: 'Eşitsizliklerin Azaltılması' },
  { number: 16, title: 'Barış, Adalet ve Güçlü Kurumlar' },
  { number: 17, title: 'Amaçlar İçin Ortaklıklar' },
];

// SDG için başlık getir
const getSdgTitle = (number) => {
  const definition = sdgDefinitions.find(d => d.number === number);
  return definition ? definition.title : `SDG ${number}`;
};

// Tüm kategorileri içeren veri
const financialActor = [
  { title: 'Müşteri Yolculuğu ve Deneyimi', goals: [8, 10, 16] },
  { title: 'Dijitalleşme ve İnovasyon', goals: [8, 9] },
  { title: 'Ekosistem Bankacılığı', goals: [8, 10] },
];

const responsibleOps = [
  { title: 'Çevresel Etki Finansmanı', goals: [4] },
  { title: 'Sorumlu Hizmetler ve Ürünler', goals: [8, 16] },
  { title: 'Finansal Hizmetlere Erişim', goals: [4, 5, 8, 10] },
];

const corporateCitizen = [
  { title: 'Yetenek Çekme ve Elde Tutma', goals: [4, 8, 10] },
  { title: 'Çeşitlilik ve Kapsayıcılık', goals: [8] },
  { title: 'Çalışan Deneyimi', goals: [8, 16, 17] }
];
</script>

<style scoped>
.sdg-badge {
  transition: all 0.3s ease;
}

.sdg-badge:hover {
  transform: scale(1.2);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>

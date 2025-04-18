<template>
  <div class="bg-gradient-to-br from-blue-50 to-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Başlık Alanı -->
      <div class="mb-16 text-center space-y-4">
        <h2 class="text-sm font-bold text-blue-800 tracking-widest uppercase">İLERİSİ İÇİN</h2>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600">
          Yenilikçi Finansman ile Sürdürülebilirlik Dönüşümünde Kolaylaştırıcı Olmak
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 mx-auto mt-6"></div>
      </div>

      <!-- Değer Alanları Başlığı -->
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600">
          Değer Alanları
        </h3>
        <div class="w-20 h-1 mt-3 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 mx-auto"></div>
      </div>

      <!-- Ana Kategoriler -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <!-- Yeni Nesil Bankacılık -->
        <div class="group transition-all duration-500 hover:-translate-y-3">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-900 to-blue-700 p-5">
              <div class="flex items-center justify-between">
                <h2 class="text-white text-2xl font-bold">Yeni Nesil Bankacılık</h2>
                <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-5">
                <li v-for="(item, index) in financialActor" :key="index" class="bg-blue-50 rounded-2xl p-5 transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-blue-100">
                  <div class="flex flex-col">
                    <span class="font-medium text-blue-800 text-lg mb-4">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-3">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden shadow-md"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-16 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs rounded-lg py-2 px-3 min-w-[200px] text-center shadow-xl">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sürdürülebilir Finansman -->
        <div class="group transition-all duration-500 hover:-translate-y-3">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-500 to-blue-400 p-5">
              <div class="flex items-center justify-between">
                <h2 class="text-white text-2xl font-bold">Sürdürülebilir Finansman</h2>
                <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-5">
                <li v-for="(item, index) in responsibleOps" :key="index" class="bg-blue-50 rounded-2xl p-5 transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-blue-100">
                  <div class="flex flex-col">
                    <span class="font-medium text-blue-500 text-lg mb-4">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-3">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden shadow-md"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-16 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs rounded-lg py-2 px-3 min-w-[200px] text-center shadow-xl">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Geleceğin Yeteneği -->
        <div class="group transition-all duration-500 hover:-translate-y-3">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-pink-600 to-pink-500 p-5">
              <div class="flex items-center justify-between">
                <h2 class="text-white text-2xl font-bold">Geleceğin Yeteneği</h2>
                <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-5">
                <li v-for="(item, index) in corporateCitizen" :key="index" class="bg-blue-50 rounded-2xl p-5 transform transition-all duration-300 hover:scale-102 hover:shadow-lg border border-blue-100">
                  <div class="flex flex-col">
                    <span class="font-medium text-pink-600 text-lg mb-4">{{ item.title }}</span>
                    <div class="flex flex-wrap gap-3">
                      <div v-for="goal in item.goals" :key="goal"
                          class="sdg-badge relative w-14 h-14 flex items-center justify-center rounded-lg overflow-hidden shadow-md"
                          @mouseenter="showTooltip(goal)"
                          @mouseleave="hideTooltip">
                        <img :src="getSdgImagePath(goal)" :alt="`SDG ${goal}`" class="w-full h-full object-contain" />
                        <div v-if="activeTooltip === goal" class="absolute z-10 -top-16 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs rounded-lg py-2 px-3 min-w-[200px] text-center shadow-xl">
                          {{ getSdgTitle(goal) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Kurumsal Temeller -->
      <div class="group transition-all duration-500 hover:-translate-y-2 mt-12">
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div class="bg-gradient-to-r from-blue-800 to-blue-500 p-6">
            <h3 class="text-2xl font-bold text-white text-center">
              Kurumsal Temeller
            </h3>
            <div class="w-20 h-1 mt-3 bg-white mx-auto"></div>
          </div>
          <div class="bg-blue-50 rounded-2xl px-8 py-5 text-base text-blue-800 text-center font-medium m-4">
            Veri Gizliliği ve Güvenliği • Yönetişim, Uyum ve Etik • Sistematik Risk Yönetimi
          </div>
        </div>
      </div>

      <!-- Alt Hedef: Düşük Karbon -->
      <div class="group transition-all duration-500 hover:-translate-y-2 mt-10">
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div class="bg-gradient-to-r from-blue-800 to-blue-500 p-6">
            <h3 class="text-2xl font-bold text-white text-center">
              Düşük Karbon Ekonomisine Geçiş
            </h3>
            <div class="w-20 h-1 mt-3 bg-white mx-auto"></div>
          </div>
          <div class="bg-blue-50 rounded-2xl px-8 py-5 text-base text-blue-800 text-center font-medium m-4">
            İklim
          </div>
        </div>
      </div>

      <!-- Değer Alanlarımız -->
      <div class="group transition-all duration-500 hover:-translate-y-2 mt-10">
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div class="bg-gradient-to-r from-blue-800 to-blue-500 p-6">
            <h3 class="text-2xl font-bold text-white text-center">
              Değer Alanlarımız
            </h3>
            <div class="w-20 h-1 mt-3 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      <!-- Katkı Sağladığımız Sürdürülebilir Kalkınma Amaçları -->
      <div class="group transition-all duration-500 hover:-translate-y-2 mt-10">
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          <div class="bg-gradient-to-r from-blue-800 to-blue-500 p-6">
            <h3 class="text-2xl font-bold text-white text-center">
              Katkı Sağladığımız Sürdürülebilir Kalkınma Amaçları
            </h3>
            <div class="w-20 h-1 mt-3 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      <!-- Sürdürülebilirlik Hedeflerimiz -->
      <div class="text-center mt-20 mb-12">
        <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600">
          Sürdürülebilirlik Hedeflerimiz
        </h3>
        <div class="w-20 h-1 mt-3 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 mx-auto"></div>
      </div>

      <!-- Hedefler Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 mb-16">
        <!-- Hedef 1 -->
        <div class="group transition-all duration-500 hover:-translate-y-2">

          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 p-5 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Hedef 1</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>2030'a kadar ENBD grup geneli kullandırılacak 30 milyar USD'lik kaynak İçerisinde DFHG payının artırılması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Sürdürülebilir Finans (2025-30) Eylem Planı Oluşturulması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Yeşil Portföy Hacmi Genişletilmesine</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Global ve Yerel İyi Uygulamalara hizalı İnovatif Finansal Ürünler ile Sektörel Emisyon Yoğunluklarının Azaltılmasına yönelik aksiyonları İçerecek şekilde hazırlanılması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Yeşil ve Sosyal Varlıkların sistemsel olarak takip edilmesi</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hedef 2 -->
        <div class="group transition-all duration-500 hover:-translate-y-2">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 p-5 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Hedef 2</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>ENBD grup net-sıfır taahhütleri ve Türkiye NDC'si ile hizalı Karbonsuzlaşma Stratejisi'nin tamamlanması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>DFHG seviyesindeki operasyonel emisyon hesabının dijital altyapı sistemlerine aktarılması ve paralelde veri optimizasyonu ile hesap kalitesinin arttırılması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>İklim Riskleri ve Fırsatlarının Kurumsal Risk Yönetimi sistemi içerisine entegrasyonunun tamanlanması</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hedef 3 -->
        <div class="group transition-all duration-500 hover:-translate-y-2">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 p-5 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Hedef 3</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>DFHG TSRS raporunun yayınlanması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Sürdürülebilirlik politikaların DFHG geneline yaygınlaştırılması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Denizbank AS Sürdürülebilirlik Stratejisinin DFHG seviyesine yaygınlaştıniması ve DFHG is Stratejisi ile entegrasyonunun sağlanması</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hedef 4 -->
        <div class="group transition-all duration-500 hover:-translate-y-2">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 p-5 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Hedef 4</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Dijital penetrasyon oranını yükseltmek<br>
                    Müşteri deneyimini iyileştirmek ve memnuniyeti arttırmak adına müşteri ihtiyaçlarına cevap verebilecek yenilikçi dijital ürünler geliştirilmesi</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hedef 5 -->
        <div class="group transition-all duration-500 hover:-translate-y-2">
          <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div class="bg-gradient-to-r from-blue-800 to-blue-600 p-5 flex items-center justify-between">
              <h2 class="text-white text-xl font-bold">Hedef 5</h2>
              <div class="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div class="p-5">
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>Kadın Liderlik ve Gelişim programının uygulanması</div>
                </li>
                <li class="flex items-start">
                  <div class="min-w-4 mr-2 mt-1">•</div>
                  <div>İç ve Dış Paydaşların ÇSY bağlamındaki kapasitesini artıracak eğitim programlarının tasarlanması ve uygulanması</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SDG Açıklaması ve Tanımlar -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 mt-12 border border-blue-100">
        <h2 class="text-2xl font-bold text-blue-800 mb-6 text-center">Sürdürülebilir Kalkınma Amaçları Tanımları</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(goal, index) in sdgDefinitions" :key="index"
               class="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-blue-50">
            <div class="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center mr-4 shadow-md">
              <img :src="getSdgImagePath(goal.number)" :alt="`SDG ${goal.number}`" class="w-full h-full object-contain" />
            </div>
            <div class="text-sm text-gray-700 flex-1 font-medium">{{ goal.title }}</div>
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
  { number: 13, title: 'İklim Eylemi' },
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
  { title: 'Çevresel Etki Finansmanı', goals: [7, 13] },
  { title: 'Sorumlu Hizmetler ve Ürünler', goals: [8, 16] },
  { title: 'Finansal Hizmetlere Erişim', goals: [4, 5, 8, 10] },
];

const corporateCitizen = [
  { title: 'Yetenek Çekme ve Elde Tutma', goals: [4, 8, 10] },
  { title: 'Çeşitlilik ve Kapsayıcılık', goals: [5, 10] },
  { title: 'Çalışan Deneyimi', goals: [8, 16, 17] }
];
</script>

<style scoped>
/* Özel animasyonlar ve geçişler */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Sayfa arkaplan gradyanı */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Kart gölgeleri ve hover efektleri */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}

.group:hover .shadow-2xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.2);
}

/* SDG rozet stilleştirmeleri */
.sdg-badge {
  transition: all 0.3s ease;
}

.sdg-badge:hover {
  transform: scale(1.1);
  z-index: 10;
}
</style>

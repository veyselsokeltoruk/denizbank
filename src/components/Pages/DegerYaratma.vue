<script setup>
import {
Activity,
AlertTriangle,
ArrowUp,
Brain,
Briefcase,
Check,
DollarSign,
Factory,
Leaf,
ThumbsUp,
Users
} from 'lucide-vue-next';
import { onMounted, ref, watch } from 'vue';

const seciliPencere = ref('birinci');
const isAnimating = ref(false);

// Public klasöründeki görsellere doğrudan erişim için helper fonksiyon
// Alt dizinde çalışıyor olma durumuna göre düzeltildi
const getImagePath = (name) => {
  return `/denizefr24/${name}`;
};

// Kategori bilgileri - public klasöründeki görsellere doğrudan erişim
const categories = [
  { id: 'birinci', title: 'Finansal Sermaye', icon: DollarSign, color: '#00539B', gradient: 'from-[#E5F0F9]', image: getImagePath('finansal-sermaye.webp') },
  { id: 'ikinci', title: 'İnsan Sermayesi', icon: Users, color: '#1CABE2', gradient: 'from-[#d4f1fd]', image: getImagePath('insan-sermayesi.webp') },
  { id: 'ucuncu', title: 'Sosyal Sermaye', icon: Briefcase, color: '#1CABE2', gradient: 'from-[#e6f4fa]', image: getImagePath('sosyal-sermaye.webp') },
  { id: 'dorduncu', title: 'Entelektüel Sermaye', icon: Brain, color: '#00539B', gradient: 'from-[#F4F9FD]', image: getImagePath('entelektuel-sermaye.webp') },
  { id: 'besinci', title: 'Doğal Sermaye', icon: Leaf, color: '#80C49F', gradient: 'from-[#EAF6EF]', image: getImagePath('dogal-sermaye.webp') },
  { id: 'altinci', title: 'Üretilmiş Sermaye', icon: Factory, color: '#ED6C94', gradient: 'from-[#F9F0F4]', image: getImagePath('uretilmis-sermaye.webp') },
];

// Çark görseli
const denizCarkImage = getImagePath('model-circle.png');

// SDG görselleri
const sdgImages = [4, 5, 7, 8, 9, 13].map(num => ({
  number: num,
  path: getImagePath(`${num}.png`)
}));

// İçerik verileri
const contentData = {
  'birinci': {
    color: '#00539B',
    inputs: [
      'Geniş müşteri tabanı <b>15.6 milyon</b>',
      'Güçlü sermaye yapısı',
      '<b>1.823,7 milyar TL</b> aktif büyüklüğü'
    ],
    outputs: [
      'Toplam nakdi kredi büyümesi <b>%46,8</b>',
      'Toplam mevduat <b>1.216,5 milyar TL</b>',
      'Net kâr <b>48,7 milyar TL</b>',
      'Ortalama özkaynak kârlılığı <b>%29,5</b>'
    ],
    positives: [
      'Sürdürülebilir kârlılık',
      'Sektörde lider pazar payı büyümesi'
    ],
    risks: [
      'Ekonomik dalgalanmaların finansal sermayeye etkisi',
      'Rekabet ortamındaki değişimlerin pazar payına etkisi'
    ]
  },
  'ikinci': {
    color: '#1CABE2',
    inputs: [
      '<b>12.850</b> çalışan',
      'Yenilikçi çalışan deneyimi programları',
      'Kapsayıcı işe alım ve kariyer gelişim imkanları'
    ],
    outputs: [
      'Kadın çalışan oranı <b>%55</b>',
      'Yönetimde kadın çalışan oranı <b>%42</b>',
      'Çalışan bağlılık skoru <b>%82</b>',
      'Kişi başı eğitim saati <b>42 saat</b>'
    ],
    positives: [
      'Yüksek çalışan motivasyonu',
      'Gelişmiş dijital ve sürdürülebilirlik yetkinlikleri'
    ],
    risks: [
      'Finansal sektördeki yetenek rekabeti',
      'Teknolojik dönüşümün gerektirdiği yeni beceriler'
    ]
  },
  'ucuncu': {
    color: '#1CABE2',
    inputs: [
      'Müşteri odaklı dijital dönüşüm',
      'Etkin paydaş iletişimi',
      '"Deniz" markasının güçlü değerleri',
      'Sürdürülebilirlik inisiyatifleri ve taahhütler'
    ],
    outputs: [
      'Müşteri memnuniyeti skoru <b>85/100</b>',
      'DenizBank Mobil kullanıcı sayısı <b>9.2 milyon</b>',
      'Deniz\'de Sanat Akademisi mezun sayısı <b>250+</b>',
      'Fastpay kullanıcı sayısı <b>6.5 milyon</b>'
    ],
    positives: [
      'Artan müşteri sadakati',
      'Toplumda olumlu marka algısı'
    ],
    risks: [
      'Müşteri beklentilerindeki hızlı değişim',
      'Finansal hizmetlerde artan rekabet'
    ]
  },
  'dorduncu': {
    color: '#00539B',
    inputs: [
      'Yenilikçi finans çözümleri ve süreçleri',
      'İnovasyon laboratuvarları',
      'Fintech işbirlikleri',
      'Veri analitiği yatırımları'
    ],
    outputs: [
      '<b>35+</b> yenilikçi dijital ürün ve hizmet',
      '<b>20+</b> aktif fintech işbirliği',
      '<b>15</b> yeni patent başvurusu',
      'Finansal okuryazarlık eğitimi alan kişi sayısı <b>25.000+</b>'
    ],
    positives: [
      'Sektörde öncü konumlanma',
      'Yenilikçi ürünlerle rekabet avantajı'
    ],
    risks: [
      'Teknolojik dönüşümün hızı',
      'Bilgi güvenliği riskleri'
    ]
  },
  'besinci': {
    color: '#80C49F',
    inputs: [
      'Sürdürülebilir finansman çözümleri',
      '<b>1.850 MW kurulu</b> güce sahip yenilenebilir enerji projeleri',
      'Kaynak verimliliği programları',
      'Yeşil binalar'
    ],
    outputs: [
      'Yeşil kredi portföyü <b>15 milyar TL</b>',
      'Kağıt tasarrufu <b>185 ton</b>',
      'Karbon ayak izi azaltımı <b>%12</b>',
      'Yenilenebilir enerji kullanım oranı <b>%75</b>'
    ],
    positives: [
      'Düşük karbon ekonomisine katkı',
      'Sürdürülebilir finansman alanında liderlik'
    ],
    risks: [
      'İklim değişikliği riskleri',
      'Artan düzenleyici baskılar'
    ]
  },
  'altinci': {
    color: '#ED6C94',
    inputs: [
      'Ulusal şube ağı - <b>690 şube</b>',
      'ATM ağı - <b>3.250 ATM</b>',
      'Dijital altyapı yatırımları',
      'Fastpay dijital cüzdan'
    ],
    outputs: [
      'Dijital kanallardan gerçekleşen işlem oranı <b>%92</b>',
      'Mobil bankacılık aktif kullanıcı artışı <b>%35</b>',
      'Self servis bankacılık noktaları <b>420</b>',
      'LEED sertifikalı genel merkez binası'
    ],
    positives: [
      'Operasyonel verimlilik artışı',
      'Müşteri deneyiminde iyileşme',
      'Dijital dönüşümle maliyet avantajı'
    ],
    risks: [
      'Siber güvenlik tehditleri',
      'Teknolojik altyapı yatırım maliyetleri'
    ]
  }
};

onMounted(() => {
  seciliPencere.value = 'birinci';

  // AOS kütüphanesini başlat
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50
    });
  }
});

// Geçiş efekti için izleme
watch(seciliPencere, () => {
  isAnimating.value = true;
  setTimeout(() => {
    isAnimating.value = false;

    // AOS animasyonlarını yeniden başlat
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, 300);
});

// Aktif kategoriyi getir
const activeCategory = () => {
  return categories.find(cat => cat.id === seciliPencere.value);
};

// İçerik bilgisini getir
const getContent = () => {
  return contentData[seciliPencere.value];
};
</script>

<template>
  <section class="welcome-section py-12 bg-white">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl lg:text-5xl font-light text-[#072CAD] mb-6" data-aos="fade-up">DenizBank</h1>
    <div class="w-32 h-1 bg-[#072CAD] mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
    <p class="text-gray-700 max-w-3xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
      DenizBank, kuruluşundan bu yana sorumlu bankacılık yaklaşımı ile hareket etmekte; sermayedar, çalışan, müşteri ve topluma değer katmayı hedeflemektedir. Tüm iş süreçlerini sürdürülebilirlik odağında ele almakta ve faaliyetlerini Sürdürülebilir Finansman, Yeni Nesil Bankacılık ve Geleceğin Yeteneği değer alanlarıyla gerçekleştirmektedir.
    </p>
  </div>
</section>
  <div class="flex justify-center mt-20 mb-16 overflow-hidden">
    <div class="m-4 md:m-8 max-w-4xl w-full">
      <fieldset class="border-2 border-[#00539B] p-4 md:p-6 rounded-xl shadow-xl bg-white">
        <legend class="text-[#00539B] text-md sm:text-3xl font-bold text-left px-4 py-1 bg-white rounded-full shadow-md">
          Değer Yaratma Modeli
        </legend>

        <!-- Sermaye Türleri Seçim Butonları -->
        <div class="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="seciliPencere = category.id"
            :class="[
              'relative overflow-hidden rounded-lg transform transition-all duration-300 h-24',
              seciliPencere === category.id ?
                'scale-105 ring-2 shadow-lg' :
                'opacity-100 hover:opacity-60 hover:scale-105',
              category.id === 'birinci' || category.id === 'dorduncu' ? 'ring-[#00539B]' :
              category.id === 'ikinci' || category.id === 'ucuncu' ? 'ring-[#1CABE2]' :
              category.id === 'besinci' ? 'ring-[#80C49F]' : 'ring-[#ED6C94]'
            ]"
          >
            <!-- İmport edilen görseller için direkt kullanım -->
            <div class="w-full h-full bg-cover bg-center rounded-lg"
                 :style="{ backgroundImage: `url(${category.image})` }">
            </div>

            <div class="absolute inset-0"></div>
            <div class="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-center">
            </div>
          </button>
        </div>

        <!-- İçerik Panelleri -->
        <div class="relative">
          <transition name="fade" mode="out-in">
            <div
              v-if="activeCategory()"
              :key="seciliPencere"
              class="flex flex-col bg-gradient-to-br to-white p-4 md:p-6 items-center rounded-xl shadow-md"
              :class="activeCategory().gradient"
            >
              <h3
                class="w-full text-xl md:text-2xl font-bold mb-6 text-center"
                :style="{ color: activeCategory().color }"
              >{{ activeCategory().title }}</h3>

              <div class="flex flex-col md:flex-row w-full mb-8 gap-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200">
                  <div class="rounded-t-lg flex items-center p-2" :style="{ backgroundColor: activeCategory().color }">
                    <div class="bg-white p-1 rounded-full mr-2">
                      <Check class="h-5 w-5" :style="{ color: activeCategory().color }" />
                    </div>
                    <p class="text-white text-lg font-semibold">Girdiler</p>
                  </div>
                  <div class="p-4 bg-white rounded-b-lg shadow-md h-full">
                    <p class="text-base mb-2" :style="{ color: activeCategory().color }" v-for="(item, index) in getContent().inputs" :key="index" v-html="item"></p>
                  </div>
                </div>

                <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
                  <div class="rounded-t-lg flex items-center p-2" :style="{ backgroundColor: activeCategory().color }">
                    <div class="bg-white p-1 rounded-full mr-2">
                      <ArrowUp class="h-5 w-5" :style="{ color: activeCategory().color }" />
                    </div>
                    <p class="text-white text-lg font-semibold">Çıktılar</p>
                  </div>
                  <div class="p-4 bg-white rounded-b-lg shadow-md h-full">
                    <p class="text-base mb-2" :style="{ color: activeCategory().color }" v-for="(item, index) in getContent().outputs" :key="index" v-html="item"></p>
                  </div>
                </div>
              </div>

              <div class="w-full rounded-full flex justify-center items-center">
                <div class="relative max-w-md w-full" data-aos="zoom-in" data-aos-delay="100">
                  <!-- CSS background-image kullanarak görsel gösterme -->
                  <img
  :src="denizCarkImage"
  alt="DenizBank Değer Modeli"
  class="w-full my-12 object-contain h-auto"
  style="mix-blend-mode: multiply;"
/>
                </div>
              </div>

              <div class="flex flex-col md:flex-row w-full gap-4 h-full mb-12">
                <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-up" data-aos-delay="300">
                  <div class="rounded-t-lg flex items-center p-2 bg-gradient-to-r"
                       :style="{ backgroundImage: `linear-gradient(to right, ${activeCategory().color}, ${activeCategory().color}99)` }">
                    <div class="bg-white p-1 rounded-full mr-2">
                      <ThumbsUp class="h-5 w-5" :style="{ color: activeCategory().color }" />
                    </div>
                    <p class="text-white text-lg font-semibold">Pozitif Sonuçlar</p>
                  </div>
                  <div class="p-4 bg-white rounded-b-lg shadow-md h-full">
                    <p class="text-base mb-2" :style="{ color: activeCategory().color }" v-for="(item, index) in getContent().positives" :key="index" v-html="item"></p>
                  </div>
                </div>

                <div class="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="400">
                  <div class="rounded-t-lg flex items-center p-2 bg-gradient-to-r"
                       :style="{ backgroundImage: `linear-gradient(to right, ${activeCategory().color}, ${activeCategory().color}99)` }">
                    <div class="bg-white p-1 rounded-full mr-2">
                      <AlertTriangle class="h-5 w-5" :style="{ color: activeCategory().color }" />
                    </div>
                    <p class="text-white text-lg font-semibold">Riskler / Zorluklar</p>
                  </div>
                  <div class="p-4 bg-white rounded-b-lg shadow-md h-full">
                    <p class="text-base mb-2" :style="{ color: activeCategory().color }" v-for="(item, index) in getContent().risks" :key="index" v-html="item"></p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Footer Alanı -->
        <div class="mt-8">
          <div class="bg-gradient-to-r from-[#00539B] to-[#1CABE2] p-4 w-full flex flex-col items-center justify-center rounded-lg mb-6 text-white shadow-md">
            <h3 class="font-bold text-xl mb-3">Paydaşlarımız İçin Yarattığımız Değer</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div class="flex items-center">
                <Users class="h-6 w-6 mr-2" />
                <p class="text-sm">Müşterilerimiz için yenilikçi finansal çözümler</p>
              </div>
              <div class="flex items-center">
                <Briefcase class="h-6 w-6 mr-2" />
                <p class="text-sm">Çalışanlarımız için gelişim fırsatları</p>
              </div>
              <div class="flex items-center">
                <DollarSign class="h-6 w-6 mr-2" />
                <p class="text-sm">Hissedarlarımız için sürdürülebilir getiri</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-center text-[#00539B] text-lg font-semibold mb-2">
              <Activity class="h-5 w-5 mr-2" />
              Sürdürülebilir Kalkınma Amaçları
            </div>
            <div class="w-full flex gap-3 p-4 rounded-lg bg-white shadow-sm justify-center">
              <div class="flex flex-wrap gap-3 justify-center">
                <!-- SDG görsellerini gösterme - CSS background ile -->
                <div
                  v-for="sdg in sdgImages"
                  :key="sdg.number"
                  class="w-16 h-16 transform transition-all duration-300 hover:scale-110 shadow-sm rounded-md overflow-hidden bg-contain bg-center bg-no-repeat"
                  :style="{ backgroundImage: `url(${sdg.path})` }"
                  data-aos="flip-left"
                  :data-aos-delay="sdg.number * 50"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
/* Geçiş animasyonları */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* AOS animasyon ayarları */
[data-aos] {
  pointer-events: none;
}

[data-aos].aos-animate {
  pointer-events: auto;
}

/* Mobil cihazlar için özel stil ayarlamaları */
@media (max-width: 768px) {
  .h-130 {
    height: 200px;
  }
}
</style>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <!-- Footer Top - Logo and Links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Logo Column -->
        <div class="md:col-span-1">
          <div class="mb-6">
            <router-link to="/">
              <img src="/denizbank.svg" alt="DenizBank Logo" class="h-12 filter brightness-150">
            </router-link>
          </div>
          <p class="text-gray-400 mb-4">
            DenizBank A.Ş.<br>
            Büyükdere Cad. No: 141 34394 Esentepe/İstanbul
          </p>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/denizbank" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <Facebook class="w-6 h-6" />
            </a>
            <a href="https://twitter.com/denizbank" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <Twitter class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/denizbank" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <Linkedin class="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/denizbank" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <Instagram class="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/user/denizbank" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              <Youtube class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- First Column - Main Site Sections -->
            <div>
              <h3 class="text-white font-medium text-lg mb-4">Sürdürülebilirlik</h3>
              <ul class="space-y-2">
                <li>
                  <router-link to="/" class="text-gray-400 hover:text-white transition-colors">
                    Ana Sayfa
                  </router-link>
                </li>
                <li>
                  <router-link to="/degeryaratma" class="text-gray-400 hover:text-white transition-colors">
                    Değer Yaratma Modelimiz
                  </router-link>
                </li>
                <li>
                  <router-link to="/guvenilir" class="text-gray-400 hover:text-white transition-colors">
                    Yeni Nesil Bankacılık
                  </router-link>
                </li>
                <li>
                  <router-link to="/sorumluop" class="text-gray-400 hover:text-white transition-colors">
                    İlerisi için Sürdürülebilir Finansman
                  </router-link>
                </li>
                <li>
                  <router-link to="/iyivatandas" class="text-gray-400 hover:text-white transition-colors">
                    Geleceğin Yeteneği
                  </router-link>
                </li>
                <li>
                  <router-link to="/saglamktemeller" class="text-gray-400 hover:text-white transition-colors">
                    Sağlam Kurumsal Temeller
                  </router-link>
                </li>
                <li>
                  <router-link to="/raporlar" class="text-gray-400 hover:text-white transition-colors">
                    Finansal Raporlar
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Second Column -->
            <div>
              <h3 class="text-white font-medium text-lg mb-4">Yatırımcı İlişkileri</h3>
              <ul class="space-y-2">
                <li>
                  <a href="https://www.denizbank.com/yatirimci-iliskileri/" target="_blank" class="text-gray-400 hover:text-white transition-colors flex items-center">
                    Yatırımcı İlişkileri Sitesi
                    <ExternalLink class="w-4 h-4 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/yatirimci-iliskileri/finansal-bilgi/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    Finansal Bilgiler
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/yatirimci-iliskileri/surdurulebilirlik-raporlari/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    Sürdürülebilirlik Raporları
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/yatirimci-iliskileri/duyurular/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    Duyurular
                  </a>
                </li>
              </ul>
            </div>

            <!-- Third Column -->
            <div>
              <h3 class="text-white font-medium text-lg mb-4">Faydalı Bağlantılar</h3>
              <ul class="space-y-2">
                <li>
                  <a href="https://www.denizbank.com" target="_blank" class="text-gray-400 hover:text-white transition-colors flex items-center">
                    DenizBank Ana Site
                    <ExternalLink class="w-4 h-4 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/sube-ve-atm-arama/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    Şube ve ATM
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/interaktif-bankacilik/internet-bankaciligi/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    İnternet Bankacılığı
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/iletisim/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="https://www.denizbank.com/hakkimizda/surdurulebilirlik/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    Sürdürülebilirlik
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom - Copyright and Policy Links -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div class="mb-4 md:mb-0">
            <p>© 2023 DenizBank A.Ş. Tüm Hakları Saklıdır</p>
          </div>
          <div class="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="https://www.denizbank.com/gizlilik-ve-guvenlik/" target="_blank" class="hover:text-white transition-colors mb-2 md:mb-0">
              Gizlilik ve Güvenlik
            </a>
            <a href="https://www.denizbank.com/kvkk/" target="_blank" class="hover:text-white transition-colors mb-2 md:mb-0">
              Kişisel Verilerin Korunması
            </a>
            <a href="https://www.denizbank.com/cerez-politikasi/" target="_blank" class="hover:text-white transition-colors mb-2 md:mb-0">
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ExternalLink, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
footer {
  position: relative;
  z-index: 10;
  margin-top: 2rem;
}

footer a {
  transition: color 0.3s ease;
}

.router-link-active {
  color: white;
  font-weight: 500;
}
</style>

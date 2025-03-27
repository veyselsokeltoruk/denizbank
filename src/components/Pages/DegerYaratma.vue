<script setup>
import { onMounted, ref } from 'vue';
const seciliPencere = ref('birinci');

onMounted(() => {
    seciliPencere.value = 'birinci';
});
</script>


<template>
    <div class="flex justify-center mt-12 overflow-hidden">
        <div class="m-4 md:m-8 max-w-[1024px] w-full">
            <fieldset class="border-2 border-[#072CAD] p-5 rounded-lg">
                <legend class="text-[#072CAD] text-md sm:text-3xl font-bold text-left mb-1">
                    Değer Yaratma Modeli
                </legend>
                <div class="w-full flex md:flex-row flex-col gap-1">
                    <div class="flex gap-1">
                        <button @click="seciliPencere = 'birinci'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'birinci', 'opacity-50': seciliPencere !== 'birinci' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/finansal-sermaye.webp" alt="">
                        </button>
                        <button @click="seciliPencere = 'ikinci'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'ikinci', 'opacity-50': seciliPencere !== 'ikinci' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/insan-sermayesi.webp" alt="">
                        </button>
                        <button @click="seciliPencere = 'ucuncu'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'ucuncu', 'opacity-50': seciliPencere !== 'ucuncu' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/sosyal-sermaye.webp" alt="">
                        </button>
                    </div>
                    <div class="flex gap-1">
                        <button @click="seciliPencere = 'dorduncu'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'dorduncu', 'opacity-50': seciliPencere !== 'dorduncu' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/entelektuel-sermaye.webp" alt="">
                        </button>
                        <button @click="seciliPencere = 'besinci'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'besinci', 'opacity-50': seciliPencere !== 'besinci' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/dogal-sermaye.webp" alt="">
                        </button>
                        <button @click="seciliPencere = 'altinci'"
                            :class="{ 'opacity-100 cursor-pointer': seciliPencere === 'altinci', 'opacity-50': seciliPencere !== 'altinci' }"
                            class="w-1/3 hover:opacity-100">
                            <img src="/uretilmis-sermaye.webp" alt="">
                        </button>
                    </div>
                </div>
                <div class="flex flex-col bg-[#E6EAF7] p-4 md:p-10 items-center mb-1"
                    v-if="seciliPencere === 'birinci'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-md sm:text-xl font-semibold bg-[#072CAD] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#072CAD] text-sm sm:text-xl">
                                Yaygın müşteri tabanı <b>24,3 milyon</b><br>
                                Güçlü sermaye yapısı <br>
                                <b>2.453,8 milyar TL</b> aktif büyüklüğü
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-md sm:text-xl font-semibold bg-[#072CAD] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#072CAD] text-sm sm:text-xl">
                                Toplam nakdi kredi büyümesi <b>%51,1</b><br>
                                Toplam mevduat <b>1.662,2 milyar TL</b><br>
                                Net kâr <b>72,3 milyar TL</b><br>
                                Ortalama özkaynak kârlılığı <b>%33,3</b>
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-md sm:text-xl font-semibold bg-[#072CAD] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#072CAD] text-sm sm:text-xl">
                                Yüksek kârlılık<br>
                                Hedeflerle uyumlu pazar payı
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-md sm:text-xl font-semibold bg-[#072CAD] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#072CAD] text-sm sm:text-xl">
                                Yüksek enflasyon nedeniyle düşen alım gücünün finansal sermayeye olumsuz etkisi<br>
                                Faaliyet ortamındaki belirsizliklerin finansal sermayeye olumsuz etkisi
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-[#d4f0ff] p-4 md:p-10 rounded-lg items-center mb-1"
                    v-else-if="seciliPencere === 'ikinci'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4fc4fe] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#4fc4fe] text-xl">
                                <b>21.167</b> çalışan<br>
                                Çalışan memnuniyetini ve gelişimini destekleyen uygulamalar<br>
                                Toplumsal cinsiyet eşitliği ve çalışma barışını<br>pekiştiren insan hakları politikaları
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4fc4fe] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#4fc4fe] text-xl">
                                Kadın çalışan oranı <b>%53</b><br>
                                Yönetimde kadın çalışan oranı <b>%40</b><br>
                                Çalışan devir oranı <b>%1,63</b><br>
                                Sendikalılık oranı <b>%97</b>
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4fc4fe] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#4fc4fe] text-xl">
                                Yüksek çalışan bağlılığı<br>
                                Artan dijital yetkinlikler
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4fc4fe] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#4fc4fe] text-xl">
                                Artan dijitalleşme sonucu azalan işgücü ihtiyacının insan sermayesine olumsuz etkisi<br>
                                Büyük istifa gibi küresel akımların insan sermayesi ve entelektüel sermaye üzerindeki
                                olumsuz etkisi
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-[#e5f6ff] p-4 md:p-10 rounded-lg items-center mb-1"
                    v-else-if="seciliPencere === 'ucuncu'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4ec6fc] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#4ec6fc] text-xl">
                                Güçlü marka değeri<br>
                                Etkin paydaş iletişimi<br>
                                Yeni nesil bankacılık uygulamaları<br>
                                Sürdürülebilirlik alanında dahil olunan <br> inisiyatifler-16
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4ec6fc] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#4ec6fc] text-xl">
                                Özel bankalar arasında bireysel net tavsiye skoru sıralamasında <b>birinci</b>
                                81 İlden 81 Öğrenci projesi mezun sayısı <b>428</b><br>
                                Maxi ile ulaşılan kullanıcı sayısı <b>10,7 milyon</b><br>
                                İşCep kullanıcı sayısı <b>13,7 milyon</b>
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4ec6fc] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#4ec6fc] text-xl">
                                Geniş tedarik havuzunun finansal sermayeye olumlu etkisi<br>
                                Yüksek müşteri memnuniyetinin finansal sermayeye olumlu etkisi
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#4ec6fc] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#4ec6fc] text-xl">
                                Artan dijitalleşmenin ilişkisel sermayeye olumsuz etkisi
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-[#FDF3E8] p-4 md:p-10 rounded-lg items-center mb-1"
                    v-else-if="seciliPencere === 'dorduncu'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#ec8a23] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#ec8a23] text-xl">
                                Asırlık kurumsal bilgi birikimi <br>
                                Çevik çalışma modeli<br>
                                Çalışan yetkinliklerine yapılan sürekli yatırım<br>
                                Değer yaratan teknoloji ve inovasyon yatırımları<br>
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#ec8a23] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#ec8a23] text-xl">
                                <b>16 bini</b> aşkın Ekonomi.isbank.com.tr abone sayısı<br>
                                Çevik çalışma modeli ile görev yapan<br> <b>1.660</b> çalışan ve <b>225</b> Çevik
                                takım<br>
                                <b>38 adet</b>
                                <span>&lt;&lt; Çiftçi Buluşması &gt;&gt;</span> ile ulaşılan <br> <b>3.600'ün</b>
                                üzerinde
                                çiftçi
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#ec8a23] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#ec8a23] text-xl">
                                Sorumlu kredilendirme uygulamaları ile düşük ÇSY riskli portföyün finansal ve doğal
                                sermayeye olumlu etkisi<br>
                                Desteklenen finteklerle güncel bankacılığa uyum
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#ec8a23] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#ec8a23] text-xl">
                                Kredilendirilmeyen faaliyetlerin finansal sermayeye olumsuz etkisi<br>
                                Bankaların teknoloji şirketlerine dönüşümünde büyük kurumsal yapıların dönüşüm zorluğu

                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-[#F2F6EB] p-4 md:p-10 rounded-lg items-center mb-1"
                    v-else-if="seciliPencere === 'besinci'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#a6c682] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#a6c682] text-xl">
                                Dijitalleşen bankacılık süreçleri <br>
                                <b>2.659 MW kurulu</b> güce sahip yenilenebilir enerji projelerinin finansmanı<br>
                                Operasyonlarda kullanılan enerji ve su
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#a6c682] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#a6c682] text-xl">
                                Yenilenebilir enerji kaynaklarından üretilen enerji miktarının toplam enerji tüketimi
                                içerisindeki payı <b>%100</b><br>
                                Yenilenebilir enerji projelerinin, İş Bankası'nın toplam enerji üretimi projeleri
                                portföyündeki payı <b>%77,3</b><br>
                                Dijitalleşme ile <b>238</b> milyon sayfa kağıt tasarrufu<br>
                                Elektrik ihtiyacının <b>%100'ünde</b> yenilenebilir enerji tedariği
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#a6c682] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#a6c682] text-xl">
                                Azalan kaynak tüketiminin doğal ve finansal sermayeye olumlu etkisi <br>
                                İklim risklerinin etkin yönetimi ile dönüşüm ekonomisine katkı<br>
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#a6c682] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#a6c682] text-xl">
                                Artan <span>&lt;&lt; yeşil &gt;&gt;</span> düzenlemelerin finansal ve üretilmiş
                                sermayeye
                                olumsuz etkisi<br>
                                Operasyonların çevresel etkilerini azaltmak için ayrılan bütçenin finansal sermayeye
                                olumsuz etkisi
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col bg-[#F9E6EC] p-4 md:p-10 items-center mb-1"
                    v-else-if="seciliPencere === 'altinci'">
                    <div class="flex flex-col md:flex-row w-full mb-10">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#d41e5c] text-white py-1 px-2 mb-2">
                                Girdiler
                            </p>
                            <p class="text-[#d41e5c] text-xl">
                                Geniş şube ağı - <b>1.066 yurtiçi şube</b><br>
                                Türkiye'deki en geniş Bankamatik ağı - <b>6.312</b><br>
                                Yapay zekâ ve doğal dil işleme (NLP) teknolojileriyle çalışan kişisel asistanı
                                <b>Maxi</b>
                                <br>
                                Güçlü bilgi sistemleri altyapısı
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#d41e5c] text-white py-1 px-2 mb-2">
                                Çıktılar
                            </p>
                            <p class="text-[#d41e5c] text-xl">
                                Bankamatik sayısı <b>6.312</b><br>
                                Maxi ile yanıtlanan soru sayısı <b>87,3 milyon</b><br>
                                <b>BREEAM In-use Excellent</b> sertifikalı Genel Müdürlük binası<br>
                                <b>LEED v4 Gold for Data Centers</b> sertifikalı Tuzla Veri Merkezi (Atlas) binası
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-full mb-10 flex justify-center items-center">
                        <img class="max-w-[500px] w-full" data-aos="zoom-in-down" data-aos-delay="200"
                            data-aos-duration="1000" src="/cark.svg" alt="">
                    </div>
                    <div class="flex flex-col md:flex-row w-full">
                        <div class="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#d41e5c] text-white py-1 px-2 mb-2">
                                Pozitif Sonuçlar
                            </p>
                            <p class="text-[#d41e5c] text-xl">
                                Üstün teknolojik yetkinlikler ile kesintisiz operasyonların finansal ve ilişkisel
                                sermayeye<br> olumlu etkisi<br>
                                Azalan personel ihtiyacının finansal sermayeye<br> olumlu etkisi<br>
                                Kağıtsızlaşmanın finansal ve doğal sermayeye<br> olumlu etkisi
                            </p>
                        </div>
                        <div class="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <p class="text-xl font-semibold bg-[#d41e5c] text-white py-1 px-2 mb-2">
                                Riskler / Zorluklar
                            </p>
                            <p class="text-[#d41e5c] text-xl">
                                Artan dijitalleşmenin ilişkisel sermayeye<br> olumsuz etkisi<br>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-[#4FC3FE] p-4 md:p-5 w-full flex flex-col items-center justify-center rounded-lg mb-2 text-sm sm:text-base">
                    <h1 class="font-bold">Kilit Paydaşlar İçin Yaratılan Değer</h1>
                    <p>Müşteriler için kapsayıcı finansman ve yenilikçi ürün & hizmetler</p>
                    <p>Çalışanlar için eğitim ve gelişim programları</p>
                    <p>Hissedarlar için güvenilir ve kazançlı bir paydaşlık</p>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex items-center justify-center text-[#072CAD] text-md sm:text-base">Finansal
                        Performans
                        ve Kârlılık</div>
                    <div class="w-full flex gap-1 mb-1 items-center justify-center">
                        <div class="flex flex-wrap gap-2">
                            <div class="w-[75px]">
                                <img src="/4.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/5.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/7.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/8.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/9.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/10.png" alt="">
                            </div>
                            <div class="w-[75px]">
                                <img src="/13.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seciliPencere: 'birinci',
        }
    }
}
</script>
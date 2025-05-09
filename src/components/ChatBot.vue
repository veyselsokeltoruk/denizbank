<template>
    <div>
        <div class="fixed z-50 right-[10px] bottom-3">
            <button @click="openPopup"
                class="w-14 h-14 bg-[#D11241] rounded-full flex items-center justify-center shadow-xl hover:bg-[#b80f39] transition duration-300 transform hover:scale-105 hover:shadow-2xl">
                <img class="p-3.5" src="/message.png" alt="Mesaj">
            </button>
        </div>

        <div v-if="showPopup"
            class="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50 p-4 sm:p-0"
            @click="closePopup">
            <div class="sm:max-w-4xl w-full sm:h-[80vh] h-full rounded-xl overflow-hidden bg-white shadow-2xl flex flex-col" @click.stop>
                <div class="flex justify-end p-2 sm:hidden">
                     <button @click="closePopup"
                        class="text-[#233D93] hover:text-gray-500 text-3xl transition duration-300">&times;</button>
                </div>
                <div class="flex flex-col lg:flex-row h-full overflow-hidden">

                    <div class="flex-grow h-3/5 lg:h-full lg:w-2/3 relative">
                         <button @click="closePopup"
                            class="absolute top-3 right-3 text-[#233D93] hover:text-gray-500 text-4xl transition duration-300 hidden sm:block z-10">&times;</button>
                        <iframe class="w-full h-full" :src="popupUrl" frameborder="0"></iframe>
                    </div>


                    <div class="p-4 sm:p-6 bg-slate-50 h-2/5 lg:h-full lg:w-3/8 overflow-auto border-t lg:border-t-0 lg:border-l border-gray-200">
                        <h2 class="text-xl font-semibold mb-4 text-[#233D93]">Konular</h2>
                        <div class="grid grid-cols-2 sm:grid-cols-2 gap-3">
                            <button v-for="topic in topics" :key="topic" @click="sendMessage(topic)"
                                class="bg-transparent border-2 border-[#233D93] text-[#233D93] rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#233D93] hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#233D93] focus:ring-opacity-50">
                                {{ topic }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopup: false,
            popupPath: "/denizefr24/chat.html",
            topics: [
                "Sürdürülebilirlik",
                "Sürdürülebilir Kalkınma Amaçları",
                "Değer Modeli",
                "Öncelikli Konular",
                "Yeni Nesil Bankacılık",
                "Müşteri Deneyimi",
                "Dijitalleşme",
                "İnovasyon",
                "Yapay Zeka",
                "Sürdürülebilir Finansman",
                "Sorumlu Hizmetler",
                "Tarım Bankacılığı",
                "KOBİ Bankacılığı",
                "Kadın Girişimciler",
                "Emekli Bankacılığı",
                "Engelsiz Bankacılık",
                "İnsan Kaynakları",
                "Toplumsal Cinsiyet Eşitliği",
                "Bilgi Güvenliği",
                "Finansal Okuryazarlık",
                "Kurumsal Yönetim",
                "Denetim",
                "İç Kontrol",
                "Uyum",
                "Risk Yönetimi",
                "İş Etiği",
                "Rüşvet ve Yolsuzluk Karşıtlığı",
                "İklim Eylemi",
                "Sosyal Sorumluluk"
            ]
        };
    },
    computed: {
        popupUrl() {
            if (process.env.NODE_ENV === 'production') {
                 return window.location.origin + this.popupPath;
            }
            return this.popupPath;
        }
    },
    methods: {
        openPopup() {
            this.showPopup = true;
            document.body.style.overflow = 'hidden'; // Arka plan kaydırmasını engelle
        },
        closePopup() {
            this.showPopup = false;
            document.body.style.overflow = ''; // Arka plan kaydırmasını geri aç
        },
        sendMessage(topic) {
            const iframe = document.querySelector('iframe');
            if (iframe && iframe.contentWindow) {
                const iframeWindow = iframe.contentWindow;
                // Iframe'in tamamen yüklenmesini beklemek için küçük bir gecikme eklenebilir
                // veya iframe'den 'load' event'i dinlenebilir.
                // Şimdilik doğrudan erişmeye çalışıyoruz.
                try {
                    const userInputField = iframeWindow.document.getElementById('user-input');
                    const sendButton = iframeWindow.document.getElementById('send-button');

                    if (userInputField && sendButton) {
                        userInputField.value = topic;
                        sendButton.click();
                    } else {
                        console.error("Iframe içindeki 'user-input' veya 'send-button' bulunamadı.");
                    }
                } catch (e) {
                    console.error("Iframe içeriğine erişirken hata oluştu:", e);
                    // Genellikle cross-origin hatası olabilir, ancak aynı origin ise bu olmamalı.
                    // Alternatif olarak iframe'e postMessage ile veri gönderilebilir.
                }
            } else {
                console.error("Iframe bulunamadı veya contentWindow erişilemez.");
            }
        }
    },
    watch: {
        showPopup(newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    },
    beforeUnmount() {
        // Komponent kaldırıldığında body overflow'unu sıfırla
        document.body.style.overflow = '';
    }
};
</script>

<style>
/* Global stillere ihtiyaç olursa buraya eklenebilir,
   ancak Tailwind sınıfları genellikle yeterlidir. */
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>

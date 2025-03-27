<template>
    <div>
        <div class="fixed z-50 right-24 bottom-7">
            <button @click="openPopup"
                class="w-12 h-12 bg-[#06BFDD] rounded-full flex items-center justify-center shadow-lg hover:bg-[#05a5c0] transition duration-300 transform hover:scale-105">
                <img class="p-3" src="/message.png" alt="Mesaj">
            </button>
        </div>

        <div v-if="showPopup"
            class="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
            @click="closePopup">
            <div class="sm:w-4/6 sm:h-4/6 h-screen w-screen rounded-lg overflow-hidden bg-white shadow-xl" @click.stop>
                <button @click="closePopup"
                    class="absolute top-0 right-0 m-4 sm:m-12 sm:text-white text-[#06BFDD] hover:text-gray-400 sm:text-6xl text-4xl transition duration-300">&times;</button>
                <div class="flex flex-col lg:flex-row h-full">
                    <iframe class="flex-grow h-5/6 lg:h-full" :src="popupUrl" frameborder="0"></iframe>
                    <div class="p-4 bg-gradient-to-t from-[#06BFDD] to-white h-2/6 lg:h-full overflow-auto rounded-b-lg">
                        <h2 class="text-lg font-bold mb-1 text-[#06BFDD]">Konular</h2>
                        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            <button v-for="topic in topics" :key="topic" @click="sendMessage(topic)"
                                class="bg-[#06BFDD] text-white rounded px-2 py-1 text-sm hover:bg-[#05a5c0] transition duration-300">
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
            popupPath: "/ir/2023/2023TR/chat.html",
            topics: [
                "Sürdürülebilirlik", "Sürdürülebilir Kalkınma Amaçları", "Değer Modeli", "İş Bankası Bankacılığı",
                "Öncelikli Konular", "Kapsayıcı Ekonomi", "Müşteri Odaklılık", "Sorumlu Bankacılık", "İnsan Hakları",
                "İnsan Kaynakları", "Toplumsal Cinsiyet Eşitliği", "Satın Alma", "Finansal Kapsayıcılık",
                "Finansal Okuryazarlık", "Engelsiz Bankacılık", "İklim Eylemi", "Etki", "Net-Sıfır Bankacılık Birliği",
                "Bilim Temelli Hedefler", "Dijital Bankacılık", "İnovasyon", "Yapay Zeka", "Girişimcilik",
                "Bilgi Güvenliği", "Kurumsal Yönetim", "Denetim", "Uyum", "İç Kontrol", "Risk Yönetimi",
                "İş Etiği", "Rüşvet ve Yolsuzluk Karşıtlığı", "Sosyal Sorumluluk", "Paydaşlarımız", "Finansal Performans"
            ]

        };
    },
    computed: {
        popupUrl() {
            return window.location.origin + this.popupPath;
        }
    },
    methods: {
        openPopup() {
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        },
        sendMessage(topic) {
            const iframe = document.querySelector('iframe');
            const iframeWindow = iframe.contentWindow;

            iframeWindow.document.getElementById('user-input').value = topic;
            iframeWindow.document.getElementById('send-button').click();
        }
    }
};
</script>

<style>
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
</style>

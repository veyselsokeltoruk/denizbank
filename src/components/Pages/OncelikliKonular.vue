<template>
    <div class="flex justify-center">
        <div class="m-8 max-w-[1024px] w-full">
            <h1 class="text-[#072CAD] text-3xl font-bold text-center">
                Öncelikli Konularımız ve Odak Alanlarımız
            </h1>
            <div class="flex flex-col mt-8 items-center justify-center">
                <div class="flex flex-col md:flex-row md:items-center gap-3">
                    <div class="w-full md:w-3/5">
                        <img src="/etki-matrisi.webp" alt="" class="mx-auto md:mx-0">
                    </div>
                    <div class="max-w-md mx-auto mt-1 md:mt-0">
                        <ul class="text-black">
                            <li v-for="(item, index) in listItems" :key="index" class="flex items-center gap-3 mt-1">
                                <span
                                    class="flex items-center justify-center bg-[#072CAD] w-4 h-4 rounded-sm text-white mr-2 text-sm">
                                    {{ index + 1 }}
                                </span>
                                <span>{{ item }}</span>
                            </li>
                        </ul>
                        <div class="text-right mt-4">
                            <a href="#" class="text-blue-700 font-light">Detaylar</a>
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
            listItems: [
                'Dijital bankacılık ve inovasyon',
                'Etkin risk yönetimi',
                'Finansal performans ve karlılık',
                'Müşteri odaklılık',
                'İş etiği, şeffaflık, kurumsal yönetim ve sürdürülebilir raporlama',
                'İşin geleceği ve yeni çalışma modelleri',
                'Siber güvenlik, müşteri ve veri gizliliği',
                'Çalışan hakları, bağlılığı ve memnuniyeti',
                'Sorumlu bankacılık',
                'Finansal kapsayıcılık',
                'Fırsat eşitliği, çeşitlilik ve toplumsal cinsiyet eşitliği',
                'Sorumlu satın alma ve tedarik zinciri yönetimi',
                'Toplumsal refaha katkı',
                'İnsan hakları',
            ],
        };
    },
};
</script>

<style scoped></style>
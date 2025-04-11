<template>
    <div class="flex flex-wrap justify-center gap-4 p-6 w-full">
        <div v-for="(item, index) in items" :key="index"
            class="bg-gray-100 p-6 rounded-md shadow-md flex-1 min-w-[200px] max-w-md flex flex-col">
            <div class="flex justify-between">
                <h2 class="text-blue-900 text-xl font-semibold">{{ item.title }}</h2>
                <img class="rounded-full h-14" :src="getImageUrl(item.title)" :alt="item.title">
            </div>
            <ul>
                <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="flex items-center mt-2">
                    <img class="w-3 mr-2" src="/arrow.svg" alt="">
                    <span class="text-gray-700">{{ subItem }}</span>
                </li>
            </ul>
            <div class="mt-4 h-full flex justify-start items-end">
                <a href="#" class="text-blue-700 font-semibold">Bu bölümde ne var</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Değer Yaratma Anlayışımız",
                    subItems: [
                        "Değer yaratma modeli",
                        "Sürdürülebilirlik yönetimi",
                        "Sürdürülebilirlik Alanında Desteklenen girişimler",
                        "Paydaşlarımız"
                    ]
                },
                {
                    title: "Yeni Nesil Bankacılık",
                    subItems: [
                        "Kapsayıcı ve dayanıklı ekonomi",
                        "Finansal performans ve kârlılık",
                        "Müşteri odaklılık",
                        "İklim eylemi",
                        "Dijital bankacılık"
                    ]
                },
                {
                    title: "İlerisi için Sürdürülebilir Finansman",
                    subItems: [
                        "Çevresel etki yönetimi",
                        "Sorumlu tedarik zinciri yönetimi",
                        "İnsana yakışır iş",
                        "Fırsat Eşitliği, Çeşitlilik ve Toplumsal Cinsiyet Eşitliği"
                    ]
                },
                {
                    title: "Geleceğin Yeteneği",
                    subItems: [
                        "Kurumsal yönetim anlayışı",
                        "Yetenek Çekme ve Elde Tutma",
                        "Toplumsal refaha katkı"
                    ]
                },
                {
                    title: "Sağlam Kurumsal Temeller",
                    subItems: [
                        "Kurumsal yönetim anlayışı",
                        "Yetenek Çekme ve Elde Tutma",
                        "Toplumsal refaha katkı"
                    ]
                }
            ]
        };
    },
    methods: {
        getImageUrl(title) {
            return `/denizefr24/${title.toLowerCase().replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ö/g, 'o').replace(/[^\w\s]/g, '')
                .replace(/ç/g, 'c').replace(/[^a-zA-Z0-9]/g, '-')}.webp`;
        }
    }
};
</script>

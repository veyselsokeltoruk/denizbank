<template>
    <div class="relative overflow-hidden h-[500px] rounded-lg shadow-lg group">
        <!-- Background Image with Controlled Height -->
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/slide-1.png" alt="Yeni Nesil Bankacılık">

        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

        <!-- Content Section - Compact Layout -->
        <div class="absolute inset-0 flex items-center justify-end">
            <div class="w-full md:w-1/2 p-3 md:p-6 flex flex-col gap-3 justify-center">
                <!-- Main Content Box -->
                <div
                    class="overflow-hidden rounded-lg bg-white/30 backdrop-blur-sm p-3 md:p-4 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-2 opacity-90">
                    <div class="flex justify-end">
                        <img class="h-16" src="/ilerisi-icin-logo-disi.png" alt="">
                        <h2
                            class="handwritten text-[#233D93] text-right font-bold text-lg md:text-2xl lg:text-3xl mb-1">
                            Yeni Nesil
                            <br>
                            <span class="text-white">Bankacılık</span>
                        </h2>
                    </div>
                    <div
                        class="w-12 h-0.5 bg-[#A0D5FF] rounded-full mb-2 transition-all duration-500 group-hover:w-20 ml-auto">
                    </div>
                    <p
                        class="text-white text-xs md:text-sm lg:text-base font-light text-right leading-tight md:leading-relaxed">
                        Dijitalleşme ve inovasyon yardımıyla geliştirilen yenilikçi ürün ve hizmetlerimizin
                        sürdürülebilirlik etkisini daha geniş bir müşteri kitlesine ulaştırmak ve müşteri deneyimi
                        ile operasyonel verimliliği yukarı taşımak öncelikli hedeflerimiz arasında yer almaktadır.
                    </p>
                </div>

                <!-- Additional Info Box -->
                <!-- <div class="bg-white/10 backdrop-blur-sm p-3 rounded-lg mt-1 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hidden md:block">
                    <div class="text-white text-xs lg:text-sm">
                        <span class="block text-right font-medium mb-1">İlgili Sermaye Öğeleri</span>
                        <ul class="space-y-0.5 mt-1">
                            <li class="flex items-center gap-1 justify-end">
                                <span>Fikri Sermaye</span>
                                <span class="inline-block w-1.5 h-1.5 bg-[#A0D5FF] rounded-full"></span>
                            </li>
                            <li class="flex items-center gap-1 justify-end">
                                <span>Üretilmiş Sermaye</span>
                                <span class="inline-block w-1.5 h-1.5 bg-[#A0D5FF] rounded-full"></span>
                            </li>
                            <li class="flex items-center gap-1 justify-end">
                                <span>Sosyal-ilişkisel Sermaye</span>
                                <span class="inline-block w-1.5 h-1.5 bg-[#A0D5FF] rounded-full"></span>
                            </li>
                        </ul>
                    </div>

                    <div class="text-right mt-2">
                        <button class="px-2 py-1 border border-[#A0D5FF] text-[#A0D5FF] rounded hover:bg-[#A0D5FF]/20 transition-colors text-xs">
                            Daha fazla bilgi
                        </button>
                    </div>
                </div> -->
            </div>
        </div>

        <!-- Minimal Decorative Elements -->
        <div
            class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#A0D5FF]/30 to-transparent rounded-tr-full">
        </div>
        <div
            class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#A0D5FF]/20 to-transparent rounded-bl-full">
        </div>
    </div>
</template>

<style>
.handwritten {
    font-family: "handwritten", cursive;
}

/* Add subtle animation */
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-3px);
    }

    100% {
        transform: translateY(0px);
    }
}

.group:hover h2 {
    animation: float 3s ease-in-out infinite;
}
</style>

<template>
    <div class="relative overflow-hidden h-full rounded-lg shadow-lg group">
        <!-- Background Image with Overlay -->
        <img
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/05_SPR.jpg"
            alt="Sağlam Kurumsal Temeller"
        >

        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        <!-- Content Section -->
        <div class="absolute inset-0 flex items-center">
            <div class="w-full md:w-1/2 p-4 md:p-10 lg:p-12 flex flex-col md:gap-6 justify-center">
                <!-- Title with Animation -->
                <div
                    class="overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-4 md:p-6 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-4 opacity-90"
                >
                    <h2
                        class="handwritten text-[#A0D5FF] text-left font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-4"
                    >
                    Sağlam Kurumsal Temeller
                    </h2>
                    <div class="w-20 h-1 bg-[#A0D5FF] rounded-full mb-4 transition-all duration-500 group-hover:w-32"></div>
                    <p
                        class="text-white text-sm md:text-lg xl:text-xl font-light md:block max-w-md leading-relaxed"
                    >
                    Veri Gizliliği ve Güvenliği, Sistematik Risk Yönetimi ile Yönetişim, Uyum ve Etik yönetsel temellerimizdir.
                    </p>
                </div>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#A0D5FF]/30 to-transparent rounded-tl-full"></div>
        <div class="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#A0D5FF]/20 to-transparent rounded-br-full"></div>
    </div>
</template>

<style>
@font-face {
    font-family: "handwritten";
    src: url("/fonts/Amsterdam-Signature.ttf");
}

.handwritten {
    font-family: "handwritten", cursive;
}

/* Add subtle animation */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
}

.group:hover h2 {
    animation: float 3s ease-in-out infinite;
}
</style>

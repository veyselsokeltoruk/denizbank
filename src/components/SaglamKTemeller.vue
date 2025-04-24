<template>
    <div class="relative overflow-hidden h-[500px] rounded-lg shadow-lg group">
        <!-- Background Image with Controlled Height -->
        <img
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/slide-5.png"
            alt="Sağlam Kurumsal Temeller"
        >

        <!-- Gradient Overlay - Sağdan sola -->
        <div class="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

        <!-- Content Section - Sağa Yaslı -->
        <div class="absolute inset-0 flex items-center justify-end">
            <div class="w-full md:w-1/2 p-3 md:p-6 flex flex-col gap-3 justify-center">
                <!-- Main Content Box -->
                <div
                    class="overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-3 md:p-4 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-2 opacity-90"
                >
                    <h2
                        class="handwritten text-[#A0D5FF] text-right font-bold text-lg md:text-2xl lg:text-3xl mb-1"
                    >
                        Sağlam Kurumsal Temeller
                    </h2>
                    <div class="w-12 h-0.5 bg-[#A0D5FF] rounded-full mb-2 transition-all duration-500 group-hover:w-20 ml-auto"></div>
                    <p
                        class="text-white text-xs md:text-sm lg:text-base font-light text-right leading-tight md:leading-relaxed"
                    >
                        Veri Gizliliği ve Güvenliği, Sistematik Risk Yönetimi ile Yönetişim, Uyum ve Etik yönetsel temellerimizdir.
                    </p>
                </div>
            </div>
        </div>

        <!-- Minimal Decorative Elements - Yönleri Değiştirildi -->
        <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#A0D5FF]/30 to-transparent rounded-tr-full"></div>
        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#A0D5FF]/20 to-transparent rounded-bl-full"></div>
    </div>
</template>

<style>
.handwritten {
    font-family: "handwritten", cursive;
}

/* Add subtle animation */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
    100% { transform: translateY(0px); }
}

.group:hover h2 {
    animation: float 3s ease-in-out infinite;
}
</style>

<template>
    <div class="relative flex flex-col items-start h-full">
        <img class="w-full" src="/04_SPR.jpg" alt="">
        <div class="absolute w-1/3 p-2 md:p-10 flex flex-col md:gap-4 justify-center h-full overflow-auto">
            <p
                class="elyazisi text-[#A0D5FF] text-left font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                Sorumlu Operasyonlar
            </p>
            <p class="text-left text-sm lg:text-lg xl:text-xl hidden md:block">
                Tercih edilen bir işveren ve iş ortağı
            </p>
        </div>
    </div>
</template>

<style>
@font-face {
    font-family: "elyazisi";
    src: url("/fonts/Amsterdam-Signature.ttf");
}

.elyazisi {
    font-family: "elyazisi";
}
</style>
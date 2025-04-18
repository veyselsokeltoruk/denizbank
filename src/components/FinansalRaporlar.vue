<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-blue-50/50 to-white flex justify-center py-16">
    <div class="m-4 max-w-[1024px] w-full flex flex-col justify-center">
      <h1 class="text-[#072CAD] font-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-12 relative">
        Finansal Raporlar
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#072CAD] mt-2 rounded-full"></div>
      </h1>

      <!-- Download All Button -->
      <div class="mt-10 flex justify-center">
        <a href="/denizefr24/is_bankasi_faaliyet_raporu_web.pdf" target="_blank"
           class="flex items-center gap-2 bg-[#072CAD] text-white px-6 py-3 rounded-full hover:bg-[#0A3BCE] transition-all shadow-md hover:shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Tüm Raporu İndir
        </a>
      </div>
    </div>
  </div>
</template>

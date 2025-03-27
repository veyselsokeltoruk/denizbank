<template>
  <div class="floating-button-container">
    <button
      @click="scrollToTop"
      :class="['floating-button', { 'visible': showButton }]"
      aria-label="Sayfanın başına dön"
    >
      <ChevronUp class="h-6 w-6" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp } from 'lucide-vue-next';

const showButton = ref(false);

// Check scroll position to show/hide button
const handleScroll = () => {
  if (window.scrollY > 300) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.floating-button-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
}

.floating-button {
  background-color: #06BFDD;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(6, 191, 221, 0.3);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.floating-button:hover {
  background-color: #05a8c2;
  transform: translateY(0) scale(1.1);
}

.floating-button.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

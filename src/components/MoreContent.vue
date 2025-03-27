<template>
    <div class="text-black">
        <div class="arrow z-50 h-8 w-8 fixed bottom-10 left-4" ref="arrowElement">
            <img src="/scroll-down.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrowElement: null,
        };
    },
    mounted() {
        this.arrowElement = this.$refs.arrowElement;
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            const threshold = window.innerHeight * 0.25;
            const opacity = Math.max(0, 1 - (scrollPosition / (window.innerHeight * 0.5)));

            this.arrowElement.style.opacity = opacity;
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
.arrow {
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
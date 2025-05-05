<template>
  <div v-if="!simple" class="stat-card bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
    <div class="stat-icon mb-4">
      <div class="bg-[#E0F7FB] p-3 rounded-full inline-flex items-center justify-center w-16 h-16">
        <component :is="iconComponent" class="w-8 h-8 text-[#06BFDD]" />
      </div>
    </div>

    <div class="stat-value-container mb-2 flex items-center justify-center">
      <template v-if="prefix">
        <span class="text-2xl font-bold text-[#06BFDD]">{{ prefix }}</span>
      </template>

      <count-up
        :end-val="value"
        :duration="2.5"
        :delay="0.5"
        :options="countUpOptions"
        :decimal-places="decimalPlaces"
        class="text-2xl font-bold text-[#06BFDD]"
      />

      <template v-if="suffix">
        <span class="text-2xl font-bold text-[#06BFDD] ml-1">{{ suffix }}</span>
      </template>
    </div>

    <div class="stat-label text-center">
      <p class="text-gray-700 font-medium">{{ label }}</p>
    </div>
  </div>

  <!-- Simple version for swiper -->
  <div v-else class="simple-stat flex flex-col items-center">
    <div class="flex justify-center items-baseline">
      <template v-if="prefix">
        <span class="text-xl sm:text-2xl text-[#06BFDD] font-light">{{ prefix }}</span>
      </template>

      <count-up
        :end-val="value"
        :duration="3"
        :delay="1"
        :options="countUpOptionsSimple"
        :decimal-places="decimalPlaces"
        class="text-xl sm:text-2xl text-[#06BFDD] font-light"
      />

      <template v-if="suffix">
        <span class="text-xl sm:text-2xl text-[#06BFDD] font-light ml-1">{{ suffix }}</span>
      </template>
    </div>

    <p class="text-black text-xl font-light">{{ label }}</p>
  </div>
</template>

<script setup>
import {
BarChart3,
Building2,
CreditCard,
DollarSign,
LineChart,
Percent,
TrendingUp,
User,
Users,
Wallet
} from 'lucide-vue-next';
import { computed } from 'vue';
import CountUp from 'vue-countup-v3';

// Define props
const props = defineProps({
  value: {
    type: [Number, String],
    required: true
  },
  label: {
    type: String,
    required: true
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'chart'
  },
  decimalPlaces: {
    type: [Number, String],
    default: 0
  },
  simple: {
    type: Boolean,
    default: false
  }
});

// CountUp options for regular cards
const countUpOptions = {
  enableScrollSpy: true,
  scrollSpyOnce: true,
  scrollSpyDelay: 200,
  decimal: ',',
  separator: '.'
};

// CountUp options for simple swiper slides
const countUpOptionsSimple = {
  enableScrollSpy: true,
  scrollSpyOnce: true,
  scrollSpyDelay: 300,
  decimal: ',',
  separator: '.'
};

// Compute the icon component based on the icon prop using Lucide icons
const iconComponent = computed(() => {
  const icons = {
    bank: Building2,
    people: Users,
    employee: User,
    percentage: Percent,
    'money-growth': TrendingUp,
    profit: LineChart,
    equity: Wallet,
    'market-value': DollarSign,
    atm: CreditCard,
    chart: BarChart3
  };

  return icons[props.icon] || BarChart3;
});
</script>

<style scoped>
.stat-card {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, transparent, #06BFDD, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-icon {
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
}

/* Simple stat for swiper */
.simple-stat {
  text-align: center;
  padding: 0.5rem;
}
</style>

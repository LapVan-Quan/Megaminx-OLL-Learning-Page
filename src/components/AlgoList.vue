<template>
  <div>
    <div v-for="(algos, category) in groupedAlgorithms" :key="category">
      <h2 class="category-title">{{ category }}</h2>
      <div class="algo-grid">
        <AlgoCard v-for="algo in algos" :key="algo.id" :algo="algo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AlgoCard from './AlgoCard.vue'
defineProps(['groupedAlgorithms'])
</script>

<style>
  /* Overall spacing between groups */
.category-title {
  margin: 40px 0 16px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;

  color: #e5e7eb;
  position: relative;
}

/* Subtle divider line under title */
.category-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  margin: 10px auto 0;
  border-radius: 999px;
  background: linear-gradient(90deg, #6366f1, #22d3ee);
}

/* Grid for Algo cards */
.algo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;

  padding: 10px 0 30px;
}

/* Optional: subtle group container effect */
.algo-grid {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
}
</style>

<template>
  <div>
    <h2>{{ algo.name }}</h2>
    <p>{{ algo.category }}</p>
    <img v-if="algo.url" :src="algo.url" :alt="algo.name" />
    <p><strong>{{ algo.moves }}</strong></p>
  </div>
</template>

<script setup>
defineProps(['algo'])
</script>

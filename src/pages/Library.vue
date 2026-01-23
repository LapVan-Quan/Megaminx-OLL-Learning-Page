<template>
  <div>
    <h1>Algorithm Library</h1>
    <SearchBar v-model="query" />
    <AlgoList :groupedAlgorithms="groupedAlgorithms" />
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { algsGroups, scrambles } from '../data/scrambles'
import SearchBar from '../components/SearchBar.vue'
import AlgoList from '../components/AlgoList.vue'

const query = ref('')
const algorithmsArray = computed(() => Object.values(scrambles))

const filteredAlgorithms = computed(() => {
  if (!query.value) return algorithmsArray.value

  return algorithmsArray.value.filter(algo =>
    algo.name.toLowerCase().includes(query.value.toLowerCase())
  )
})

const groupedAlgorithms = computed(() => {
  const result = {}

  for (const [groupName, ids] of Object.entries(algsGroups)) {
    const algos = ids
      .map(id => scrambles[id])
      .filter(algo =>
        algo &&
        algo.name.toLowerCase().includes(query.value.toLowerCase())
      )

    if (algos.length > 0) {
      result[groupName] = algos
    }
  }

  return result
})

</script>

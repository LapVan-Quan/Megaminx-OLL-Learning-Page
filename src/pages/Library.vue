<template>
  <div>
    <h1>Algorithm Library</h1>
    <SearchBar v-model="query" />
    
    <!-- Group Filter -->
    <div class="selector-container" :class="{ open: isOpen }">
      <div class="selector-header" @click="isOpen = !isOpen">
        <h3>Filter by Group</h3>
        <span class="chevron">⌄</span>
      </div>

      <transition name="collapse">
        <div v-show="isOpen" class="selector-body">
          <div class="group-selector">
            <label
              v-for="(value, key) in algsGroups"
              :key="key"
              class="group-chip"
            >
              <input
                type="checkbox"
                :value="key"
                v-model="selectedGroups"
              />
              <span>{{ key }}</span>
            </label>
          </div>
        </div>
      </transition>
    </div>

    <AlgoList :groupedAlgorithms="groupedAlgorithms" />
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { algsGroups, scrambles } from '../data/scrambles'
import SearchBar from '../components/SearchBar.vue'
import AlgoList from '../components/AlgoList.vue'

const query = ref('')
const selectedGroups = ref([])
const isOpen = ref(false)
const algorithmsArray = computed(() => Object.values(scrambles))

const filteredAlgorithms = computed(() => {
  let result = algorithmsArray.value

  // Filter by search query
  if (query.value) {
    result = result.filter(algo =>
      algo.name.toLowerCase().includes(query.value.toLowerCase())
    )
  }

  // Filter by selected groups
  if (selectedGroups.value.length > 0) {
    const selectedGroupIds = selectedGroups.value.flatMap(
      group => algsGroups[group]
    )
    result = result.filter(algo => selectedGroupIds.includes(algo.id))
  }

  return result
})

const groupedAlgorithms = computed(() => {
  const result = {}

  for (const [groupName, ids] of Object.entries(algsGroups)) {
    const algos = ids
      .map(id => scrambles[id])
      .filter(algo => algo && filteredAlgorithms.value.includes(algo))

    if (algos.length > 0) {
      result[groupName] = algos
    }
  }

  return result
})

</script>

<style scoped>
.selector-container {
  max-width: 900px;
  margin: 20px auto;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  transition: box-shadow 0.25s ease;
}

.selector-container.open {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.selector-header {
  padding: 16px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
}

.selector-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.chevron {
  transition: transform 0.3s ease;
  font-size: 1.2rem;
}

.selector-container.open .chevron {
  transform: rotate(180deg);
}

.selector-body {
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.group-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.group-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.group-chip:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
}

.group-chip input[type="checkbox"] {
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.group-chip input[type="checkbox"]:checked + span {
  color: #6366f1;
  font-weight: 600;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
}

.collapse-enter-from {
  opacity: 0;
  max-height: 0;
}

.collapse-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>

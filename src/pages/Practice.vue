<template>
  <div>
    <div class="practice">
      <div class="practice-card">
        <h1 class="practice-title">Practice Mode</h1>

        <div class="practice-algo">
          <h2>Scramble</h2>
          <p>{{ currentScramble["scramble"] || 'Select a group to start' }}</p>
          <img v-if="currentScramble" :src="currentScramble.url"/>
        </div>
        <div>
          <Timer :onStop="nextScramble"/>
        </div>

        <div class="practice-actions">
          <button
            @click="nextScramble"
            class="btn btn-primary"
            :disabled="selectedGroups.length === 0"
          >
            Next Scramble
          </button>
        </div>
      </div>
    </div>

    <div class="selector-container" :class="{ open: isOpen }">
      <div class="selector-header" @click="isOpen = !isOpen">
        <h1>Practice By Group</h1>
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
                @change="nextScramble"
              />
              <span>{{ key }}</span>
            </label>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { scrambles, algsGroups } from '../data/scrambles'
import Timer from '../components/Timer.vue'

const selectedGroups = ref([])   // multiple groups
const currentScramble = ref({})
const isOpen = ref(true)


function nextScramble() {
  if (selectedGroups.value.length === 0) return

  // collect all case IDs from selected groups
  const allCases = selectedGroups.value.flatMap(
    group => algsGroups[group]
  )

  // pick a random case
  const randomCase =
    allCases[Math.floor(Math.random() * allCases.length)]

  // pick a random scramble from that case
  const caseScrambles = scrambles[randomCase]
  currentScramble.value = caseScrambles
}
</script>

<style>
.selector-container {
  max-width: 900px;
  margin: 30px auto;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  transition: box-shadow 0.25s ease;
}

.selector-container.open {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

/* Header */
.selector-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 26px;
  cursor: pointer;
  user-select: none;
}

.selector-header h1 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #e5e7eb;
}

/* Chevron */
.chevron {
  font-size: 1.4rem;
  color: #94a3b8;
  transition: transform 0.3s ease;
}

.selector-container.open .chevron {
  transform: rotate(180deg);
}

/* Body */
.selector-body {
  padding: 0 26px 26px;
}

/* Collapse animation */
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
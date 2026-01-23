<template>
    <div class="timer" :class="{ running: isRunning }">
    {{ formattedTime }}
    </div>
    <p class="hint">Press <b>Space</b> to start / stop</p>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  onStop: {
    type: Function,
    required: true
  }
})

/* ===== TIMER ===== */
const time = ref(0)
const isRunning = ref(false)
const justStopped = ref(false)
let interval = null

const formattedTime = computed(() => {
  const ms = time.value % 1000
  const totalSeconds = Math.floor(time.value / 1000)
  const seconds = totalSeconds % 60
  const minutes = Math.floor(totalSeconds / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}.${ms
    .toString()
    .padStart(3, '0')}`
})

function start() {
  if (justStopped.value) {
    time.value = 0
    justStopped.value = false
  }

  const startTime = Date.now() - time.value

  interval = setInterval(() => {
    time.value = Date.now() - startTime
  }, 10)

  isRunning.value = true
}

function stop() {
  clearInterval(interval)
  interval = null
  isRunning.value = false
  justStopped.value = true

  props.onStop()
}

function toggle() {
  isRunning.value ? stop() : start()
}


function handleKey(e) {
  if (e.code === 'Space') {
    e.preventDefault()
    toggle()
  }
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<style>
    .timer {
  margin: 30px auto 10px;
  font-size: 4rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
  text-align: center;
  color: #e5e7eb;
  user-select: none;
}

.timer.running {
  color: #22d3ee;
}

.hint {
  text-align: center;
  opacity: 0.6;
  font-size: 0.9rem;
}
</style>

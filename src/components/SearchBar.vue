<template>
  <input v-model="value" placeholder="Search algorithms..." />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

// Bridge the v-model contract to emit updates to the parent
const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

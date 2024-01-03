<template>
  <div>
    <select v-model="selectedOption" @change="emitChangeEvent">
      <option value="default">Default</option>
      <option value="asc">Name ASC</option>
      <option value="desc">Name DESC</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = definedEmits(['update:modelValue'])
const selectedOption = ref('default')

const emitChangeEvent = () => {
  emit('update:modelValue', selectedOption.value)
}
</script>

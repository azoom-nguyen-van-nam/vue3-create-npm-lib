<script setup lang="ts">
import { reactive } from 'vue'

type Props = {
  primary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  primary: false
})

const { primary } = reactive(props)
</script>

<template>
  <button class="cris-btn" :class="{ primary }">
    <slot></slot>
  </button>
</template>

<style scoped>
.cris-btn {
  padding: 0.6rem 1.25rem;
  background-color: #747bff;
  border: 0;
}
.cris-btn:hover {
  background-color: #535bf2;
}
</style>

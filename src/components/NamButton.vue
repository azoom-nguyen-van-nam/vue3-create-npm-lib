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
  <button class="nam-btn" :class="{ primary }">
    <slot></slot>
  </button>
</template>

<style scoped>
.nam-btn {
  padding: 0.6rem 1.25rem;
  background-color: #ffd374;
  border: 0;
}
.nam-btn:hover {
  background-color: #f2ef53;
}
</style>

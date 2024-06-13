<template>
  <header class="header">
    <h1>Todos</h1>

    <input
      type="text"
      class="new-todo"
      placeholder="Entrez une tâche"
      autofocus
      autocomplete="off"
      @keyup.enter="emit('add-todo', ($event.target as HTMLInputElement).value)"
    />
  </header>
</template>

<script setup lang="ts">
// const emit = defineEmits(['add-todo']);
const emit = defineEmits<{
  (e: 'add-todo', value: string): void
}>()
</script>

<style scoped></style>

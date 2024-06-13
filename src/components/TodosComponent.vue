<template>
  <div>
    <!-- En-tête (titre, input) -->
    <TodoHeader />
    <!-- Liste des tâches -->

    <!-- Filtres -->
    <TodoFooter />
  </div>
</template>

<script setup lang="ts">
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
</script>

<style></style>

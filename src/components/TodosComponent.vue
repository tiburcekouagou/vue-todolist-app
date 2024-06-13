<template>
  <div>
    <!-- En-tête (titre, input) -->
    <TodoHeader />
    <!-- /En-tête (titre, input) -->

    <!-- Liste des tâches -->
    <main class="main">
      <div class="toggle-all-container">
        <input type="checkbox" id="toggle-all-input" class="" />
        <label for="toggle-all-input" class="">Tout afficher</label>
      </div>

      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" :id="todo.id" class="toggle" />
            <label :for="todo.id">{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </main>
    <!-- /Liste des tâches -->

    <!-- Filtres -->
    <TodoFooter />
    <!-- / Filtres -->
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '@/@types'
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import { ref } from 'vue'

const todos = ref<Todo[]>([
  { id: 'cf972fd6-8ca0-4c38-af79-b726e367d618', title: 'Ma tâche 1', completed: false },
  { id: 'ab81b122-4df5-47a3-982d-cbc928c35a18', title: 'Ma tâche 2', completed: false },
  { id: '8aed622a-90b1-4976-a430-97b6fc74b0a6', title: 'Ma tâche 3', completed: false }
])
</script>

<style></style>

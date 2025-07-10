<script setup>
  import { useBookStore } from '../stores/books';
  import {RouterLink} from 'vue-router';
  
  const bookStore = useBookStore();
  

 
  
</script>

<template>
  <div>
    <img src="../assets/kuromi serika.png" width="75px" alt="serika from blue archive">
  </div>
  Book List
  <div>
    <ul>
      <li v-for=" (book,index) in bookStore.books">
        {{ index }} name: {{ book.name }} author: {{ book.author }} pages: {{ book.pages }}
        <RouterLink :to="{name: 'book-edit', params: {id: index} }">
        <button>edit</button> 
        </RouterLink>
        <button @click="bookStore.removeBook(index)">remove</button>
      </li>
      
    </ul>
    <RouterLink :to= "{name: 'book-create'}">create a book</RouterLink>
  </div>
  
</template>

import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: []
  }),
  actions: {

    addBook (bookData){
      this.books.push(bookData)
    },
    removeBook (bookIndex){
      this.books.splice(bookIndex, 1)
    },
    editBook (bookIndex, bookData){
      this.books.splice(bookIndex, 1, bookData)
    }
    
  }
})
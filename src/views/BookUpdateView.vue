<script setup>
    import { ref, reactive, onMounted, computed} from 'vue';
    import { RouterLink, useRouter,useRoute} from "vue-router";
    import { useBookStore} from "../stores/books";
    

        
    const router = useRouter();
    const bookStore = useBookStore();
    const route = useRoute();

    const mode = ref('create');
    const Id = ref(0);
    const bookData = reactive({
        name: '',
        author: '',
        pages: 0,
     
    })
    
    const  addBook = () =>{
        if(mode.value === 'book-edit'){
            bookStore.editBook(Id.value, bookData);
        }
        else{
            bookStore.addBook(bookData);
        }

        console.log(bookData);
        router.push({name: 'book-list'});
        
    }   

    const ButtonText = computed(() =>{
        if(mode.value === 'book-edit'){
            return 'Edit';
            
        }else{
            return 'Create';
        }
    })

    onMounted(() => {
        if(route.name == "book-edit"){
            mode.value = route.name;
            Id.value = parseInt(route.params.id);
            const curBook = bookStore.books[Id.value];
            bookData.name = curBook.name;
            bookData.author = curBook.author;
            bookData.pages = curBook.pages;
        }
        
    })
    
</script>

<template>
    <div>
        <img src="../assets/kuromi serika2.png" width="75px" alt="serika from blue archive 2">
    </div>
    Book Update View
    <div>
        name: <input type="text" v-model="bookData.name" >
    </div>
    <div>   
        author: <input type="text" v-model="bookData.author">
    </div>
    <div>
        pages: <input type="number" v-model="bookData.pages">
    </div>
    <button @click="addBook()">{{ ButtonText }} book</button>
    <RouterLink :to="{name: 'book-list'}">back</RouterLink>
</template>
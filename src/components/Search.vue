<template>
    <div>
        <input type="text" :placeholder=placeholder v-model="query" v-on:keyup.enter="searchQuery">
        <button @click="searchQuery"><i class="fa fa-search" ></i></button>
    </div>
</template>

<script>

export default {
    name: 'Search',
    props: ['placeholder'],
    data(){
      return{
          query: ''
      }
    },
    methods:{
      searchQuery(query){
          this.$emit("click", this.query)
      }
  } 
}
</script>

<style scoped>

input{border-radius: 10px; padding-left: 5px; outline:none; border: 0; width: 80%;}
button{cursor: pointer; background: none; border:0; padding-left: 5px; outline: none;}

</style>
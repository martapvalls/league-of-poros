<template>
    <div>
        <input type="text" placeholder="Search your champion" v-model="query">
        <button @click="searchChampion"><i class="fa fa-search" ></i></button>
    </div>
</template>

<script>
//import {searchChampion} from '../logic/champions.js'

export default {
    name: 'Search',
    data(){
      return{
          query: ''
      }
    },
    methods:{
      searchChampion(query){
          this.$emit("click", this.query)
      }
  } 
}
</script>

<style scoped>

input{border-radius: 10px; padding-left: 5px; outline:none; border: 0;}
button{cursor: pointer; background: none; border:0; padding-left: 5px; outline: none;}

</style>
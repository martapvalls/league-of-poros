<template>
<div>
  <Header/>
  <div class="home">
    <h1>Welcome to League of Poros</h1>
    <img src="../assets/gifs/poro.gif">
    <h2 @click="goToChampions">See al champs</h2>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  methods: {
    goToChampions(){
      this.$router.push({ path: '/champions' })
    }
  }
}
</script>

<style scoped>
h2{
  cursor: pointer;
}
</style>
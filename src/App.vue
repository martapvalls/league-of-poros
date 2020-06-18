<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @changeMode="changeMode"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'app',
  data(){
    return{
      mode: 'dark'
    }
  },
  components: {
    Header
  },
  methods:{
    changeMode(){
      if(this.mode === 'dark'){
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style>
   @import './assets/css/index.css';
   


</style>

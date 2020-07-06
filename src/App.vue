<template>
  <div class="app" :class="mode">
    <Header :mode="mode" @changeMode="changeMode"/>
    <router-view/>
    <Footer style="position: fixed; bottom: 0; width: 100%;"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  data(){
    return{
      mode: 'dark'
    }
  },
  components: {
    Header, Footer
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

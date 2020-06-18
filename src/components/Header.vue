<template>
<div>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <span @click="$emit('changeMode')"> {{mode}} mode </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['mode']
}
</script>

<style scoped>

.nav{
  padding: 10px;
}


</style>
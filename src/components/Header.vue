<template>
<div>
    <div id="nav" class="nav">
      <router-link tag='li' to="/">Home</router-link> | 
      <span @click="$emit('changeMode')" style="cursor: pointer; padding: 0 5px"> {{mode}} mode </span>
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
  display: flex;
  justify-content: center;
}

li{ list-style: none; padding: 0 5px; cursor: pointer;}

</style>
<template>
<div>
    <div id="nav" class="nav">
      <router-link tag='li' to="/">Home</router-link> |
      <router-link tag='li' to="/champions">Champions</router-link> | 
      <router-link tag='li' to="/summoner">Summoners</router-link> |
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

.nav{padding: 10px; display: flex; justify-content: center}

li{list-style: none; padding: 0 5px; cursor: pointer}

</style>
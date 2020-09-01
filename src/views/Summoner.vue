<template>
    <div class="home">
        <h1>search for a summoner</h1>
        <Search :placeholder='placeholder' style="width: 300px"/>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
    name: 'Summoner',
    components: { Search },
    data(){
        return{
            placeholder: 'Summoner Name'
        }
    }
}
</script>

<style scoped>

.home{
    background-image: url(https://www.pcclean.io/wp-content/uploads/2019/04/559308.jpg);
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
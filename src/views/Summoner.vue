<template>
    <div class="home">
        <h1>search for a summoner</h1>
        <Search @click="searchSummoner" :placeholder='placeholder' style="width: 300px"/>
        <div v-if="summoner">
            <h1> holiii </h1>

        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Summoner',
    components: { Search },
    data(){
        return{
            placeholder: 'Summoner Name'
        }
    },
    computed:{
        ...mapState(['summoner'])  
    },
    methods:{
        ...mapActions(['getSummoner']),
        searchSummoner($event){
            this.getSummoner($event)
            this.$router.push({ path: `/summoner/${$event}` })
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
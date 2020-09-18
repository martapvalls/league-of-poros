<template>
    <div class="home">
        <h1>search for a summoner</h1>
        <div class="search">
            <Search @click="searchSummoner" :placeholder='placeholder' style="width: 300px"/>
        </div>
        <div class="error" v-if="error">
            <h1> {{this.error}} </h1>

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
            placeholder: 'Summoner Name',
            error: undefined
        }
    },
    computed:{
        ...mapState(['summoner'])  
    },
    methods:{
        ...mapActions(['getSummoner']),
        async searchSummoner($event){
            try{
                const response = await this.getSummoner($event)
                this.$router.push({ path: `/summoner/${$event}` })
            }catch(error){
                console.error(error)
                this.error = 'Summoner not found'
            }
        }
    }
}
</script>

<style scoped>

.home{
    background-image: url(https://images4.alphacoders.com/600/thumb-1920-600528.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.error{
    background-color: #d45e5999;
    width: 30%;
    height: 15%;
    border-radius: 15px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
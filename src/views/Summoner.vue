<template>
    <div class="home">
        <h1>search for a summoner</h1>
        <div class="search">
            <Search @click="searchSummoner" :placeholder='placeholder' style="width: 300px"/>
        </div>
        <Loading v-if="isLoading" style="position: absolute; bottom: -100px"/>
        <div class="error" v-if="error">
            <h1> {{this.error}} </h1>

        </div>
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Loading from '@/components/Loading.vue'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Summoner',
    components: { Search, Loading },
    data(){
        return{
            placeholder: 'Summoner Name',
            error: undefined,
            isLoading: false
        }
    },
    computed:{
        ...mapState(['summoner'])  
    },
    methods:{
        ...mapActions(['getSummoner']),
        async searchSummoner($event){
            this.isLoading = true
            try{
                const response = await this.getSummoner($event)
                this.$router.push({ path: `/summoner/${$event}` })
            }catch(error){
                console.error(error)
                this.error = 'Summoner not found'
            }finally{
                this.isLoading = false
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
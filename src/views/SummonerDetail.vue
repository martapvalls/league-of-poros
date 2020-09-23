<template>
    <div class="summoner">
       <h1>Summoner Detail</h1>
       <p class="summoner-back-btn" @click="onBack">Back</p>
       <div class="summoner-info" v-if="summoner">
           <img class="summoner-img" :src="`http://ddragon.leagueoflegends.com/cdn/${jsonVersion}/img/profileicon/${summoner.profileIconId}.png`" alt="profile icon">
           <div>
                <span class="summoner-name"> {{summoner.name}} </span> <br>
                <span> level : {{summoner.summonerLevel}} </span>
           </div>
       </div>
       <div class="summoner-champs">

       </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'SummonerDetail',
    data(){
        return{
            jsonVersion: '10.19.1'
        }
    },
    computed:{
        ...mapState(['summoner']) 
    },
    methods:{
        onBack(){
            this.$router.push({ path: `/summoner` })
        }
    } 
}
</script>

<style scoped>
.summoner{padding: 0 200px;}
.summoner-info{
    border: 3px solid red; 
    display: flex;
    justify-content: center;
    align-items: center;
    }
.summoner-img{border-radius: 50%; width: 10%; margin: 10px;}
.summoner-name{font-size: 2rem;}
.summoner-back-btn{cursor: pointer; text-align: left}

</style>
<template>
    <div class="summoner">
       <h1>Summoner Detail</h1>
       <div class="summoner-info">
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
            jsonVersion: '10.18.1'
        }
    },
    computed:{
        ...mapState(['summoner']) 
    }
   
}
</script>

<style scoped>
.summoner-info{
    border: 3px solid red; 
    display: flex;
    justify-content: center;
    align-items: center;
    }
.summoner-img{border-radius: 50%; width: 10%; margin: 10px;}
.summoner-name{font-size: 2rem;}

</style>
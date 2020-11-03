<template>
    <div class="summoner">
       <h1 class="summoner-title">Summoner Detail</h1>
       <p class="summoner-back-btn" @click="onBack">Back</p>
       <div class="summoner-info" v-if="summoner">
           <img class="summoner-img" :src="`http://ddragon.leagueoflegends.com/cdn/${jsonVersion}/img/profileicon/${summoner.profileIconId}.png`" alt="profile icon">
           <div>
                <span class="summoner-name"> {{summoner.name}} </span> <br>
                <span> level : {{summoner.summonerLevel}} </span>
           </div>
       </div>
       <div class="summoner-champs" v-if="champions">
           <div v-for="c in champions" :key="c.championId" class="single-champ">
                <img class="single-champ__img" :src="`https://ddragon.leagueoflegends.com/cdn/${jsonVersion}/img/champion/${c.id}.png`" alt="champion image">
                <div>
                    <span> {{c.name}} </span> <br>
                    <span> Points: {{c.championPoints}} </span> <br>
                    <span> Level: {{c.championLevel}} </span>
                </div>
           </div>
       </div>

       <div class="summoner-rank" v-if="rank">
           <div v-for="r in rank" :key="r.leagueId">
                <div v-if="r.queueType == 'RANKED_SOLO_5x5'" class="rank-info">
                    <div>
                        <img :src="require('../assets/img/emblem/' + r.tier + '.png')" alt="" class="rank-img">
                    </div>
                    <h2> RANKED SOLO </h2>
                    <span> Tier: {{r.tier}} </span>
                    <span> Rank: {{r.rank}} </span>
                    <span> Points: {{r.leaguePoints}} </span>
                    <span> Wins: {{r.wins}} </span>
                    <span> Loses: {{r.losses}} </span>
                </div>
                <div v-if="r.queueType == 'RANKED_FLEX_SR'" class="rank-info">
                    <div>
                         <img :src="require('../assets/img/emblem/' + r.tier + '.png')" alt="" class="rank-img">
                    </div>
                    <h2> RANKED FLEX </h2>
                    <span> Tier: {{r.tier}} </span>
                    <span> Rank: {{r.rank}} </span>
                    <span> Points: {{r.leaguePoints}} </span>
                    <span> Wins: {{r.wins}} </span>
                    <span> Loses: {{r.losses}} </span>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {getMostUsedChamps, getRank} from '../logic/summoner.js'

export default {
    name: 'SummonerDetail',
    data(){
        return{
            jsonVersion: '10.22.1',
            champions: null,
            rank: null
        }
    },
    computed:{
        ...mapState(['summoner', 'id']) 
    },
    methods:{
        onBack(){
            this.$router.push({ path: `/summoner` })
        },
        async retrieveUsedChamps(){
            try{
                const response = await getMostUsedChamps(this.id)
                this.champions = response
            }catch(error){
                throw new Error(`Something failed`)
            }
        },
        async getRank(){
            try{
                const response = await getRank(this.id)
                this.rank = response
            }catch(error){
               throw new Error(error.message) 
            }
        }
    },
    created(){
        this.retrieveUsedChamps()
        this.getRank()
    } 
}
</script>

<style scoped>
.summoner{padding: 0 200px; display: flex; flex-wrap: wrap;}
.summoner-title{width: 100%;}
.summoner-info{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    }
.summoner-img{border-radius: 50%; width: 10%; margin: 10px 50px;}
.summoner-name{font-size: 2rem;}
.summoner-back-btn{cursor: pointer; text-align: left}

.summoner-champs{ width: 50%; display: flex; flex-direction: column; align-items: center;}
.single-champ{border: 1px dotted rgb(143, 147, 209); width: 50%; display: flex; align-items: center; justify-content: space-around; margin: 2%; padding: 1%;}
.single-champ__img{border-radius: 50%; width: 30%;}

.summoner-rank{width: 45%; display: flex; flex-direction: column;}
.rank-info{display: flex; flex-direction: column; margin: 5%; padding: 1%;border: 1px dotted rgb(143, 147, 209); }
.rank-img{width: 20%;}

img:hover {
	-webkit-transform: rotate(15deg) scale(1.4);
	transform: rotate(360deg) scale(1.4);
	transition: .5s ease-in-out;
}
</style>
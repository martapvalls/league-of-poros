<template>
    <div v-if="champion != null" class="champion-container">
        <h2 class="champion-name"> {{champion.name}}</h2>   <span style="cursor: pointer" @click="onBack">Back</span>
        <h3 class="champion-title">{{champion.title}}</h3>
        <div>
            <img :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`" alt="champion image">
        </div>
        <div class="champion-history">
            <p class="champion-lore">{{champion.lore}}</p>
            <br>
            <h2>Spells</h2>
            <br>
            <div class="spells">
                <div  v-for="spell in champion.spells" alt="champion spells" :key="spell.id"  >
                    <div @click="showSpellDetail(spell)" class="spell-container">
                        <img class="spell-img" :src="`https://ddragon.leagueoflegends.com/cdn/${jsonVersion}/img/spell/${spell.image.full}`">
                        <p> {{spell.name}} </p>
                    </div>  
                </div>
            </div>
            <br>
            <div class="spell-detail" v-if="spell">
                <p> {{spell.description}} </p>
                <br>
                <p>Cost: {{spell.costBurn}} </p>
                <br>
                <p>Cooldown: {{spell.cooldownBurn}} </p>
            </div>
            <br>
            <div class="spell-detail">
                <h2>Passive: {{champion.passive.name}}  </h2>
                <br>
                <div class="passive-detail">
                    <img class="passive-img" :src="`http://ddragon.leagueoflegends.com/cdn/${jsonVersion}/img/passive/${champion.passive.image.full}`">
                    <p> {{champion.passive.description}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getSingleChampion} from '../logic/champions.js'


export default {
    name: 'ChampionDetail',
    data(){
        return{
            champion: null,
            spell: null,
            jsonVersion: '10.16.1'
        }
    },
    methods:{
        async retrieveChampion(){
            try{
                let champName = this.$route.params.name
                const response = await getSingleChampion(champName)
                this.champion = response.data.data[champName]
            }catch(error){
                throw new Error(`Something failed`)
            }
        },
        showSpellDetail(spell){
            this.spell = spell
        },
        onBack(){
            this.$router.push({ path: `/champions` })
        }
    },
    created(){
        this.retrieveChampion()
    }
}
</script>

<style scoped>

.champion-container{
    display: flex;
    flex-wrap: wrap;
    padding: 0 200px;
}

.champion-name{width: 100%; font-size: 3rem;}
.champion-title{width: 100%; font-size: 2rem;}
.champion-history{width: 65%}
.champion-lore{padding: 50px 20px 20px 20px;}
.spells{display: flex; justify-content: space-evenly;}
.spell-container{min-width: 120px; cursor: pointer;}
.spell-detail{padding: 0 20px;}
.passive-detail{display: flex;}
.spell-img{width: 60px;}
.passive-img{width: 60px; height: 60px; margin-right: 5px;}
</style>
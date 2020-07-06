<template>
    <div v-if="champion != null" class="champion-container">
        <h2 class="champion-name"> {{champion.name}}</h2>
        <h3 class="champion-title">{{champion.title}}</h3>
        <div>
            <img :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champion.name + '_0.jpg'" alt="champion image">
        </div>
        <div class="champion-history">
            <p class="champion-lore">{{champion.lore}}</p>
            <br>
            <h2>Spells</h2>
            <br>
            <div class="spells">
                <div  v-for="spell in champion.spells" alt="champion spells" :key="spell.id"  >
                    <div @click="showSpellDetail(spell)" class="spell-container">
                        <img :src="'http://ddragon.leagueoflegends.com/cdn/8.24.1/img/spell/' + spell.image.full">
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
            spell: null
        }
    },
    methods:{
        retrieveChampion(){
            let champName = this.$route.params.name
            getSingleChampion(champName).then(response => {
                this.champion = response.data.data[champName]
            })
        },
        showSpellDetail(spell){
            this.spell = spell
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

</style>
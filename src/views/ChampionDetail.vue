<template>
    <div>
        <h2> {{champion.name}}</h2>
    </div>
</template>

<script>
import {getSingleChampion} from '../logic/champions.js'

export default {
    name: 'ChampionDetail',
    data(){
        return{
            champion: null
        }
    },
    methods:{
        retrieveChampion(){
            let champName = this.$route.params.name
            console.log(champName)
            getSingleChampion(champName).then(response => {
                this.champion = response.data.data[champName]
                console.log(this.champion)
            })
        }
    },
    created(){
        this.retrieveChampion()
    }
}
</script>
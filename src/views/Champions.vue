<template>
    <div>
        <Header/>
        <div class="position-nav">
            <p class="position" @click="retrieveChampions">ALL</p>
            <p class="position" @click="retrieveTopChampions">TOP</p>
            <p class="position">JUNGLE</p>
            <p class="position">MID</p>
            <p class="position">SUPPORT</p>
            <p class="position">ADC</p>
        </div>
        <SingleChampion :champions="champions"/>     
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SingleChampion from '@/components/SingleChampion.vue'
import {getAllChampions, getTopChampions} from '../logic/champions.js'

export default {
    name: 'Champions',
    components: {
        Header,
        SingleChampion
    },
    data(){
        return {
            champions: null
        }
    },
    methods: {
        retrieveChampions(){
            getAllChampions().then(response => { 
                this.champions = response.data.data
            })
        },
        retrieveTopChampions(){
            getTopChampions().then(response => {
                this.champions = response
            })
            console.log(this.champions)
        }
    },
    created(){
        this.retrieveChampions()
    }
}
</script>

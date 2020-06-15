<template>
    <div>
        <Header/>
        <SingleChampion :champions="champions"/>     
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SingleChampion from '@/components/SingleChampion.vue'
import {getAllChampions} from '../logic/champions.js'

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
            console.log(this.champions)
        }
    },
    created(){
        this.retrieveChampions()
    }
}
</script>
<template>
    <div class="champions">
        <div class="position-nav">
            <p class="position" @click="retrieveChampions">ALL</p>
            <p class="position" @click="retrievePositionChampions('top')">TOP</p>
            <p class="position" @click="retrievePositionChampions('jungle')">JUNGLE</p>
            <p class="position" @click="retrievePositionChampions('mid')">MID</p>
            <p class="position" @click="retrievePositionChampions('support')">SUPPORT</p>
            <p class="position" @click="retrievePositionChampions('adc')">ADC</p>
            <Search @click="searchChampion"/>
        </div>
        <Loading v-if="isLoading"/>
        <SingleChampion :champions="champions" @go-to-detail-champion="goToDetailChampion"/>     
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SingleChampion from '@/components/SingleChampion.vue'
import Search from '@/components/Search.vue'
import Loading from '@/components/Loading.vue'
import {getAllChampions, getPositionChampions, searchChampion} from '../logic/champions.js'

export default {
    name: 'Champions',
    components: {
        SingleChampion,
        Loading,
        Search
    },
    data(){
        return {
            champions: null,
            isLoading: false
        }
    },
    methods: {
        retrieveChampions(){
            this.isLoading = true
            getAllChampions().then(response => { 
                this.champions = response.data.data
            }).finally(() => {
                this.isLoading = false
            })
        },
        retrievePositionChampions(position){
            this.isLoading = true
            getPositionChampions(position).then(response => {
                this.champions = response
            }).finally(() => {
                this.isLoading = false
            })
        },
        goToDetailChampion($event){
            this.$router.push({ path: `/champion/${$event}` })
        },
        searchChampion($event){

            this.isLoading = true
            searchChampion($event).then(response => { 
                this.champions = response
            }).finally(() => {
                this.isLoading = false
            })
        }
    },
    created(){
        this.retrieveChampions()
    }
}
</script>

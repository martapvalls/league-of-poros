<template>
    <div>
        <div class="position-nav">
            <p class="position" @click="retrieveChampions">ALL</p>
            <p class="position" @click="retrievePositionChampions('top')">TOP</p>
            <p class="position" @click="retrievePositionChampions('jungle')">JUNGLE</p>
            <p class="position" @click="retrievePositionChampions('mid')">MID</p>
            <p class="position" @click="retrievePositionChampions('support')">SUPPORT</p>
            <p class="position" @click="retrievePositionChampions('adc')">ADC</p>
        </div>
        <Loading v-if="isLoading"/>
        <SingleChampion :champions="champions"/>     
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SingleChampion from '@/components/SingleChampion.vue'
import Loading from '@/components/Loading.vue'
import {getAllChampions, getPositionChampions} from '../logic/champions.js'

export default {
    name: 'Champions',
    components: {
        Header,
        SingleChampion,
        Loading
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
        }
    },
    created(){
        this.retrieveChampions()
    }
}
</script>

<template>
    <div class="champions">
        <div class="position-nav">
            <p class="position" @click="retrieveChampions">ALL</p>
            <p class="position" @click="retrievePositionChampions('top')">TOP</p>
            <p class="position" @click="retrievePositionChampions('jungle')">JUNGLE</p>
            <p class="position" @click="retrievePositionChampions('mid')">MID</p>
            <p class="position" @click="retrievePositionChampions('support')">SUPPORT</p>
            <p class="position" @click="retrievePositionChampions('adc')">ADC</p>
            <Search @click="searchChampion" :placeholder="placeholder"/>
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
            isLoading: false,
            placeholder: 'Search your champion'
        }
    },
    methods: {
        async retrieveChampions(){
            this.isLoading = true
            try{
                const response = await getAllChampions()
                this.champions = response.data.data
            }catch(error){
                throw new Error(`Something failed`)
            } finally {
                this.isLoading = false
            }
        },
        async retrievePositionChampions(position){
            this.isLoading = true
            try{
                const response = await getPositionChampions(position)
                this.champions = response
            }catch(error){
                throw new Error(`Something failed`)
            } finally {
                this.isLoading = false
            }   
        },
        goToDetailChampion($event){
            this.$router.push({ path: `/champion/${$event}` })
        },
        async searchChampion($event){
            this.isLoading = true
            try{
                const response = await searchChampion($event)
                this.champions = response
            }catch(error){
                throw new Error(`Something failed`)
            }finally {
                this.isLoading = false
            }
        }
    },
    created(){
        this.retrieveChampions()
    }
}
</script>

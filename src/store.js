import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const {  VUE_APP_API_KEY: API_KEY  } = process.env

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        summoner: ''
    },
    mutations: {
        uploadSummoner(state, summonerAction){
            state.summoner = summonerAction
        }
    },
    actions: {
        async getSummoner({commit}, summonerName){
            try{
                const data = await axios.get(`https://skylabcoders.herokuapp.com/proxy?url=https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
                const _summoner = data.data
                commit('uploadSummoner', _summoner)
            }catch(error){
                throw error.message
            }
        }
    }
})
import axios from 'axios'

function getAllChampions(){
    return axios.get('http://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion.json')
}

export {
    getAllChampions
}
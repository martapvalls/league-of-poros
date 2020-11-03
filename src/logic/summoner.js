import axios from 'axios'
const jsonVersion = '10.22.1'
const {  VUE_APP_API_KEY: API_KEY  } = process.env

async function getMostUsedChamps(id){
    try{
        const data = await axios.get(`https://skylabcoders.herokuapp.com/proxy?url=https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${API_KEY}`)
        let sixChamps = data.data.slice(0, 6)
        try{
            const data = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${jsonVersion}/data/en_US/champion.json`)
            let champions = data.data.data
            champions = Object.values(champions)

            for(let i = 0; i < champions.length; i++){
                for(let j = 0; j < sixChamps.length; j++){
                    if(champions[i].key == sixChamps[j].championId){
                        sixChamps[j].id = champions[i].id
                        sixChamps[j].name = champions[i].name
                    }
                }
            } 
            return sixChamps    

        }catch(error){
            return error.message
        }
    }catch(error){
        return error.message
    }
    
}

async function getRank(id){
    const data = await axios.get(`https://skylabcoders.herokuapp.com/proxy?url=https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`)
    return data.data
}


export {
    getMostUsedChamps,
    getRank
}
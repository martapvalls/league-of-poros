import axios from 'axios'

function getAllChampions(){
    return axios.get('https://ddragon.leagueoflegends.com/cdn/10.12.1/data/en_US/champion.json')
}

const top = ['Aatrox', 'Akali', 'Camille', 'Cassiopeia', "Cho'Gath", 'Darius', 'Dr Mundo', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Heimerdinger', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'Kayle', 'Kennen', 'Kled', 'Malphite', 'Maokai', 'Mordekaiser', 'Nasus', 'Olaf', 'Ornn', 'Pantheon', 'Poppy', 'Quinn', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sett', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Teemo', 'Tryndamere', 'Urgot', 'Vladimir', 'Volibear', 'Wukong', 'Yasuo', 'Yorick']
const mid = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Annie',' Aurelion Sol', 'Azir', 'Brand', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Diana', 'Ekko', 'Fizz', 'Galio', 'Heimerdinger', 'Irelia', 'Jayce', 'Karthus', 'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lucian', 'Lux', 'Malphite', 'Malzahar', 'Neeko', 'Orianna', 'Ornn', 'Pantheon', 'Qiyana', 'Rumble', 'Ryze', 'Swain', 'Sylas', 'Syndra', 'Taliyah', 'Talon', 'Twisted Fate', 'Veigar', "Vel'Koz", 'Viktor', 'Vladimir', 'Xerath', 'Yasuo', 'Zed', 'Ziggs', 'Zilean', 'Zoe']
const jungle = ['Amumu', 'Dr Mundo', 'Ekko', 'Elise', 'Evelynn', 'Fiddlesticks', 'Gragas', 'Graves', 'Hecarim', 'Ivern', 'Jarvan IV', 'Jax', 'Karthus', 'Kayn', "Kha'Zix", 'Kindred', 'Lee Sin', 'Maestro Yi', 'Nidalee', 'Nocturne', 'Nunu y Willump', 'Olaf', 'Poppy', 'Rammus', "Rek'Sai", 'Rengar', 'Sejuani', 'Sett', 'Shaco', 'Shyvana', 'Skarner', 'Sylas', 'Trundle', 'Udyr', 'Vi', 'Volibear', 'Warwick', 'Wukong', 'Xin Zhao', 'Zac' ]
const support = ['Alistar', 'Bardo', 'Blitzcrank', 'Brand', 'Braum', 'Fiddlesticks', 'Galio', 'Janna', 'Karma', 'Leona', 'Lulu', 'Lux', 'Malphite', 'Maokai', 'Morgana', 'Nami', 'Nautilus', 'Pantheon', 'Poppy', 'Pyke', 'Rakan', 'Senna', 'Sett', 'Shaco', 'Shen', 'Sona', 'Soraka', 'Swain', 'Tahm Kench', 'Taric', 'Thresh', "Vel'Koz", 'Xerath', 'Yuumi', 'Zilean', 'Zyra']
const adc = ['Aphelios', 'Ashe', 'Caitlyn', 'Cassiopeia', 'Draven', 'Ezreal', 'Jhin', 'Jinx', "Kai'Sa", 'Kalista', "Kog'Maw", 'Lucian', 'Miss Fortune', 'Sivir', 'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah']

async function getPositionChampions(position){
    let champions = []
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json')
    let championsResp = response.data.data
    let championsArray = Object.values(championsResp)

    if(position == 'mid'){
        championsArray.forEach(champ => {
            if(mid.includes(champ.name)){
                champions.push(champ)
            }
        })
    }else if(position == 'jungle'){
        championsArray.forEach(champ => {
            if(jungle.includes(champ.name)){
                champions.push(champ)
            }
        })
    }else if(position == 'support'){
        championsArray.forEach(champ => {
            if(support.includes(champ.name)){
                champions.push(champ)
            }
        })
    }else if(position == 'adc'){
        championsArray.forEach(champ => {
            if(adc.includes(champ.name)){
                champions.push(champ)
            }
        })
    }else if(position == 'top'){
        championsArray.forEach(champ => {
            if(top.includes(champ.name)){
                champions.push(champ)
            }
        })
    }
    return champions
}

function getSingleChampion(champion){
    return axios.get(`https://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion/${champion}.json`)
}


async function searchChampion(query){
    let champions = []
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json')
    let championsResp = response.data.data
    let championsArray = Object.values(championsResp)

    championsArray.forEach(champ => {
        let champName = champ.name

        if(champName.toLowerCase().includes(query.toLowerCase())){
            champions.push(champ)
        }
    })
    
    return champions
}

export {
    getAllChampions,
    getPositionChampions,
    getSingleChampion,
    searchChampion
}


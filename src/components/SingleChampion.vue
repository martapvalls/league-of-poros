<template>
    <div class="body">

        <ul v-if="champions != null" class="champions-list">
            <li v-for="c in champions" :key="c.key" class="champion" @click="$emit('go-to-detail-champion', c.name)">
                 <span class="champion-name">{{c.name}}</span>
                <div class="champion-title">
                   
                    <img :src="'https://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/' + c.image.full " alt="">
                </div>
                <div class="champion-tags">
                    <li v-for="tag in c.tags"> {{tag}}</li>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SingleChampion',
    props: ['champions']
}
</script>

<style scoped>
.body{
    display: flex;
    justify-content: center;
}
.champions-list{
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    justify-content: center;
}
.champion{
    background-color: #b4b4c9;
    border-radius: 15px;
    margin: 2px;
}
.champion-name{
    width: 100%;
    font-size: 1.2rem;
}
.champion-title{
    display: flex;
    flex-direction: column;
    padding: 4px;
}

.champion-tags{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}

.dark .champion{
    background-color: #36363b;
}

@media (min-width: 500px) {
    .champions-list{
        padding: 0 10%;
    }
    .champion{
        display: flex;
        width: 180px;
        margin: 5px;
        flex-wrap: wrap;
    }
    img{
        width: 80px;
        border-radius: 15px;
    }
}
</style>
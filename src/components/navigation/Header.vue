<template>
    <div id="wrapper-header">
        <div id="header"> <span id="title">{{ title }}</span> </div>          
        <div id="header-desktop"> <img src="@/assets/logo-lottery.png" alt=""> <span id="title">{{ title }}</span></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            title: 'MEGA SENA'
        }
    },
    computed: {
        ...mapState({
        toggle: (state) => state.drawn.toggle
        }),
    },    
}
</script>
<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper-header {
    padding: 1em;
    text-align: center;
    border-bottom: solid white 1px;
    background: #2C3E50;
}
#lists {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#title {
    font-size: 3em;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
#header-desktop {
    display: none;
}
@media only screen and (min-width: 900px) {
    #header-desktop {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        img {
            max-width: 100px;
        }
    }
    #header {
        display: none;
    }    
}
</style>

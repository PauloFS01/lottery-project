<template>
    <div id="wrapper-header">
        <div id="header"> <span id="title">{{ title }}</span> </div>          
        <div id="header-desktop"> <span id="title">{{ title }}</span></div>
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
    padding: 2em;
    text-align: center;
    border-bottom: solid white 1px;
    background: #2C3E50;
}
#header {

}
#lists {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: middle;
}
#title {
    font-size: 3em;
    color: white;
    text-shadow: 4px 2px 3px $shadow;
}
#header-desktop {
    display: none;
}
@media only screen and (min-width: 900px) {
    #header-desktop {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
    #header {
        display: none;
    }    
}
</style>

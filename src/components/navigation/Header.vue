<template>
    <div id="wrapper">
        <div id="lists"  v-if="toggle">
            <router-link to="/">
                <i class="fa fa-arrow-left"></i>
            </router-link>
            <div id="title">{{ title }}</div>
            <i class="fas fa-search-dollar"></i>           
        </div>
        <div id="home"  v-else>
            <div id="title">{{ title }}</div>        
        </div>        
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
#wrapper {
    padding: 1em;
    text-align: center;
    border: solid white 1px;
}
i {
    font-size: 1.5em;
    color: $white;
    text-shadow: 4px 2px 3px $shadow;
}
#lists {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: middle;
}
#title {
    font-size: 2em;
    color: white;
    text-shadow: 4px 2px 3px $shadow;
}
</style>

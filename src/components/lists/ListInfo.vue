<template>
    <div id="wrapper-info">
        <h2>Premiação</h2>
        <span id="subtitle"> O prêmio corresponde a 45% da arrecadação. </span>
        <hr >
        <span class="award-line" v-for="(award, index) in awards" :key="index"> 
            {{ award }} 
        </span>
    </div>
</template>
<script>
export default {
    data () {
        return {
            awards: [
                '35% Para acertadores da Sena.',
                '19% Para acertadires de Quina.',
                '10% Para acertadores da Quarta.',
                '22% Ficam acumulados.',
                '5% Acumulam para a Mega da Virada.',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper-info {
    @include list-style;
}
h2 {
    margin: 0;
    padding: 0;
}
hr {
    border: solid $shadow 1px;
}
.award-line {
    display: flex;
    margin-top: 1em;
}
@media only screen and (min-width: 900px) {
    hr {
        border: solid white 1px;
    }    
}
</style>


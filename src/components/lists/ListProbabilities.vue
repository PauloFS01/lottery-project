<template>
    <div id="wrapper">
        <h2>Probabilidades:</h2>
        <span> Por tamanho da aposta. De 1 em: </span>
        <hr>
        <table>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>SENA</th>
                    <th>QUINA</th>
                    <th>QUADRA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prob, index) in probabilitie" :key="index">
                    <td> {{ prob.n }} </td>
                    <td> {{ prob.sena }} </td>
                    <td> {{ prob.quina }} </td>
                    <td> {{ prob.quadra }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            probabilitie: (state) => state.utils.probabilities
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper {
    @include list-style;
}
h2 {
    margin-top: 0;
}
table {
    width: 100%;
    text-align: center;
    th {
        padding: .5em;
    }
    td {
        padding-top: 1em;
        font-weight: bold;
    }
}
</style>

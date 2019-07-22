<template>
    <div id="wrapper-result">
        <span id="title">Resultados Obtidos:</span>
        <hr />
        <table>
            <tr>
                <th class="nums">MATCHS</th>
                <th class="">PREMIO</th>
                <th class="">DATA</th>
                <th class="conc">CONCURSO</th>
            </tr>
            <tbody>
                <tr class="tr-style" v-for="res of result" :key="res.id">
                    <td class="td-style nums">
                        <span v-for="(num, index) of res.result.drawn" :key="index">
                            <span class="num" :class="drawn.indexOf(num) === -1 ? '' : 'redNum' "> {{ num }} </span> 
                        </span>
                    </td>
                    <td class="td-style"> 12.00 </td>
                    <td class="td-style"> {{ res.result.date }} </td>
                    <td class="td-style conc"> {{ res.result.date }} </td>
                </tr>          
            </tbody>
        </table>
        <hr />
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            result: (state) => state.drawn.result,
            drawn: (state) => state.drawn.targetDrawn
        }),
    }
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper-result {
    @include result-list-style;
}
.td-style {
    padding: .5em;
}
.tr-style {
    &:nth-child(odd) {
        background: #F2F2F2;
    }    
}
#title {
    font-size: 1.8em;
    font-weight: bold;
}
table {
    width: 100%;
    text-align: center;
    margin-bottom: 2em;
}
.nums {
    margin: 0;
    padding: 0;
    text-align: left;
}
.num {
    font-weight: bold;
}
.conc {
    text-align: right;
}
.redNum {
    color: $danger-100;
}
</style>

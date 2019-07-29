<template>
  <div id="wrapper-frequencie">
    <b-table striped hover :items="newItem"></b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        items: [
          { Dezena: 40, Frequencia: '100'},
          { Dezena: 21, Frequencia: '35'},
          { Dezena: 89, Frequencia: '50'},
          { Dezena: 38, Frequencia: '58' }
        ],
        newItem: []
      }
    },
    computed: {
        ...mapState({
            result: (state) => state.drawn.result || '',
            drawn: (state) => state.drawn.targetDrawn || ''
        }),
    },
    methods: {
      createItens() {
        this.drawn.forEach(e => {
          let f = 0
          this.result.forEach(r => {
            if(r.result.drawn.indexOf(e) !== -1) {
              f += 1;
            }
          })
          this.newItem.push({
            den: e,
            frequency: f
          })
        })
      }
    },
    created() {
      this.createItens();
    }
  }
</script>
<style lang="scss" scoped>
#wrapper-frequencie {
  background: white;
  border-radius: 5px; 
  padding: 1em;
}
</style>

<template>
  <div id="wrapper-frequencie">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { Dezena: 40, Frequencia: '100'},
          { Dezena: 21, Frequencia: '35'},
          { Dezena: 89, Frequencia: '50'},
          { Dezena: 38, Frequencia: '58' }
        ]
      }
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

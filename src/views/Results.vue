<template>
  <div id="wrapper">
    <div id="description"> 
      <div id="div-back">
        <router-link  id="back-icon" to="/"> <i class="fas fa-arrow-left"></i> voltar</router-link>
      </div>
      <div id="formated-drawn">
        <span id="title-result">Showing results for:</span>
        <p>  {{ formatedDrawn }} </p> 
      </div>
    </div>
    <div class="list">
      <result-list />
    </div>
    <span id="title-freq">Frequência por dezena:</span>
    <div class="list">
      <list-frequencie />
    </div>    
  </div>
</template>

<script>
import ResultList from '@/components/lists/ResultList'
import ListFrequencie from '@/components/lists/ListFrequencie'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ResultList,
    ListFrequencie
  },
  computed: {
    ...mapState({
      drawn: (state) => state.drawn.targetDrawn,
      toggle: (state) => state.drawn.toggle
    }),
    formatedDrawn() {
      return this.drawn.join('-') || ''
    }
  },
  methods: {
    ...mapActions(['setResult', 'toggleChange'])
  },
  created() {
    this.toggleChange(true)
  }
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper {
  @include layout-wrapper;
}
.list {
  margin-bottom: 4em;
}
#description {
  margin-bottom: 1em;
}
#formated-drawn {
  font-size: 1.5em;
}
#title-result {
  font-weight: bold;
  margin-right: .8em;
}
#title-freq {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: .5em; 
  display: inline-block;
}
#back-icon {
  float: right;
  color: $white;
  text-decoration: none;
  font-size: 1em;
  i {
    margin-right: 1em;
  }
}
#div-back {
  //border: solid red 1px;
  height: 2em;
  padding:0;
}
</style>

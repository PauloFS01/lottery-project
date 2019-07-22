<template>
  <div id="wrapper">
    <div id="description">
      <div id="formated-drawn">
        <span id="title-result">Showing results for:</span>
        <span>  {{ formatedDrawn }} </span> 
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
  margin-top: .5em;
  font-size: 1.5em;
}
#title-result {
  font-weight: bold;
  font-size: 1.5em;
  margin-right: 1em;
}
#title-freq {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: .5em; 
  display: inline-block;
}
</style>

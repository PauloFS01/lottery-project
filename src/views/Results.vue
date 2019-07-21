<template>
  <div id="wrapper">
    <div id="description">
      <h1>Showing results for:</h1>
      <div id="formated-drawn">
        <span> {{ formatedDrawn }} </span> 
      </div>
    </div>
    <div class="list">
      <result-list />
    </div>
  </div>
</template>

<script>
import ResultList from '@/components/lists/ResultList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ResultList
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
#wrapper {
  padding: 1em;
}
.list {
  margin-bottom: 1em;
}
h1 {
  margin: 0;
  padding: 0;
}
#description {
  margin-bottom: 1em;
}
#formated-drawn {
  font-weight: bold;
  margin-top: .5em;
  font-size: 1.5em;
}
</style>

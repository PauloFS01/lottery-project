<template>
  <div id="wrapper">
    <div  id="form-drawn">
      <form-drawn @click="test" /> 
    </div>
    <div id="list-prob">
      <list-probalities /> 
    </div>    
    <div  id="list-info">
      <list-info />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormDrawn from '@/components/forms/FormDrawn'
import ListInfo from '@/components/lists/ListInfo'
import ListProbalities from '@/components/lists/ListProbabilities'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    FormDrawn,
    ListInfo,
    ListProbalities
  },
  computed: {
    ...mapState({
      toggle: (state) => state.drawn.toggle
    }),
  },
  methods: {
    ...mapActions(['setResult', 'toggleChange']),
    test(value) {
      this.setResult(value)
      this.$router.push('result')
    }
  },
  created() {
    // this.toggleChange(false)
  }
}
</script>

<style lang="scss" scoped>
@import '@/themes/_barrel.scss';
#wrapper {
  @include layout-wrapper;
}
#form-drawn {
  margin-bottom: 1em;
}
#list-info {
  margin-bottom: 1em;
}
@media only screen and (min-width: 900px) {
  #list-info {
    width: 50%;
    float: left;
    margin-left: 3em;
  }
  #list-prob {
    width: 45%;
    float: left;
  }
}
</style>

<template>
  <div id="wrapper">
    <div  id="form-drawn">
      <form-drawn @click="test" />
    </div>
    <div  id="list-info">
      <list-info />
    </div>
    <div>
      <list-probalities />
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
    this.toggleChange(false)
  }
}
</script>

<style lang="scss" scoped>
#wrapper {
  padding: 1em;
}
#form-drawn {
  margin-bottom: 1em;
}
#list-info {
  margin-bottom: 1em;
}
</style>

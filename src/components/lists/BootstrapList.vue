<template>
  <div>
    <b-table :items="items">
      <span slot="html" slot-scope="data" v-html="data.value"></span>
    </b-table>
  </div>    
</template>
<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'This is <i>escaped</i> content',
            html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
          },
          {
            text: 'This is <i>escaped</i> content',
            html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
          },
          {
            text: 'This is <i>escaped</i> content',
            html: 'This is <i>raw <strong>HTML</strong></i> <span style="color:red">content</span>'
          }
        ]
      }
    }    
}
</script>
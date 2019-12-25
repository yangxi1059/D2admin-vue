<template>
  <d2-container>
    <template slot="header">Success Stories</template>
    Hello Success Stories
  </d2-container>
</template>

<script>
import axios from 'axios'
// import { mapGetters } from 'vuex'
export default {
  name: 'SuccessStories',
  data () {
    return {
      msg: []
    }
  },
  mounted () {
    axios.get('/api/products').then((res) => {
      if (res.status === 200) {
        this.$store.dispatch('product/getProducts', res.data.product) // 模块化dispatch
        this.msg = this.$store.state.product
      }
    })
  }
}
</script>

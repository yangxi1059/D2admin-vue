<template>
  <d2-container>
    <List></List>
  </d2-container>
</template>

<script>
import List from '../Offers/index'
export default {
  name: 'Home',
  methods: {
  },
  data () {
    return {}
  },
  mounted () {
    let ws = new WebSocket('ws://localhost:9998/echo')
    console.log(ws)
    console.log(this.$store.state)
  },
  components: {
    List
  }
}
</script>

<style scoped>
</style>

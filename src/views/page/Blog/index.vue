<template>
  <d2-container>
    <List></List>
  </d2-container>
</template>

<script>
import List from '../Offers/index'
export default {
  name: 'Blog',
  methods: {
  },
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store.state)
  },
  components: {
    List
  }
}
</script>

<style scoped>
</style>

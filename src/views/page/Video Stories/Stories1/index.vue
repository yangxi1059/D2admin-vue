<template>
  <d2-container>
    <template slot="header">分享组件</template>
    <Share></Share>
  </d2-container>
</template>

<script>
import Share from '@/components/shares/index.vue'
export default {
  name: 'VideoStories1',
  components: {
    Share
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    // 语言标志符
    this.i18nHandle(this.$i18n.locale)
  },
  // 请求list页数据存到全局状态管理
  mounted () {
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
.preview figure {
    float: left;
    width: 30%;
    height:calc(30vw - 0px);
    margin: 1.5%;
  }
.preview figure img {
  width: 100%;
}
</style>

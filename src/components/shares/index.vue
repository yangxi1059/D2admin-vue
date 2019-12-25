<!--
 * @Author: 杨曦
 * @Date: 2019-10-31 09:31:43
 * @LastEditors: 杨曦
 * @LastEditTime: 2019-11-01 11:34:03
 * @Version: 
 * @Description: 
 -->
<template>
  <div ref="shareContainer">
    <el-row>
      <el-col style="width:61px">
        <jianshu-left-share  @shareToQQ="shareToQQ" @shareToQQzone="shareToQQzone" @shareToWeibo="shareToWeibo" @shareToDouban="shareToDouban"></jianshu-left-share>
      </el-col>
    </el-row>
    <wx-code-modal v-if="wxModal.show" :wxModal="wxModal" @hideWxCodeModal="hideWxCodeModal"></wx-code-modal>
  </div>
</template>

<script>
import JianshuLeftShare from './shares.vue'
export default {
  data () {
    return {
      wxModal: {
        show: false,
        width: '100px',
        height: '100px'
      }
    }
  },
  components: {
    JianshuLeftShare
  },
  mounted () {
  },
  methods: {
    hideWxCodeModal () {
      this.wxModal.show = false
    },
    // 分享到微信，显示微信二维码弹框；
    shareToWeixin () {
      this.wxModal.show = true
    },
    shareToQQ () {
      this.shareConfig('qq')
    },
    shareToQQzone () {
      this.shareConfig('qqZone')
    },
    shareToWeibo () {
      this.shareConfig('weibo')
    },
    shareToDouban () {
      this.shareConfig('douban')
    }
  }
}
</script>

<style lang="less" scoped>
.shareContainer{
  .el-row:first-child{
    margin-bottom: 20px;
  }
  .el-row{
    height:210px;
    .el-col{
      height:100%;
      .shareArea{
        height: 100%;
        width:100%;
      }
    }
  }
}
</style>

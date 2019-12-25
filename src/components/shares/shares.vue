<template>
  <div class="jianshuLeftShare">
    <el-button class="shareItem" v-popover:leftShareList>
      <i class="el-icon-share" />
      <el-popover
        ref="leftShareList"
        popper-class="moreShareList leftShareList"
        placement="left"
        trigger="click">
        <div>
          <ul class="cflex">
            <li>
              <a href="#" @click="shareToWeibo()">
                  <span>分享到微博</span>
              </a>
            </li>
            <li>
              <a  href="#" @click="shareToQQ()">
                  <span>分享到QQ</span>
              </a>
            </li>
            <li>
              <a href="#" @click="shareToQQzone()">
                  <span>分享到QQ空间</span>
              </a>
            </li>
            <li>
              <a href="#" @click="shareToDouban()">
                  <span>分享到豆瓣</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <span>分享到Witter</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <span>分享到Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                  <span>分享到Google</span>
              </a>
            </li>
          </ul>
        </div>
      </el-popover>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'jianshuLeftShare',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    shareToWeixin () {
      this.$emit('shareToWeixin')
    },
    shareToQQ () {
      this.$emit('shareToQQ')
    },
    shareToQQzone () {
      this.$emit('shareToQQzone')
    },
    shareToWeibo () {
      this.$emit('shareToWeibo')
    },
    shareToDouban () {
      this.$emit('shareToDouban')
    }
  }
}
</script>

<style lang="less" scoped>
  ul{text-decoration: none}
  li{list-style: none;}
  a{text-decoration: none;color: #484848}
  .cflex li{
    width: 100%;
    text-align:center;
    font-size: 14px;
    line-height: 20px
  }
  .shareArea{
    align-items: center;
    background: #fff;
    border-radius: 4px;
    .shareTitle{
      border-bottom: 1px solid #e8e8e8;
      padding: 10px;
      box-sizing: border-box;
      width: 100%;
      font-size:14px;
    }
    .bottom{
      align-items: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      .shareItem{
        width: 50px;
        height: 50px;
        border: 1px solid #dcdcdc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .title{
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        font-size:14px;
      }
      .shareUl{
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          cursor: pointer;
          .item{
            background: #EFF2F7;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .svg-icon{
              font-size: 24px;
            }
            .active{
              color:#FF6C60;
            }
          }
          .moreBtn{
            position: relative;
            font-size:14px;
            width:auto;
            height:40px;
            text-align: center;
            padding: 4px 18px;
            border-radius:50px;
            border: 1px solid #dcdcdc;
          }
        }
      }
    }
  }
</style>

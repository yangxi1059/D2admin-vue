<template>
  <!-- 点击弹出编辑器获得更新的dom元素 -->
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开富文本编辑器</el-button>
    <el-dialog
      title="编辑修改"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
      <p>
        <el-button type="primary" @click="showOne();">获取编辑器内容</el-button>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module

export default {
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      msg: '',
      myConfig: {
        UEDITOR_HOME_URL: '/UEditor/',
        serverUrl: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    showOne () {
      alert(this.msg)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

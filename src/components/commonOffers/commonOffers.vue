<template>
  <d2-container>
      <template slot="header">2015 & 2016 Recruiting Seasons: August 2014 – June 2016</template>
      <el-form ref="form"  label-width="80px" style="margin-left:5%">
      <!-- 背景图地址 -->
      <el-input placeholder="offers背景图" v-model="input1" style="width:40%">
          <template slot="prepend">src</template>
      </el-input>
      <br/>
      <!-- 标题内容 -->
      <el-input placeholder="title" v-model="input2" style="width:40%;margin-top:20px;">
          <template slot="prepend">标题</template>
      </el-input>
      <br/>
      <el-button type="primary" @click="onSubmit" style="margin-top:30px">立即添加</el-button>
      <!-- 搜索关键词 -->
      <div style="margin-top: 15px;width:40%;display:inline-block;margin-left:20%">
        <el-input :placeholder="searchdefault" v-model="search" class="input-with-select" @focus="getfocus">
          <el-button slot="append" icon="el-icon-search" @click="showDate"></el-button>
        </el-input>
      </div>
      <!-- 表格 -->
      <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          stripe
          style="width: 100%;margin-top:30px;min-width:1100px"
          ref="clicktable"
          row-key="id"
          >
          <el-table-column
          align="center"
          header-align="center"
          prop="Mentee"
          label="Mentee"
          width="120">
          </el-table-column>
          <el-table-column
          align="center"
          header-align="center"
          prop="EducationBackground"
          label="Education background"
          width="250">
          </el-table-column>
          <el-table-column
          align="center"
          header-align="center"
          prop="OfferReceived"
          label="Offer received"
          width="180">
          </el-table-column>
          <el-table-column
          align="center"
          header-align="center"
          prop="Division"
          label="Division"
          width="180">
          </el-table-column>
          <el-table-column
          prop="ImgSrc.url"
          header-align="center"
          align="center"
          label="Img缩略图">
          <template slot-scope="scope">
            <div v-for="(item,index) in scope.row.ImgSrc.url" :key="index" style="display:inline-block;margin-right:10px">
              <el-popover
                placement="right"
                title=""
                trigger="click">
                <img :src="item" style="width:400px"/>
                <img slot="reference" :src="item" style="height: 50px;width: 50px">
              </el-popover>
            </div>
          </template>
          </el-table-column>

          <el-table-column
          header-align="center"
          align="center"
          label="更新人">
          </el-table-column>

          <el-table-column
          header-align="center"
          align="center"
          label="更新时间">
          <template slot-scope="scope">
            {{scope.row.date|addZero}}
          </template>
          </el-table-column>
           <!-- <el-table-column
          label="创建人">
          </el-table-column>

          <el-table-column
          label="创建时间">
          </el-table-column> -->
          <el-table-column
          header-align="center"
          align="center"
          fixed="right"
          :render-header="renderHeader"
          width="220">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="可以拖拽排序" placement="top">
              <el-button class="el-icon-sort" type="text"></el-button>
            </el-tooltip>
            <el-button type="text" size="small" @click="handleClick(scope.$index,scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.$index,tableData )">删除</el-button>
          </template>
          </el-table-column>
      </el-table>
      <!-- 表单分页器 -->
      <div class="block" style="margin:0 auto;margin-top:30px;width:50%;text-align: center;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20, 25]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      <!-- 控制按钮 -->
      <el-button type="success" style="margin-right:100px;margin-top:30px" @click="updatePage">即时更新</el-button>
      <el-button type="danger" style="margin-top:30px">取消</el-button>
      </el-form>
      <!-- 数据添加弹出框 -->
      <el-dialog title="添加数据" :visible.sync="dialogVisible" width="30%">
        <el-form ref="form" label-width="80px">
          <el-form-item label="Mentee">
          <el-input v-model="form.mentee"></el-input>
          </el-form-item>
          <el-form-item label="Education">
          <el-input v-model="form.edu"></el-input>
          </el-form-item>
          <el-form-item label="Offer">
          <el-input v-model="form.offer"></el-input>
          </el-form-item>
          <el-form-item label="Division">
          <el-input v-model="form.division"></el-input>
          </el-form-item>
          <el-form-item label="ImgSrc">
            <!-- 图片上传 -->
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="gosumbit"
        >提交</el-button>
        </span>
      </el-dialog>
      <!-- 数据更新表单 -->
      <el-dialog
        title="修改数据"
        :visible.sync="editFormVisible"
        >
        <el-form
        >
        <el-form-item
        label="Mentee"
        :label-width="formLabelWidth"
        >
        <el-input
        v-model="formchange.M"
        autocomplete="off"
        ></el-input>
        </el-form-item>
        <el-form-item
        label="Education"
        :label-width="formLabelWidth"
        >
        <el-input
        v-model="formchange.E"
        autocomplete="off"
        ></el-input>
        </el-form-item>
        <el-form-item
        label="OfferReceived"
        :label-width="formLabelWidth"
        >
        <el-input
        v-model="formchange.O"
        autocomplete="off"
        ></el-input>
        </el-form-item>
        <el-form-item
        label="Division"
        :label-width="formLabelWidth"
        >
        <el-input
        v-model="formchange.D"
        autocomplete="off"
        ></el-input>
        </el-form-item>
        </el-form>
        <div>
          <el-button @click="cancel()">取消</el-button>
          <el-button
            type="primary"
            v-on:click="sumbitEditRow()"
              >确定</el-button>
        </div>
      </el-dialog>
  </d2-container>
</template>

<script lang="js">
import Sortable from 'sortablejs'
var _index
export default {
  inject: ['name'],
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      editFormVisible: false, // 编辑数据框显示状态
      formLabelWidth: '120px',
      total: '', // 总条数
      currentPage: 1, // 默认页数
      pageSize: 10, // 默认每页条数
      input1: '', // 背景图输入框
      input2: '', // 标题输入框
      search: '', // 搜索栏输入框
      searchdefault: '请输入搜索内容',
      show: [], // 搜索到的新数组
      dialogVisible: false, // 添加数据框显示状态
      // 添加按钮数据弹出框数据
      form: {
        mentee: '',
        edu: '',
        offer: '',
        division: '',
        ImgSrc: ''
      },
      // 编辑按钮数据弹出框数据
      formchange: {
        M: '',
        E: '',
        O: '',
        D: ''
      },
      // 上传图片的缩略图地址
      fileList: [],
      saveDetail: []
    }
  },
  created () {
    this.total = this.tableData.length
    console.log(this.$store.state.product)
    console.log(this.$route.path)
  },
  mounted () {
    this.setSort()
    console.log(this.name)
  },
  methods: {
    // 立即修改按钮弹出输入框
    onSubmit () {
      this.dialogVisible = true
    },
    // 编辑按钮弹出框表单默认值
    handleClick (index, row) {
      this.editFormVisible = true
      this.formchange.M = row.Mentee
      this.formchange.E = row.EducationBackground
      this.formchange.O = row.OfferReceived
      this.formchange.D = row.Division
      _index = index
    },
    // 编辑弹出框中的提交按钮
    sumbitEditRow () {
      var editData = _index
      if (this.formchange.M && this.formchange.E && this.formchange.O && this.formchange.D) {
        this.tableData[editData].Mentee = this.formchange.M
        this.tableData[editData].EducationBackground = this.formchange.E
        this.tableData[editData].OfferReceived = this.formchange.O
        this.tableData[editData].Division = this.formchange.D
        this.editFormVisible = false
        console.log(this.tableData)
      } else {
        this.editFormVisible = true
      }
    },
    // 编辑弹出框中的取消按钮
    cancel () {
      this.editFormVisible = false
    },
    // 动态改变每页 ${val} 条 数据来源store
    handleSizeChange (val) {
      this.pageSize = val
    },
    // 动态改变当前页数: ${val}
    handleCurrentChange (val) {
      this.currentPage = val
    },
    // 删除一行数据
    handleDelete (index, row) {
      console.log(index)
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.total = this.tableData.length
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch((err) => {
        this.$message({
          type: 'error',
          message: err
        })
      })
    },
    // 数据提交列表头部添加一条
    gosumbit () {
      if (this.form.mentee && this.form.edu && this.form.offer && this.form.division) {
        this.tableData.unshift({
          Mentee: this.form.mentee,
          EducationBackground: this.form.edu,
          OfferReceived: this.form.offer,
          Division: this.form.division,
          ImgSrc: { url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'] },
          id: this.tableData.length + 1
        })
        this.form.mentee = ''
        this.form.edu = ''
        this.form.offer = ''
        this.form.division = ''
        this.form.ImgSrc = ''
        this.dialogVisible = false
        this.total = this.tableData.length
      } else {
        this.dialogVisible = true
        this.$alert('输入内容不能有空', '错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `错误: 文本有空`
            })
          }
        })
      }
    },
    // 鼠标拖拽排序
    setSort () {
      const el = this.$refs.clicktable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData: function (dataTransfer) {
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.tableData.splice(evt.oldIndex, 1)[0]
          this.tableData.splice(evt.newIndex, 0, targetRow)
        }
      })
    },
    // 搜索内容变色
    showDate () {
      this.show = []
      var a = document.querySelectorAll('.el-table__row')
      if (this.search) {
        this.searchdefault = '获取焦点取消搜索效果'
        for (var i = 0; i < this.tableData.length; i++) {
          a[i].style.color = '#606266'
          var item = this.tableData[i]
          if ((item.Mentee + item.EducationBackground + item.OfferReceived + item.Division + item.ImgSrc).replace(/\s*/g, '').toLowerCase().indexOf(this.search) !== -1 && this.search) {
            this.show.push(this.tableData[i])
            a[i].style.color = 'red'
          }
        }
        this.search = ''
      } else {
        alert('搜索内容不能为空')
      }
    },
    // 搜索框获取焦点失去搜索效果
    getfocus () {
      this.searchdefault = '请输入搜索内容'
      var a = document.querySelectorAll('.el-table__row')
      for (var i = 0; i < this.tableData.length; i++) {
        a[i].style.color = '#606266'
      }
    },
    // 更新数组排序按钮
    sendSort () {
      console.log(this.saveDetail, '向后端发送新排序后的数组不影响页面')
    },
    // 文件移除列表出发
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePreview (file) {
      console.log(file)
    },
    // jsx渲染一个头部按钮
    renderHeader (h) {
      return (
        <div>
          <span>
            <span>操作</span>
            <el-button type="primary" style="margin-left:30px" onclick={this.sendSort}>发送排序</el-button>
          </span>
        </div>
      )
    },
    // 即时更新按钮同时记录页面和排序
    updatePage () {
      console.log(this.tableData, '发送到改变网页以及排序')
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .el-form-item__content{
    margin-top: 0px;
  }
 .el-table__row td {
    text-align: center;
}
</style>

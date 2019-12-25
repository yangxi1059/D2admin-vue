<template>
  <d2-container>
    <div class="home-table">
      <el-table
      ref="clicktable"
      row-key="id"
      stripe
      :data="OfferIndexData"
      style="width: 90%">
      <el-table-column
      fixed
      prop="date"
      label="更新日期"
      width="200">
      </el-table-column>
      <el-table-column
      prop="name"
      label="子页面名"
      width="240">
      </el-table-column>
      <el-table-column
      prop="newman"
      label="更新人"
      width="180">
      </el-table-column>
      <el-table-column
      prop="address"
      label="路径"
      width="200">
      </el-table-column>
      <el-table-column
      prop="oldman"
      label="创建人"
      width="200">
      </el-table-column>
       <el-table-column
      prop="olddate"
      label="创建时间"
      >
      </el-table-column>
      <el-table-column
      fixed="right"
       :render-header="renderHeader"
      width="200">
      <template slot-scope="scope">
      <el-button type="text" size="small" @click="handleChange(scope.$index, scope.row)">修改</el-button>
      <el-button type="text" size="small" @click="handleClick(scope.$index, scope.row)">详情</el-button>
      <el-button type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
      </el-table>
      </div>
      <el-dialog
      title="修改数据"
      :visible.sync="editFormVisible"
      >
      <el-form
      >
      <el-form-item
      label="子页面名"
      :label-width="formLabelWidth"
      >
      <el-input
      v-model="offerindexChange.name"
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

<script>
import Sortable from 'sortablejs'
var _index
export default {
  name: 'Offers',
  methods: {
    handleClick (index, row) {
      this.$router.push(this.$route.name + '/' + this.OfferIndexData[index].address)
    },
    handleChange (index, row) {
      this.editFormVisible = true
      this.offerindexChange.name = row.name
      _index = index
    },
    cancel () {
      this.editFormVisible = false
    },
    // 编辑弹出框中的提交按钮改变日历
    sumbitEditRow () {
      var editData = _index
      this.OfferIndexData[editData].name = this.offerindexChange.name
      this.editFormVisible = false
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
          const targetRow = this.OfferIndexData.splice(evt.oldIndex, 1)[0]
          this.OfferIndexData.splice(evt.newIndex, 0, targetRow)
        }
      })
    },
    // jsx渲染一个发送按钮
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
    sendSort () {
      console.log(this.OfferIndexData, '向后端发送新排序后的数组')
    }
  },
  data () {
    return {
      indexData: [ // 一次请求复用所有list页
        {
          id: 1,
          name: 'Offers',
          detail: [
            {
              date: '2016-05-02',
              name: '2015 & 2016 Recruiting Seasons: August 2014 – June 2016',
              newman: 'xx',
              address: 'Offers1',
              title: 'wstoffers',
              id: 1
            }, {
              date: '2016-05-04',
              name: '2017 Recruiting Season: August 2016 – June 2017',
              newman: 'xx',
              address: 'Offers2',
              title: 'wstoffers',
              id: 2
            }, {
              date: '2016-05-04',
              name: '2018 Recruiting Season: June 2017 – June 2018',
              newman: 'xx',
              address: 'Offers3',
              title: 'wstoffers',
              id: 3
            }, {
              date: '2016-05-04',
              name: '2019 Recruiting Season: April 2018 – Current (Updating)',
              newman: 'xx',
              address: 'Offers4',
              title: 'wstoffers',
              id: 4
            }, {
              date: '2016-05-04',
              name: '2020 Recruiting Season: April 2019 – Current (Updating)',
              newman: 'xx',
              address: 'Offers5',
              title: 'wstoffers',
              id: 5
            }
          ]
        },
        {
          id: 2,
          name: 'Home',
          detail: [
            {
              date: 'Home1',
              name: 'Home1',
              newman: 'xx',
              address: 'Home1',
              title: 'Home1',
              id: 1
            }, {
              date: 'Home2',
              name: '2017 Recruiting Season: August 2016 – June 2017',
              newman: 'xx',
              address: 'Home2',
              title: 'wstoffers',
              id: 2
            }
          ]
        },
        {
          id: 3,
          name: 'VideoStories',
          detail: [
            {
              date: 'Stories1',
              name: 'Stories1',
              newman: 'xx',
              address: 'Stories1',
              title: 'Video Stories',
              id: 1
            }
          ]
        }
      ],
      editFormVisible: false,
      formLabelWidth: '120px',
      offerindexChange: {
        name: ''
      },
      valuedata: '',
      OfferIndexData: []
    }
  },
  created () {
    // this.$store.dispatch('product/getProducts', res.data.product) // 模块化dispatch
    this.$store.dispatch('data/getdata', this.indexData)
    for (var i = 0; i < this.indexData.length; i++) {
      if (this.$route.name === this.indexData[i].name) {
        this.OfferIndexData = this.indexData[i].detail
      }
    }
  },
  mounted () {
    this.setSort()
    // 请求store中得list数据后给offerIndexData改变值起到如果list的子详情页位置发生变化表格相应改变 子页面改变位置则改变store中的值 每次渲染重新拿值
    // 带有父子关系的list数据返回值arr,vuex
    // this.$store.state.list.arr
  }
}
</script>

<style scoped>
  .home-table{
    margin: 0 auto;
    margin-top: 30px;
  }
  .home-addapi{
    margin-left: 50px;
  }
</style>

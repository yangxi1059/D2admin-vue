<template>
    <commonOffers :tableData="resdata.tableData"></commonOffers>
</template>

<script>
import commonOffers from '../../../../components/commonOffers/commonOffers'
export default {
  name: 'Offers2',
  data () {
    return {
      resdata: {
        status: 200,
        tableData: [
          {
            Mentee: 'Mentee C',
            EducationBackground: 'Top 10 US National University',
            OfferReceived: 'McKinsey',
            Division: 'Analytics',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
              ]
            },
            id: 1
          }, {
            Mentee: 'Mentee X',
            EducationBackground: 'Top 5 Mainland China University',
            OfferReceived: 'CICC',
            Division: 'IBD',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 2
          }, {
            Mentee: 'Mentee Z',
            EducationBackground: 'Top 50 US National University',
            OfferReceived: 'Goldman Sachs',
            Division: 'GIR',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 3
          }, {
            Mentee: 'Mentee L',
            EducationBackground: 'Top 30 US National University',
            OfferReceived: 'Bain',
            Division: 'Consulting',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 4
          }, {
            Mentee: 'Mentee J',
            EducationBackground: 'Top 40 US National University',
            OfferReceived: 'Duff&Phelps',
            Division: 'Portfolio Valuation',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 5
          }
        ]
      }
    }
  },
  methods: {
  },
  created () {
  },
  components: {
    commonOffers
  }
}
</script>

<style scoped>
  .el-form-item__content{
    margin-top: 0px;
  }
</style>

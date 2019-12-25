<template>
    <commonOffers :tableData="resdata.tableData"
    ></commonOffers>
</template>

<script>
import commonOffers from '../../../../components/commonOffers/commonOffers'
export default {
  provide: {
    name: 'test'
  },
  name: 'Offers1',
  data () {
    return {
      resdata: {
        err: 0,
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
            date: (new Date()).valueOf(),
            id: 1
          }, {
            Mentee: 'Mentee X',
            EducationBackground: 'Top 5 Mainland China University',
            OfferReceived: 'CICC',
            Division: 'IBD',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 2,
            date: (new Date()).valueOf()
          }, {
            Mentee: 'Mentee Z',
            EducationBackground: 'Top 50 US National University',
            OfferReceived: 'Goldman Sachs',
            Division: 'GIR',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 3,
            date: (new Date()).valueOf()
          }, {
            Mentee: 'Mentee L',
            EducationBackground: 'Top 30 US National University',
            OfferReceived: 'Bain',
            Division: 'Consulting',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 4,
            date: (new Date()).valueOf()
          }, {
            Mentee: 'Mentee J',
            EducationBackground: 'Top 40 US National University',
            OfferReceived: 'Duff&Phelps',
            Division: 'Portfolio Valuation',
            ImgSrc: {
              url: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg']
            },
            id: 5,
            date: (new Date()).valueOf()
          }
        ]
      }
    }
  },
  mounted () {
    // axios({url:`detail${:id}`}).then(res => {this.resdata = res.data.data})
  },
  components: {
    commonOffers
  }
}
</script>

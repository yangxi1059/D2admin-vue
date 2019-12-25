const github = 'https://github.com/wdlhao/vue2-element-touzi-admin'
const appUrl = process.env.VUE_APP_URL // development和production环境是不同的
const shareUrl = 'http://wallstreettequila.org/'
const shareTitle = 'Video Stories分享'
const weibo = {
  'weiboUrl': 'http://service.weibo.com/share/share.php',
  'weiboAppkey': '2003962826', // 身份可以
  'pic': 'https://user-gold-cdn.xitu.io/2019/6/20/16b7425dfa01dbf3?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1'
}
const qq = {
  'baseUrl': 'http://connect.qq.com/widget/shareqq/index.html',
  'pic': 'https://user-gold-cdn.xitu.io/2019/6/20/16b7425dfa01dbf3?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1',
  'desc': '文章分享推送',
  'summary': '文章梗概',
  'source': 'qzone'
}
const qqZone = {
  'baseUrl': 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
  'pic': 'https://user-gold-cdn.xitu.io/2019/6/20/16b7425dfa01dbf3?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1',
  'desc': '文章分享推送',
  'summary': '文章梗概',
  'site': 'qzone'
}
const douban = {
  'baseUrl': 'https://www.douban.com/share/service',
  'pic': 'https://user-gold-cdn.xitu.io/2019/6/20/16b7425dfa01dbf3?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1'
}
export {
  appUrl,
  shareUrl,
  shareTitle,
  weibo,
  qq,
  qqZone,
  douban,
  github
}

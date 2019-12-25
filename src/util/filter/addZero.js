export default (value) => { // 一个时间戳转正常的过滤器
  let date = new Date(value) // new 一个时间
  let getHours // 小时
  let getMinutes // 分
  if (date.getHours() < 10) { getHours = '0' + date.getHours() } else { getHours = date.getHours() }
  // 判断小时是否小于10的补全：加0
  if (date.getMinutes() < 10) { getMinutes = '0' + date.getMinutes() } else { getMinutes = date.getMinutes() }
  // 判断分是否小于10的补全：加0
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + getHours + ':' + getMinutes // 返回转换后的值
}

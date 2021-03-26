// 切换主题
const switchTheme = (theme) => {
  if (Object.prototype.toString.call(theme) !== '[object Object]') {
    return
  }
  for (let key in theme) {
    document.body.style.setProperty('--' + key, theme[key])
  }
}
export default switchTheme

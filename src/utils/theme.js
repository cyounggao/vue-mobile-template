// 切换主题
import util from '../utils'
const switchTheme = (theme) => {
  if (util.isObj(theme)) {
    for (let key in theme) {
      document.body.style.setProperty('--' + key, theme[key])
    }
  }
}
export default switchTheme

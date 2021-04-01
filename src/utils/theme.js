// 切换主题
import { isObj } from '../utils'
const switchTheme = (theme) => {
  if (isObj(theme)) {
    for (let key in theme) {
      document.body.style.setProperty('--' + key, theme[key])
    }
  }
}
export default switchTheme

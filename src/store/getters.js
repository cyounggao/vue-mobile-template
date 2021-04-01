const getters = {
  requserCount: state => state.app.requserCount,
  cachePageName: state => state.app.cachePageName,
  theme: state => state.app.theme,
  token: state => state.user.token
}
export default getters

const getters = {
  requserCount: state => state.app.requserCount,
  cachePageName: state => state.app.cachePageName,
  token: state => state.user.token
}
export default getters

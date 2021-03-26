const VUE_APP_ENV = process.env.VUE_APP_ENV;
const hostObj = {
 /* 开发环境 */
  development: {
    api: "http://development.com",
  },
 /* 测试环境 */
  test: {
    api: "http://test.com",
  },
 /* 生产地址 */
  production: {
    api: "http://production.com",
  }
}

const host = hostObj[VUE_APP_ENV];

export default host


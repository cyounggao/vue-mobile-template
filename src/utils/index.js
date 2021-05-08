const util = {
    install(Vue) {
        Object.keys(util).forEach(key => {
            if(key !== 'install'){
                Vue.prototype[`$${key}`] = util[key]
            }
          })
    },
    // 后端返回的富文本里px单位转rem
    changeToRem(content, size = 50) {
        if (!content) return
        const reg = /(:)(\s*)(\d*)(px)/g
        const str = content.replace(reg, (content, $1, space, $2) => {
            return space + $1 + parseInt($2) / size + 'rem'
        })
        return str
    },
    // 判断是否为对象
    isObj(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]'
    },
    //数组转映射对象（后端需要同时要传label和code）
    arrToObj(arr, label = 'label', code = 'code') {
        let obj = {}
        arr.forEach(item => {
            obj[item[code]] = item[label]
        })
        return obj
    }
}
export default util
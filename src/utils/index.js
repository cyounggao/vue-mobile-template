// 判断是否为对象
export function isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
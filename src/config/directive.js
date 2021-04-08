import { Dialog } from 'vant';
export default {
    install(Vue) {
        /** 
         * 点击操作二次弹窗确认 
         * v-confirm="{msg: '', fun: '', data: ''}"
         * msg: 弹窗的内容
         * fun: 绑定的函数
         * data: 函数传递的参数
         */
        Vue.directive('confirm', function (el, binding) {
            const value = binding.value || {}
            const msg = value.msg || '您确定要进行该项操作吗？'
            el.onclick = function () {
                Dialog.confirm({
                    title: '提示',
                    message: msg
                  }).then(() => {
                    value.fun(value.data)
                }).catch(() => {

                })
            }
        })
    }
}
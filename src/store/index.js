import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//引入分仓库
import user from './user'
export default new Vuex.Store({
    //实现vuex仓库模块化开发
    modules: {
        user
    }
})
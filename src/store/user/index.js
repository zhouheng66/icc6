const state = {
    n:0
}
const mutations = {
    PUTNEWS(state,n){
        state.n = n
    }
}
const actions = {
    putNews({commit},n){
        commit("PUTNEWS",n)
    }
}
const getters = {}
export default{
    state,
    mutations,
    actions,
    getters
};
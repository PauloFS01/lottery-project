import axios from 'axios'

export default {
    state: {
        targetDrawn: [],
        result: [],
        toggle: false
    },
    mutations: {
        SET_TARGET(state, drawn) {
            state.targetDrawn = drawn
        },
        CLEAR_TARGET(state) {
            state.targetDrawn = ''
        },
        SET_TOGGLE(state, value) {
            state.toggle = value
        }
    },
    actions: {
        setTarget(store, drawn) {
            store.commit('SET_TARGET', drawn)
        },
        clearTarget(store) {
            store.commit('CLEAR_TARGET')
        },
        toggleChange(store, value) {
            store.commit('SET_TOGGLE', value)
        },
        async setResult(store, drawn) {
            store.commit('SET_TARGET', drawn)
            let result = await axios.post('https://jsonplaceholder.typicode.com/posts', drawn)
            console.log(result)
        }
    }
}
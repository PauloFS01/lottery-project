import axios from 'axios'

export default {
    state: {
        targetDrawn: [],
        result: [
            {
                "result": {
                    "drawn": [
                        "24",
                        "17",
                        "19",
                        "20",
                        "48",
                        "100"
                    ],
                    "_id": "5d201537c05ab43fc8c6dfa1",
                    "date": "21/12/1879",
                    "__v": 0
                },
                "priority": 6
            },
            {
                "result": {
                    "drawn": [
                        "61",
                        "62",
                        "63",
                        "64",
                        "65",
                        "100"
                    ],
                    "_id": "5d2033abf9b7a03f9cc598e5",
                    "date": "21/12/1879",
                    "__v": 0
                },
                "priority": 1
            },
            {
                "result": {
                    "drawn": [
                        "61",
                        "62",
                        "63",
                        "64",
                        "65",
                        "100"
                    ],
                    "_id": "5d2033abf9b7a03f9cc598e5",
                    "date": "21/12/1879",
                    "__v": 0
                },
                "priority": 1
            },
            {
                "result": {
                    "drawn": [
                        "61",
                        "62",
                        "63",
                        "64",
                        "65",
                        "100"
                    ],
                    "_id": "5d2033abf9b7a03f9cc598e5",
                    "date": "21/12/1879",
                    "__v": 0
                },
                "priority": 1
            },
            {
                "result": {
                    "drawn": [
                        "61",
                        "62",
                        "63",
                        "64",
                        "65",
                        "100"
                    ],
                    "_id": "5d2033abf9b7a03f9cc598e5",
                    "date": "21/12/1879",
                    "__v": 0
                },
                "priority": 1
            }            
        ],
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
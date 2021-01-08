import {createStore} from 'redux'

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'REV':
            state = 0
            return state
        default:
            return state
    }
}

const store = createStore(reducer)

const update = () => {
    document.querySelector('.count').textContent = store.getState()
}

store.subscribe(update)

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rev = () => ({type: 'REV'})


document.querySelector('.inc').addEventListener('click', () => {
    store.dispatch(inc())
})


document.querySelector('.dec').addEventListener('click', () => {
    store.dispatch(dec())
})

document.querySelector('.rev').addEventListener('click', () => {
    store.dispatch(rev())
})


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INC':
//             return state + 1
//         case 'DEC':
//             return state - 1
//         case 'RND':
//             return state + action.value

//         default:
//             return state
//     }
// }

// const inc = () =>  ({type: 'INC'})
// const dec = () =>  ({type: 'DEC'})
// const rnd = (value) =>  ({type: 'RND', value})


// const store = createStore(reducer)

// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch(inc())
// })

// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch(dec())
// })

// document.getElementById('rnd').addEventListener('click', () => {

// const value = Math.floor(Math.random() * 10)
//     store.dispatch(rnd(value))
// })
// const update = () => {
//     document.getElementById('counter').textContent = store.getState()
// }


// store.subscribe(update)


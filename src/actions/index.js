export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}
export const isNavbar = (bool) => {
    return {
        type: 'IS_NAVBAR',
        payload: bool
    }
}
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state > 0 ? state - action.payload : state
        default:
            return state
    }
}

export default counterReducer
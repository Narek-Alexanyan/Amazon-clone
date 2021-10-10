const isNavbar = (state = true, action) => {
    switch (action.type) {
        case 'IS_NAVBAR':
            return state = action.payload;
        default:
            return state
    }
}

export default isNavbar
const INITIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'GET_ALL_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case 'GET_ALL_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
}
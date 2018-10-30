const INITIAL_STATE = {
    isAuth: false,
    loading: false,
    info: {
        _id: '',
        userId: '',
        fullname: '',
        email: '',
        role: '',
        token: '',
    },
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuth: true,
                loading: false,
                info: {
                    ...state.info,
                    ...action.payload,
                }
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...INITIAL_STATE,
            }
        default:
            return {
                ...state
            }
    }
}
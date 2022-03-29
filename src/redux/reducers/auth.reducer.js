const initialState = {
    message: null,
    error: null,
    loading: false,
    token: null,
    authenticate: false
}

const authReducer = (state = initialState, action) => {
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        default:

    }
    return state;
}

export default authReducer;
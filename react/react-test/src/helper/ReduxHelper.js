// redux-slice에서 반복적으로 사용되는 처리로직을 재사용하기 위한 모듈

const pending = (state, { payload }) => {
    return { ...state, loading: true }
};


const fulfilled = (state, { payload }) => {
    return {
        data: payload, 
        loading: false,
        error: null
    }
};

const rejected = (state, { payload }) => {
    return {
        ...state, 
        loading: false,
        error: {
            code: (payload?.status) ? (payload.status) : 500,
            message: (payload?.statusText) ? (payload.statusText) : 'ServerError'
        }
    }
};

export {pending,fulfilled,rejected};
// 액션 타입 정의
const SET_CONTENT = 'store/SET_CONTENT';

// 액션 생성함수 정의
export const setContent = () => ({ type: SET_CONTENT });

// 리듀서 작성
export default store = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,

            }
    }
}

// 초기상태 정의
const initialState = {
    coreSize : 9,
    mainArr : [],
    Main : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "2022",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subNW : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subN : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subNE : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subW : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subE : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subSW : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subS : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    },
    subSE : {
        NW : "",
        N : "",
        NE : "",
        W : "",
        Main : "",
        E : "",
        SW : "",
        S : "",
        SE : ""
    }
}
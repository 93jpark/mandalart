import { createSlice } from '@reduxjs/toolkit'

export const mandalartSlice = createSlice({
    name: 'mandalart',
    initialState: {
        posArr: ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"],
        value: 0,
        NW: Array(9).fill(''),
        N: Array(9).fill(''),
        NE: Array(9).fill(''),
        W: Array(9).fill(''),
        Main: Array(9).fill(''),
        E: Array(9).fill(''),
        SW: Array(9).fill(''),
        S: Array(9).fill(''),
        SE: Array(9).fill(''),

        
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log('action is '+action.type);
            // action.type = mandalart/incrementByAmount
            // payload is object which is parameters 
            state.value += action.payload.size
        },
        setNewGoal: (state, action) => {
            const majorPos = action.payload.majorPos;
            const minorPos = action.payload.minorPos;
            const newGoal = action.payload.newGoal;

            state[majorPos][minorPos] = newGoal;
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setNewGoal } = mandalartSlice.actions
export default mandalartSlice.reducer

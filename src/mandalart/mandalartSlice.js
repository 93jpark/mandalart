import { createSlice } from '@reduxjs/toolkit'

export const mandalartSlice = createSlice({
    name: 'mandalart',
    initialState: {
        posArr: ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"],
        value: 0,
        SelectedMajorPos: '',
        SelectedMinorPos: '',
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
        setNewGoal: (state, action) => {
            const majorPos = action.payload.majorPos;
            const minorPos = action.payload.minorPos;
            const newGoal = action.payload.newGoal;

            state[majorPos][minorPos] = newGoal;
        },
        selectMajorPos: (state, action) => {
            state.SelectedMajorPos = action.payload.newSelectedMajorPos;
        },
        selectMinorPos: (state, action) => {
            state.SelectedMinorPos = action.payload.newSelectedMinorPos;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setNewGoal, selectMajorPos, selectMinorPos } = mandalartSlice.actions
export default mandalartSlice.reducer

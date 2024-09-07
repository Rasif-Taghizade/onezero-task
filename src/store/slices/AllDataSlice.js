import { createSlice } from '@reduxjs/toolkit';

// Slice yaradılması
const allDataSlice = createSlice({
    name: 'data',
    initialState: {
        allData: {}
    },
    reducers: {
        setAllData: (state, action) => {
            state.allData = action.payload;
        },
    }
});

// Reducer-i ixrac edirik ki, store-a əlavə edək
export const { setAllData } = allDataSlice.actions;
export default allDataSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//actions types...
const FETCHDATA = 'together/FETCHDATA';

//get all causes from database...
const getCauseData = createAsyncThunk(FETCHDATA, async () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:5000/causes',
    };
    const response = await axios.request(options);

    const causeList = response.data;
    return causeList.causes;
});


//reducer
const causesReducer = createSlice({
    name: 'causeData',
    initialState: {
        data: [],
        isFulfilled: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getCauseData.fulfilled, (state, action) => {
            state.isFulfilled = true;
            state.data = action.payload;
        });
    }
});


export default causesReducer;
export { getCauseData }
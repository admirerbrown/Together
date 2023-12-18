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
    console.log(causeList)
    return causeList;
});


//reducer
const homePageReducer = createSlice({
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


export default homePageReducer;
export { getCauseData }
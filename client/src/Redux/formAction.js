import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// Define your async action
export const updateCauseData = createAsyncThunk(
    'causes/updateCauseData', // Unique identifier for the thunk action
    async (payload) => {
        const options = {
            method: 'PUT',
            url: "https://pernapp.onrender.com/update_cause",
            data: payload
        };
        const response = await axios.request(options);
        return response.data;
        
    }
);

// Create a slice
const donationReducer = createSlice({
    name: 'addUserDonation',
    initialState: {
        response: [],
        isFulfilled: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateCauseData.fulfilled, (state, action) => {
            return {
                ...state,
                isFulfilled: true,
                response: action.payload 
            };
        });

        builder.addCase(updateCauseData.rejected, (state, action) => {
            return {
                ...state,
                error: action.error.message
            };
        });
    },
});


export default donationReducer;

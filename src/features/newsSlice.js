import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchNews } from "../api";

export const fetchNewsFromAPI = createAsyncThunk(
    'NEWS/fetchNews',
    async (news, {fulfillWithValue,rejectWithValue}) => {
        try {
            const response = await fetchNews();
            console.log("response",response.data);
            if (response.success) {
                return fulfillWithValue(response.data);
            }
        } catch (error) {
            throw rejectWithValue(error.message)
        }
    }
)

export const newsSlice = createSlice({
    name:"NEWS",
    initialState: {
        news: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewsFromAPI.fulfilled, (state, action) => {
            state.loading = false;
            console.log("action", action.payload);
            state.news = action.payload;
        })
        builder.addCase(fetchNewsFromAPI.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchNewsFromAPI.rejected, (state, action) => {
            state.loading = false;
        })
    }
});
// export const { } = newsSlice.actions;
export default newsSlice.reducer;
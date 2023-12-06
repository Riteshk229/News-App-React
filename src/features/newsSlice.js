import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { fetchNews } from "../api";

export const fetchNewsFromAPI = createAsyncThunk(
    'NEWS/fetchNews',
    async (news, {fulfillWithValue,rejectWithValue}) => {
        try {
            const response = await fetchNews();
            if (response.success) {
                const edited = response.data.filter((article,index) => {
                    if (article.author && article.description && article.url && article.urlToImage && article.title) {
                        const newArticle = { id: index, ...article };
                        return newArticle;
                    }
                });
                return fulfillWithValue(edited);
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
        fav: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewsFromAPI.fulfilled, (state, action) => {
            state.loading = false;
            const edited = action.payload.map((article, index) => {
                return {
                    id: index,
                    ...article
                }
            })
            state.news = edited
        })
        builder.addCase(fetchNewsFromAPI.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchNewsFromAPI.rejected, (state, action) => {
            state.loading = false;
        })
    }
});
export const {} = newsSlice.actions;
export default newsSlice.reducer;
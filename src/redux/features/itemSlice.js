import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../services/itemListApi";
// import { mock } from "../../pages/Main/mock";

const aplName = "items";
const initialState = {
  itemList: [],
  loading: true,
  error: null
};

export const fetchItemList = createAsyncThunk(
  `${aplName}/fetchItemList`,
  (rejectWithValue, { getState }) => {
    return api.getList();
    // const response = mock.item_list;
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", response);
    // return { data: response };
  }
);

export const itemSlice = createSlice({
  name: aplName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItemList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItemList.fulfilled, (state, action) => {
      state.itemList = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchItemList.rejected, (state, action) => {
      state.loading = false;
      state.error = "알 수 없는 에러";
    });
  }
});

export const itemListReducer = itemSlice.reducer;

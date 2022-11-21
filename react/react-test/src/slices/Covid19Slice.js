import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";


// 다중행 데이터 조회를 위한 비동기 함수
export const getList = createAsyncThunk("Covid19Slice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COVID19_LIST;
  let params = null;
  
  if (payload?.gte && payload?.lte) {
    let dateList = [];
    let gteDate = new Date(payload.gte);

    while (gteDate <= new Date(payload.lte)) {
      dateList.push(gteDate.toISOString().split('T')[0] + 'T00:00:00Z');
      gteDate.setDate(gteDate.getDate() + 1);
    }
    console.log(dateList);
    
    params = {
      date: dateList
    };
  }

  try {
    const response = await axios.get(URL, {
      params: params
    });
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }
  return result;
});


const Covid19Slice = createSlice({
  name: "Covid19Slice",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    // 다중행 데이터 조회 액션 함수
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected
  }
});

export const { getCurrentData } = Covid19Slice.actions;
export default Covid19Slice.reducer;

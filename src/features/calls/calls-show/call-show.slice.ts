import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../app/app.store";

export interface CallShowState {
  node?: {
    id: string;
    duration: number;
    is_archived: boolean;
    from: string;
    to: string;
    direction: "outbound" | "inbound";
    call_type: "answerd" | "missed" | "voicemail";
    via: string;
    created_at: string;
    notes?: CallShowNote[];
  };
  status: "idle" | "loading" | "failed";
}

export interface CallShowNote {
  id: string;
  content: string;
}

const initialState: CallShowState = {
  status: "loading",
};

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
// export const fetchCallShow = createAsyncThunk(
//   "callShow/fetchCallShow",
//   async (amount?: number) => {
//     const response = await callShowAPI.fetchCallShow();
//     console.log(response);
//     // The value we return becomes the `fulfilled` action payload
//     return response;
//   }
// );

export const callShowSlice = createSlice({
  name: "callShow",
  initialState,
  reducers: {
    fetchCallShowFullfilled: (state, action) => {
      state.status = "idle";
      state.node = action.payload.node;
    },
    fetchCallShowPending: (state, action) => {
      state.status = "loading";
    },
    fetchCallShowRejected: (state, action) => {
      state.status = "failed";
    },
    deleteCall: (state, action) => {
      state.status = "loading";
      state.node = undefined;
    },
    putCallShowArchiveFullfilled: (state, action) => {
      const { is_archived } = action.payload;

      state.status = "idle";
      state.node!.is_archived = is_archived;
    },
    putCallShowArchivePending: (state, action) => {
      state.status = "loading";
    },
    putCallShowArchiveRejected: (state, action) => {
      state.status = "failed";
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCallShow.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchCallShow.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       // state.callShow = action.payload;
  //     })
  //     .addCase(fetchCallShow.rejected, (state, action) => {
  //       state.status = "failed";
  //     });
  // },
});

export const {
  fetchCallShowFullfilled,
  fetchCallShowPending,
  fetchCallShowRejected,
  deleteCall,
  putCallShowArchivePending,
  putCallShowArchiveRejected,
  putCallShowArchiveFullfilled,
} = callShowSlice.actions;

export const selectCallShowNodes = (state: RootState) => state.callShow.node;
// export const selectCallShow = (state: RootState) => state.callShow.hasNextPage;
// export const selectCallShow = (state: RootState) => state.callShow.totalCount;

export default callShowSlice.reducer;

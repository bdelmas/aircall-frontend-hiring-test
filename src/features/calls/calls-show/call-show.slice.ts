import { createSlice } from "@reduxjs/toolkit";

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

export default callShowSlice.reducer;

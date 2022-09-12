import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../../app/app.store";

export interface CallListNode {
  id: string;
  duration: number;
  is_archived: boolean;
  from: string;
  to: string;
  direction: "outbound" | "inbound";
  call_type: "answerd" | "missed" | "voicemail";
  via: string;
  created_at: string;
  notes: CallListNote[];
}

export interface CallListNote {
  id: string;
  content: string;
}

export interface CallListState {
  nodes: CallListNode[];
  totalCount: number;
  hasNextPage: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: CallListState = {
  nodes: [],
  totalCount: 0,
  hasNextPage: false,
  status: "idle",
};

export const callListSlice = createSlice({
  name: "callList",
  initialState,
  reducers: {
    fetchCallListFullfilled: (state, action) => {
      state.status = "idle";
      state.nodes = action.payload.nodes;
      state.totalCount = action.payload.totalCount;
      state.hasNextPage = action.payload.hasNextPage;
    },
    fetchCallListPending: (state, action) => {
      state.status = "loading";
    },
    fetchCallListRejected: (state, action) => {
      state.status = "failed";
    },
    putCallListArchiveFullfilled: (state, action) => {
      const { id, is_archived } = action.payload;
      const index = state.nodes.findIndex((n) => n.id === id);

      state.status = "idle";
      state.nodes[index].is_archived = is_archived;
    },
    putCallListArchivePending: (state, action) => {
      state.status = "loading";
    },
    putCallListArchiveRejected: (state, action) => {
      state.status = "failed";
    },
  },
});

export const {
  fetchCallListFullfilled,
  fetchCallListPending,
  fetchCallListRejected,
  putCallListArchiveFullfilled,
  putCallListArchiveRejected,
  putCallListArchivePending,
} = callListSlice.actions;

export const selectCallListNodes = (state: RootState) => state.callList.nodes;
export const selectCallListTotalCount = (state: RootState) =>
  state.callList.totalCount;

export default callListSlice.reducer;

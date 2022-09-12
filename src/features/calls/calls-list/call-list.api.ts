import { ax, getConfig } from "../../../app/app.api";

export type callListDTO = {
  data: {
    hasNextPage: boolean;
    nodes: any[];
    totalCount: number;
  };
};

export type fetchCallListPayload = {
  offset?: number;
  limit?: number;
};

export function fetchCallList(action: {
  payload: fetchCallListPayload;
  type: string;
}) {
  return () => ax.get("/calls", getConfig());
}

export type putCallListArchivePayload = {
  id: string;
};

export function putCallListArchive(action: {
  payload: putCallListArchivePayload;
  type: string;
}) {
  return () => ax.put(`/calls/${action.payload.id}/archive`, null, getConfig());
}

export const callListAPI = { fetchCallList, putCallListArchive };
export default callListAPI;

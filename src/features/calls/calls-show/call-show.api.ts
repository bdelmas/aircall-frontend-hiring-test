import { ax, getConfig } from "../../../app/app.api";

export type callShowDTO = {
  data: {
    hasNextPage: boolean;
    nodes: any[];
    totalCount: number;
  };
};

export type fetchCallShowPayload = {
  id: string;
};

export function fetchCallShow(action: {
  payload: fetchCallShowPayload;
  type: string;
}) {
  return () => ax.get(`/calls/${action.payload.id}`, getConfig());
}

export type putCallShowArchivePayload = {
  id: string;
};

export function putCallShowArchive(action: {
  payload: putCallShowArchivePayload;
  type: string;
}) {
  return () => ax.put(`/calls/${action.payload.id}/archive`, null, getConfig());
}

export const callShowAPI = { fetchCallShow, putCallShowArchive };
export default callShowAPI;

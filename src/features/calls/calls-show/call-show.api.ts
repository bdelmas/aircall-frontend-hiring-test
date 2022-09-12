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

export const callShowAPI = { fetchCallShow };
export default callShowAPI;

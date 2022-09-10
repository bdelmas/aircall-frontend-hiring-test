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

export const callListAPI = { fetchCallList };
export default callListAPI;

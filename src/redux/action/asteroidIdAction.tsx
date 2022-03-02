import {
  asteroidAllIdService,
  asteroidFixedIdService,
} from "../../services/asteroidIdService";
import { ASTEROID_ID } from "../types/asteroidType";
// type action = {
//   type: string;
//   payload: any;
// };
export const asteroidFixedIdAction = (Id: any) => {
  return async (dispatch: any) => {
    const res = await asteroidFixedIdService(Id);
    dispatch({ type: ASTEROID_ID, payload: res.data });
  };
};

export const asteroidAllIdAction = async () => {
  const data = await asteroidAllIdService();
  return data.data;
};

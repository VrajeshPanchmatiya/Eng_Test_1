import { ASTEROID_ID } from "../types/asteroidType";
// interface stateType {
//   info: any;
// }
const initialState = {
  info: {},
};
export const asteroidStore = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case ASTEROID_ID:
      return {
        ...state,
        info: payload,
      };
    default:
      return state;
  }
};

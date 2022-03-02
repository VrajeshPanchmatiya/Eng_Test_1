import axios from "axios";

export const asteroidFixedIdService = (Id: any) => {
  return axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/${Id}?api_key=nelD84wc0FvSIxcmAfdNMcDenZkr3GgImSsAVXOZ`
  );
};

export const asteroidAllIdService = () => {
  return axios.get(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=nelD84wc0FvSIxcmAfdNMcDenZkr3GgImSsAVXOZ"
  );
};

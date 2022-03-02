import { Typography } from "@mui/material";
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
// import asteroidStore from "./../reducer/asteroidStore";
// import { Input } from "./Input";
// import { Button } from "./Button";
// type Details = {
//   names: { firstName: string; lastName: string }[];

// };
// type stateType = {

//   // state : {

//       id:string

//       randomAteroidData:object

//   //}
// const DetailForm = (props: Details) => {
const DetailForm = () => {
  type stateType = {
    info: any;
  };
  const response = useSelector((state: stateType) => {
    return state.info;
  });

  console.log(response);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Asteroid Detail</h1>
      <Typography>Name: {response?.name}</Typography>
      <Typography>Nasa URL: {response?.nasa_jpl_url}</Typography>
      <Typography>
        Potential Hazardous Asteroid:
        {response?.is_potentially_hazardous_asteroid ? "true" : "false"}
      </Typography>
    </div>
  );
};
export default DetailForm;

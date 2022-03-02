import { TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  asteroidAllIdAction,
  asteroidFixedIdAction,
} from "./../redux/action/asteroidIdAction";
import { useNavigate } from "react-router-dom";

const AsteroidForm = () => {
  const [asteroidId, setAsteroidId] = useState<number | undefined>();
  const dispatch = useDispatch();
  const history = useNavigate();

  const changeAsteroidId = (e: any) => {
    setAsteroidId(e.target.value);
  };
  const handleFixedIdBtn = () => {
    dispatch(asteroidFixedIdAction(asteroidId));
    history("/DetailForm");
  };
  const handleRandomIdBtn = async () => {
    const resData = await asteroidAllIdAction();
    const finalId = await resData.near_earth_objects.map(
      ({ id }: { id: any }) => {
        return id;
      }
    );
    let finalData = Math.ceil(Math.abs(Math.random() * finalId.length));
    setAsteroidId(finalId[finalData]);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Nasa User Form</h1>
      <div>
        <TextField
          variant="outlined"
          color="info"
          type="number"
          placeholder="Asteroid Id"
          data-testid="IdInput"
          value={asteroidId || ""}
          onChange={changeAsteroidId}
        />
      </div>
      <div>
        <Button
          type="button"
          data-testid="IdInputBtn"
          variant="outlined"
          disabled={asteroidId === undefined}
          onClick={handleFixedIdBtn}
        >
          Find Asteroid Detail
        </Button>
        <Button type="button" variant="outlined" onClick={handleRandomIdBtn}>
          Random Asteroid Detail
        </Button>
      </div>
    </div>
  );
};
export default AsteroidForm;

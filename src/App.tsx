import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DetailForm from "./components/DetailForm";
import AsteroidForm from "./components/AsteroidForm";
import { Routes, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { asteroidStore } from "./redux/reducer/asteroidStore";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(asteroidStore, applyMiddleware(thunk));
// import { Switch } from "@mui/material";
// const nameList = [
//   {
//     firstName: "krunal",
//     lastName: "patel",
//   },
//   {
//     firstName: "komal",
//     lastName: "patel",
//   },
//   {
//     firstName: "sunny",
//     lastName: "davda",
//   },
// ];

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {/* <DetailForm names={nameList} /> */}
        {/* <AsteroidForm /> */}

        <Route path="/" element={<AsteroidForm />} />
        <Route path="/DetailForm" element={<DetailForm />} />
      </Routes>
    </Provider>
  );
}

export default App;

import AsteroidForm from "./components/AsteroidForm";
import { render, screen, getByRole } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { asteroidStore } from "./redux/reducer/asteroidStore";
import thunk from "redux-thunk";
const store = createStore(asteroidStore, applyMiddleware(thunk));
test("check text name", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AsteroidForm />
      </BrowserRouter>
    </Provider>
  );
  const input = screen.getByTestId("IdInput");
  expect(input).toBeInTheDocument();
  const btn = screen.getByTestId("IdInputBtn");
  expect(btn).toBeInTheDocument();
  const h1Element = screen.getByText("Nasa User Form");
  expect(h1Element).toBeInTheDocument();
  const placeholder = screen.getByPlaceholderText(/Asteroid Id/);
  expect(placeholder).toBeInTheDocument();
});
// test("check Button color", () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <AsteroidForm />
//       </BrowserRouter>
//     </Provider>
//   );

//   const TextElement = screen.getByRole("TextField", { name: "id" });
//   expect(TextElement).toHaveStyle({ color: "info" });
// });

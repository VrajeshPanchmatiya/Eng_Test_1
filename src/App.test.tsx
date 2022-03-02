import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { asteroidStore } from "./redux/reducer/asteroidStore";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
const store = createStore(asteroidStore, applyMiddleware(thunk));
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import AsteroidForm from "./components/AsteroidForm";
// test("learning React Jest 1", () => {
//   render(<App />);
//   // const linkElement = screen.getByText("/learn react/i");
//   expect(linkElement).toBeInTheDocument();
// });
// test("check text name", () => {
//   render(<AsteroidForm />);
//   const h1Element = screen.getByText("Nasa User Form");
//   expect(h1Element).toBeInTheDocument();
// });
// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import AsteroidForm from "./components/AsteroidForm";

// test('button color', ()=>{
// 	render(<AsteroidForm/>);
// 	const formBtn = screen.getByRole('button',{ name:'Change to Blue'});

// 	expect(formBtn).toHaveStyle({backgroundColor: 'red'})

// 	fireEvent.click(formBtn);
// 	expect(formBtn).toHaveStyle({backgroundColor: 'blue'})
// 	expect(formBtn.textContent).toBe('Change to red');

// })

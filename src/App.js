import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkoutRoutes } from "@nabstore/utils";
import Cart from "./screens/Cart";

const App = ({
  store,
  cleanCartAction,
  selectCartAction,
  addProductToCartAction,
  removeProductFromCartAction,
}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-sm mt-5">
        <Routes>
          <Route
            exact
            path={checkoutRoutes.CART}
            element={
              <Cart
                addProductToCartAction={addProductToCartAction}
                cleanCartAction={cleanCartAction}
                removeProductFromCartAction={removeProductFromCartAction}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

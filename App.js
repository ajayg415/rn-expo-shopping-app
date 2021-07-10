import React, { useEffect } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as Fonts from "expo-font";

import productReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigation";

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () =>
  Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

export default function App() {

  useEffect(() => {
    fetchFonts();
  }, []);

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

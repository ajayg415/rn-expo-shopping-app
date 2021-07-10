import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";

import ShopNavigator from "./navigation/ShopNavigation";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () =>
  Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

export default function App() {
  const [dataLoader, setDataLoader] = useState(false);

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoader(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

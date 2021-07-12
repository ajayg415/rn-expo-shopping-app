import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import IconButton from "../components/UI/IconButton";

import Colors from "../constants/Colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Overview"
      component={ProductsOverviewScreen}
      options={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
    <Stack.Screen
      name="Details"
      component={ProductDetailScreen}
      options={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{
        title: "Cart Screen",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
);

const ShopNavigation = () => (
  <Drawer.Navigator initialRouteName="Products">
    <Drawer.Screen
      name="Products"
      component={stackNavigation}
      options={{
        drawerIcon: () => (
          <IconButton
            iconName="md-home"
            onIconPress={() => navigation.openDrawer()}
            iconColor={"blue"}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Orders"
      component={OrdersScreen}
      options={{
        drawerLabel: "Orders Screen",
        drawerIcon: () => (
          <IconButton
            iconName="md-list"
            onIconPress={() => navigation.openDrawer()}
            iconColor={"blue"}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default ShopNavigation;

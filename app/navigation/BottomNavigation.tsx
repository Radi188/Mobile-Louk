import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./BottomTabParamList";
import WishlistScreen from "../screens/Wishlist/Wishlist";
import MyCartScreen from "../screens/MyCart/MyCart";
import HomeScreen from "../screens/Home/Home";
import ProfileScreen from "../screens/Profile/Profile";
import BottomMenu from "../layout/BottomMenu";
import { useTheme } from "@react-navigation/native";
import Components from "../screens/Components/Components";
import Transaction from "../screens/Transaction/Transaction";
import FinancialStatement from "../screens/Financial/FinancialStatement";
import Sale from "../screens/Sale/Sale";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <BottomMenu {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Sale" component={Sale} />
      <Tab.Screen name="FinancialStatement" component={FinancialStatement} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

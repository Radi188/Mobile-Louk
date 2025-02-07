import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Cardstyle2 from "../../components/Card/Cardstyle2";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeBox from "../../components/SwipeBox";

const cardData = [
  {
    id: "0",
    image: IMAGES.item1,
    title: "Hot Creamy Cappuccino Latte Ombe",
    price: "$12.6",
    brand: "Coffee",
  },
  {
    id: "1",
    image: IMAGES.item2,
    title: "Hot Cappuccino Latte with Mocha",
    price: "$13.6",
    brand: "Coffee",
  },
  {
    id: "2",
    image: IMAGES.item3,
    title: "Sweet Lemon Indonesian Tea",
    price: "$51.6",
    brand: "Tea, Lemon",
  },
  {
    id: "3",
    image: IMAGES.item13,
    title: "Arabica Latte Ombe Coffee",
    price: "$51.6",
    brand: "Coffee",
  },
  {
    id: "4",
    image: IMAGES.item14,
    title: "Original Latte Ombe Hot Coffee ",
    price: "$51.6",
    brand: "Coffee",
  },
];

const SwipeData = [
  {
    image: IMAGES.small1,
    title: "New Arrivals Alert!",
    date: "15 July 2024",
    amount: "-20.00",
  },
  {
    image: IMAGES.small2,
    title: "Flash Sale Announcement",
    date: "15 July 2024",
    amount: "20.00",
  },
  {
    image: IMAGES.brand5,
    title: "Exclusive Discounts Inside",
    date: "15 July 2024",
    amount: "-30.00",
  },
  {
    image: IMAGES.small4,
    title: "Limited Stock - Act Fast!",
    date: "15 July 2024",
    amount: "20.00",
  },
  {
    image: IMAGES.small5,
    title: "Get Ready to Shop",
    date: "15 July 2024",
    amount: "-100.00",
  },
  {
    image: IMAGES.brand2,
    title: "Don't Miss Out on Savings",
    date: "15 July 2024",
    amount: "200.00",
  },
  {
    image: IMAGES.small7,
    title: "Flash Sale Announcement",
    date: "15 July 2024",
    amount: "120.00",
  },
  {
    image: IMAGES.brand3,
    title: "Don't Miss Out on Savings",
    date: "15 July 2024",
    amount: "-50.00",
  },
  {
    image: IMAGES.brand1,
    title: "Get Ready to Shop",
    date: "15 July 2024",
    amount: "-10.00",
  },
];

const Transaction = ({ navigation }: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View
      style={{ backgroundColor: colors.background, flex: 1, marginBottom: 70 }}
    >
      <Header title="Transaction" />
      <View
        style={{
          height: 125,
          paddingHorizontal: 30,
          paddingVertical: 30,
          width: "100%",
          backgroundColor: COLORS.primary,
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: COLORS.light, fontSize: 16, marginBottom: 12 }}>
          Total Balance ($)
        </Text>
        <Text style={{ color: COLORS.white, fontWeight: 500, fontSize: 30 }}>
          $ 0
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: cardData.length === 0 ? "center" : "flex-start",
        }}
      >
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 15, alignItems: "center" },
          ]}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 600, color: COLORS.black }}
            >
              Transaction
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: 80,
                height: 30,
                borderRadius: 30,
                backgroundColor: COLORS.primaryLight,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}
            >
              <FontAwesome name="filter" color={COLORS.primary} size={20} />
              <Text style={{ fontSize: 12, fontWeight: 500 }}>Filter</Text>
            </TouchableOpacity>
          </View>
          <View style={GlobalStyleSheet.container}>
            <GestureHandlerRootView>
              {SwipeData.map((data: any, index: any) => {
                return (
                  <View
                    style={{
                      marginBottom: 10,
                      marginHorizontal: -10,
                      // paddingHorizontal: 15,
                    }}
                    key={index}
                  >
                    <SwipeBox data={data} colors={colors} />
                  </View>
                );
              })}
            </GestureHandlerRootView>
          </View>

          <View>
            {cardData.length === 0 && (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.primaryLight,
                    marginBottom: 20,
                  }}
                >
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: "contain",
                      tintColor: COLORS.primary,
                    }}
                    source={IMAGES.transfer}
                  />
                </View>
                <Text
                  style={{ ...FONTS.h5, color: colors.title, marginBottom: 8 }}
                >
                  Your Transaction is Empty!
                </Text>
                <Text
                  style={{
                    ...FONTS.fontSm,
                    color: colors.text,
                    textAlign: "center",
                    paddingHorizontal: 40,
                    marginBottom: 30,
                  }}
                >
                  Add Product to you favourite and shop now.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Transaction;

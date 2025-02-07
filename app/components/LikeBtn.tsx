import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants/theme";
import { useTheme } from "@react-navigation/native";
//import { FontAwesome } from '@expo/vector-icons';

const LikeBtn = ({ wishlist, onPress, inWishlist, id }: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <Pressable
      accessible={true}
      onPress={() => (onPress ? onPress() : "")}
      style={{
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome size={22} color={COLORS.primary} name="plus" />
    </Pressable>
  );
};

export default LikeBtn;

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useSelector } from "react-redux";

const ListStyle1 = (props: any) => {
  const { colors }: { colors: any } = useTheme();
  const checkoutItem = useSelector((state: any) => state.checkout.checkoutItem);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() => props.onPress && props.onPress()}
        style={[styles.listStyle, { backgroundColor: colors.card }]}
      >
        {props.icon && (
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.icon}
          </View>
        )}
        {props.image && (
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              marginRight: 10,
            }}
            source={props.image}
          />
        )}
        <Text
          style={{
            ...FONTS.fontRegular,
            fontSize: 14,
            color: colors.title,
            flex: 1,
          }}
        >
          {props.title}
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            backgroundColor: COLORS.primary,
            borderRadius: 15,
            marginRight: 15,
          }}
        >
          <Text style={{ fontSize: 14, color: COLORS.white }}>
            {checkoutItem.length}
          </Text>
        </View>
        {props.arrowDown && (
          <FontAwesome name={"angle-up"} color={colors.title} size={24} />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create<any>({
  listStyle: {
    //borderBottomWidth:1,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: SIZES.radius_lg,
    backgroundColor: COLORS.card,
    marginBottom: 10,
    shadowOffset: 0.5,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: COLORS.primary,
  },
});

export default ListStyle1;

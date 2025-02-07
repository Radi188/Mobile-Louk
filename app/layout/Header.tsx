import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/theme";
import { GlobalStyleSheet } from "../constants/StyleSheet";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  title?: string;
  leftIcon?: string;
  leftAction?: any;
  transparent?: any;
  productId?: string;
  titleLeft?: any;
  titleLeft2?: any;
  titleRight?: any;
  rightIcon1?: any;
  rightIcon2?: any;
  rightIcon3?: string;
  rightIcon4?: any;
  rightIcon5?: any;
  onPress5?: any;
};

const Header = ({
  title,
  leftIcon,
  leftAction,
  transparent,
  productId,
  titleLeft,
  titleLeft2,
  titleRight,
  rightIcon1,
  rightIcon4,
  rightIcon2,
  rightIcon3,
  rightIcon5,
  onPress5,
}: Props) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const navigation = useNavigation<any>();

  return (
    <View
      style={[
        {
          height: 65,
          backgroundColor: colors.card,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99,
        },
        transparent && {
          position: "absolute",
          left: 0,
          right: 0,
          borderBottomWidth: 0,
        },
        Platform.OS === "ios" && {
          backgroundColor: COLORS.primary,
        },
      ]}
    >
      <View
        style={[
          GlobalStyleSheet.container,
          {
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 15,
            justifyContent: "space-between",
          },
        ]}
      >
        {leftIcon === "back" && (
          <TouchableOpacity
            onPress={() => (leftAction ? leftAction() : navigation.goBack())}
            style={[styles.actionBtn, { backgroundColor: "#F6F6F6" }]}
          >
            <Feather size={24} color={COLORS.title} name={"arrow-left"} />
          </TouchableOpacity>
        )}
        <View style={{ flex: 1 }}>
          {productId ? (
            <Text
              style={{
                ...FONTS.fontMedium,
                fontSize: 24,
                color: colors.title,
              }}
            >
              <Text style={{ color: COLORS.primary }}>e</Text>Bike
            </Text>
          ) : (
            <Text
              style={{
                ...FONTS.fontSemiBold,
                fontSize: 20,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {title}
            </Text>
          )}
        </View>
        {rightIcon1 == "search" && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Search")}
            style={[styles.actionBtn, {}]}
          >
            <Feather size={20} color={colors.title} name={"search"} />
          </TouchableOpacity>
        )}
        {rightIcon2 == "Edit" && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("EditProfile")}
            style={[styles.actionBtn, {}]}
          >
            <FontAwesome size={22} color={colors.title} name={"pencil"} />
          </TouchableOpacity>
        )}
        {rightIcon3 == "cart" && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("MyCart")}
            style={[styles.actionBtn, {}]}
          >
            <FontAwesome
              size={22}
              color={colors.title}
              name={"shopping-cart"}
            />
          </TouchableOpacity>
        )}
        {rightIcon4 == "home" && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("DrawerNavigation", { screen: "Home" })
            }
            style={[styles.actionBtn, {}]}
          >
            <FontAwesome size={22} color={colors.title} name={"home"} />
          </TouchableOpacity>
        )}
        {rightIcon5 == "plus" ? (
          <TouchableOpacity
            onPress={onPress5}
            style={[styles.actionBtn, { backgroundColor: COLORS.success }]}
          >
            <Feather size={24} color={COLORS.white} name={"plus"} />
          </TouchableOpacity>
        ) : (
          <View
            style={[styles.actionBtn, { backgroundColor: COLORS.primary }]}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    ...FONTS.fontMedium,
  },
  actionBtn: {
    height: 45,
    width: 45,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtnRight: {
    height: 45,
    width: 45,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;

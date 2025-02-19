import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { IMAGES } from "../constants/Images";
import { COLORS, FONTS } from "../constants/theme";
import { Feather } from "@expo/vector-icons";
import ThemeBtn from "../components/ThemeBtn";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../redux/actions/drawerAction";
import { GlobalStyleSheet } from "../constants/StyleSheet";

const MenuItems = [
  {
    id: "0",
    icon: IMAGES.home,
    name: "Home",
    navigate: "Home",
  },
  {
    id: "1",
    icon: IMAGES.producta,
    name: "Item Stock",
    navigate: "StandardList",
    url: "Product/List",
  },
  {
    id: "2",
    icon: IMAGES.Category,
    name: "Category",
    navigate: "StandardList",
    url: "Category/List",
  },
  {
    id: "3",
    icon: IMAGES.deliverytruck2,
    name: "Purchase Stock",
    navigate: "StandardList",
    url: "PurhcaseStock/List",
  },

  {
    id: "8",
    icon: IMAGES.wallet,
    name: "Account Recievable",
    navigate: "StandardList",
    url: "AccountRecievable/List",
  },
  {
    id: "11",
    icon: IMAGES.transfer,
    name: "Account Payable",
    navigate: "StandardList",
    url: "AccountPayable/List",
  },

  {
    id: "10",
    icon: IMAGES.Star4,
    name: "Agency Coin",
    navigate: "StandardList",
    url: "Agency/List",
  },
  {
    id: "12",
    icon: IMAGES.user3,
    name: "User Management",
    navigate: "StandardList",
    url: "Auth/List",
  },
  {
    id: "7",
    icon: IMAGES.folder,
    name: "Report",
    navigate: "StandardList",
    url: "Report/List",
  },

  {
    id: "9",
    icon: IMAGES.logout,
    name: "Logout",
    navigate: "SingIn",
  },
];

const DrawerMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { colors }: { colors: any } = theme;
  const navigation = useNavigation<any>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 15,
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 15,
            paddingRight: 10,
          }}
        >
          <Image
            style={{ height: 35, width: 114 }}
            source={theme.dark ? IMAGES.appnamedark : IMAGES.appname}
          />
        </View>
        <View
          style={[
            GlobalStyleSheet.flex,
            {
              paddingHorizontal: 15,
              paddingBottom: 20,
            },
          ]}
        >
          <Text
            style={{ ...FONTS.fontSemiBold, fontSize: 20, color: colors.title }}
          >
            Main Menus
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(closeDrawer())}
            activeOpacity={0.5}
          >
            <Feather size={24} color={colors.title} name="x" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 10 }}>
          {MenuItems.map((data: any, index: any) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  data.navigate === "DrawerNavigation"
                    ? dispatch(closeDrawer())
                    : dispatch(closeDrawer());
                  navigation.navigate(data.navigate, {
                    url: data.url,
                    header: data.name,
                  });
                }}
                key={index}
                style={[
                  GlobalStyleSheet.flex,
                  {
                    paddingVertical: 5,
                    marginBottom: 0,
                  },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <View
                    style={{
                      height: 45,
                      width: 45,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={data.icon}
                      style={{
                        height: 24,
                        width: 24,
                        tintColor:
                          data.id == "9"
                            ? "#FF8484"
                            : data.id === "0"
                            ? COLORS.primary
                            : "#BDBDBD",
                        //marginRight:14,
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                  <Text
                    style={[
                      FONTS.fontRegular,
                      { color: colors.title, fontSize: 16, opacity: 0.6 },
                      data.id === "0" && {
                        ...FONTS.fontSemiBold,
                        fontSize: 16,
                        color: COLORS.primary,
                      },
                    ]}
                  >
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ paddingTop: 15, paddingHorizontal: 5 }}>
          <ThemeBtn />
        </View>
        <View style={{ paddingTop: 30, paddingHorizontal: 10 }}>
          <Text style={{ ...FONTS.fontMedium, fontSize: 16, color: "#868686" }}>
            Louk Coin App
          </Text>
          <Text style={{ ...FONTS.fontMedium, fontSize: 12, color: "#B1B1C3" }}>
            App Version 1.0.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DrawerMenu;

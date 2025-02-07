import React, { useImperativeHandle, useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { View, ScrollView, Text } from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import ButtonOutline from "../../components/Button/ButtonOutline";
import Button from "../../components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../../constants/theme";
import Divider from "../../components/Dividers/Divider";
import { FontAwesome5 } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutSheet from "../../components/BottomSheet/CheckoutSheet";

const listType = [
  {
    title: "Expense",
    data: [
      {
        title: "Entertainment",
        type: [
          {
            title: "Entertainment",
            icon: "glass-cheers",
          },
          {
            title: "Cinema",
            icon: "simplybuilt",
          },
          {
            title: "Vacation",
            icon: "umbrella-beach",
          },
          {
            title: "Sports",
            icon: "basketball-ball",
          },

          {
            title: "Night Club",
            icon: "glass-cheers",
          },
        ],
      },
      {
        title: "Food & Drink",
        type: [
          {
            title: "Food",
            icon: "pizza-slice",
          },
          {
            title: "Drink",
            icon: "glass-martini-alt",
          },
          {
            title: "Restaurant",
            icon: "concierge-bell",
          },
        ],
      },
      {
        title: "Housing",
        type: [
          {
            title: "Housing",
            icon: "city",
          },
          {
            title: "Rent",
            icon: "handshake",
          },
          {
            title: "Insurance",
            icon: "lungs",
          },
          {
            title: "Loan",
            icon: "envelope-open-text",
          },
          {
            title: "Electricity",
            icon: "plug",
          },
          {
            title: "Water",
            icon: "water",
          },
          {
            title: "Internet",
            icon: "wifi",
          },
        ],
      },
      {
        title: "Lifestyle",
        type: [
          {
            title: "Clothing",
            icon: "hand-holding-usd",
          },
          {
            title: "Shopping",
            icon: "dolly-flatbed",
          },
          {
            title: "Gift",
            icon: "gifts",
          },
          {
            title: "Education",
            icon: "laptop-code",
          },
        ],
      },
      {
        title: "Transportation",
        type: [
          {
            title: "Gasoline",
            icon: "fire-extinguisher",
          },
          {
            title: "Car Repair",
            icon: "car",
          },
          {
            title: "Taxi",
            icon: "taxi",
          },
          {
            title: "Transportation",
            icon: "ship",
          },
        ],
      },
    ],
  },
  {
    title: "Income",
    data: [
      {
        title: "Income",
        type: [
          {
            title: "Other Income",
            icon: "dollar-sign",
          },
          {
            title: "Salary",
            icon: "hands",
          },
          {
            title: "Investment",
            icon: "signal",
          },
          {
            title: "Interest",
            icon: "sort-amount-up-alt",
          },
          {
            title: "Benefit",
            icon: "sort-amount-up",
          },
        ],
      },
    ],
  },
  {
    title: "Saving",
    data: [
      {
        title: "Savings",
        type: [
          {
            title: "Car Saving",
            icon: "money-bill-wave",
          },
          {
            title: "Vacation Saving",
            icon: "umbrella-beach",
          },
          {
            title: "Emergency Saving",
            icon: "handshake",
          },
          {
            title: "House Saving",
            icon: "city",
          },
        ],
      },
    ],
  },
];

const FinancialStatement = ({ navigation, ref }: any) => {
  const [activeSheet, setActiveSheet] = useState<any>("");
  const refRBSheet = useRef<any>();
  const [title, setTitle] = useState("");

  useImperativeHandle(ref, () => ({
    openSheet: async (value: string) => {
      await setActiveSheet(value);
      await refRBSheet.current.open();
    },
    closeSheet() {
      refRBSheet.current.close();
    },
  }));
  const onPressItem = async (title: any) => {
    await refRBSheet.current.open();
    setTitle(title);
  };
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [activeButtone, setActiveButtone] = useState<any>("Expense");

  const list = listType.filter((item: any) => item.title === activeButtone);

  return (
    <View
      style={{ backgroundColor: colors.background, flex: 1, marginBottom: 80 }}
    >
      <Header title="Financial Statement" />
      <ScrollView contentContainerStyle={{}}>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 15, alignItems: "center" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 20,
            }}
          >
            {listType.map((item: any, index: any) => {
              return (
                <View key={index}>
                  {activeButtone === item.title ? (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setActiveButtone(item.title)}
                      style={{
                        height: 40,
                        borderRadius: 8,
                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                        paddingHorizontal: 30,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.h6,
                          ...FONTS.fontMedium,
                          textAlign: "center",
                          fontSize: 14,
                          color: COLORS.white,
                        }}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <ButtonOutline
                      title={item.title}
                      size={"sm"}
                      onPress={() => setActiveButtone(item.title)}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={{ margin: 15 }}>
          {list[0].data.map((list: any, index: any) => {
            return (
              <View>
                <Text style={{ ...FONTS.fontSemiBold, color: COLORS.title }}>
                  {list.title}
                </Text>
                <Divider color={COLORS.primaryLight} />
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 30,
                    marginBottom: 20,
                  }}
                >
                  {list.type.map((item: any, index: any) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => onPressItem(item.title)}
                        style={{
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <View
                          key={index}
                          style={{
                            width: 60,
                            height: 60,
                            padding: 10,
                            borderRadius: 50,
                            marginBottom: 5,
                            backgroundColor: COLORS.primaryLight,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FontAwesome5
                            name={item.icon}
                            size={24}
                            color={COLORS.primary}
                          />
                        </View>
                        <Text
                          style={{
                            ...FONTS.fontXs,
                            color: COLORS.label,
                          }}
                        >
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={475}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <CheckoutSheet
          sheetRef={refRBSheet}
          title={activeButtone}
          type={"Financial"}
          financeType={title}
        />
      </RBSheet>
    </View>
  );
};

export default FinancialStatement;

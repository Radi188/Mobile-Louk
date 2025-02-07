import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeCheckout from "../SwipeCheckout";
import Input from "../Input/Input";
import Select from "../Input/Select";

type Props = {
  sheetRef: any;
  title: any;
  type: any;
  financeType: any;
};

const CheckoutSheet = ({ sheetRef, title, type, financeType }: Props) => {
  const theme = useTheme();
  const checkoutItem = useSelector((state: any) => state.checkout.checkoutItem);
  const { colors }: { colors: any } = theme;
  const navigation = useNavigation<any>();
  const [modal, setModal] = useState(false);

  if (type === "Sale") {
    return (
      <ScrollView
        style={[
          GlobalStyleSheet.container,
          {
            padding: 0,
            flexGrow: 1,
            backgroundColor: colors.card,
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: theme.dark ? colors.background : colors.card,
              marginBottom: 30,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <Text
              style={{
                flex: 1,
                ...FONTS.h6,
                color: colors.title,
                padding: 15,
              }}
            >
              {title}
            </Text>
            <TouchableOpacity
              onPress={() => sheetRef.current.close()}
              style={{
                height: 32,
                width: 32,
                borderRadius: 32,
                backgroundColor: colors.background,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather size={20} color={colors.title} name="x" />
            </TouchableOpacity>
          </View>
          {checkoutItem.length > 0 ? (
            <GestureHandlerRootView
              style={{
                paddingHorizontal: 15,
                marginTop: 15,
                marginBottom: -15,
              }}
            >
              {checkoutItem.map((data: any, index: any) => {
                return (
                  <View
                    style={{
                      marginBottom: 15,
                    }}
                    key={index}
                  >
                    <SwipeCheckout data={data} colors={colors} />
                  </View>
                );
              })}
            </GestureHandlerRootView>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 400,
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
                <Feather color={COLORS.primary} size={24} name="heart" />
              </View>
              <Text
                style={{ ...FONTS.h5, color: colors.title, marginBottom: 8 }}
              >
                Please Add item to cart!
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
                Add Product into Cart to proceed checkout.
              </Text>
            </View>
          )}
          {checkoutItem.length > 0 && (
            <View
              style={[
                GlobalStyleSheet.flex,
                { paddingHorizontal: 15, marginTop: 30 },
              ]}
            >
              <Button
                onPress={() => {
                  navigation.navigate("Checkout", { accountrecievable: true }),
                    sheetRef.current.close();
                }}
                title={"Account Recievable"}
                text={theme.dark ? COLORS.card : COLORS.primary}
                color={COLORS.primaryLight}
                size={"sm"}
                style={{ borderWidth: 1, borderColor: COLORS.primary }}
              />
              <Button
                onPress={() => {
                  navigation.navigate("Checkout", { accountrecievable: false }),
                    sheetRef.current.close();
                }}
                title={"Checkout"}
                text={theme.dark ? COLORS.title : COLORS.card}
                color={COLORS.primary}
                size={"sm"}
              />
            </View>
          )}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView
        style={[
          GlobalStyleSheet.container,
          {
            padding: 0,
            flexGrow: 1,
            backgroundColor: colors.card,
          },
        ]}
      >
        <View
          style={[
            {
              backgroundColor: theme.dark ? colors.background : colors.card,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <Text
              style={{
                flex: 1,
                ...FONTS.h6,
                color: colors.title,
                padding: 15,
              }}
            >
              {title}
            </Text>
            <TouchableOpacity
              onPress={() => sheetRef.current.close()}
              style={{
                height: 32,
                width: 32,
                borderRadius: 32,
                backgroundColor: colors.background,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather size={20} color={colors.title} name="x" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={GlobalStyleSheet.cardBody}>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ ...FONTS.fontSemiBold, marginBottom: 10 }}>
              Enter Description
            </Text>
            <Input
              icon={
                <FontAwesome
                  style={{ opacity: 0.6 }}
                  name={"desktop"}
                  size={16}
                  color={colors.text}
                />
              }
              //value={''}
              placeholder="Description"
              onChangeText={(value) => console.log(value)}
            />
          </View>
          <View style={{ marginBottom: 15, marginTop: 5, width: "100%" }}>
            <Text style={{ ...FONTS.fontSemiBold, marginBottom: 10 }}>
              {title} Type
            </Text>
            <Select
              modal={setModal}
              defaultText={"Agency"}
              value={financeType}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ ...FONTS.fontSemiBold, marginBottom: 10 }}>
              Enter Amount
            </Text>
            <Input
              icon={
                <FontAwesome
                  style={{ opacity: 0.6 }}
                  name={"money"}
                  size={16}
                  color={colors.text}
                />
              }
              //value={''}
              placeholder="Amount"
              onChangeText={(value) => console.log(value)}
            />
          </View>
        </View>
        <View
          style={{
            padding: 20,
            maxWidth: SIZES.container,
            width: "100%",
          }}
        >
          <Button
            title="Continue"
            color={COLORS.primary}
            text={COLORS.card}
            // onPress={() => navigation.navigate("Checkout")}
            style={{ borderRadius: 48 }}
          />
        </View>
      </ScrollView>
    );
  }
};

export default CheckoutSheet;

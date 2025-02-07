import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Header from "../../layout/Header";
import { IMAGES } from "../../constants/Images";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { Feather } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../constants/theme";
import Button from "../../components/Button/Button";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeCheckout from "../../components/SwipeCheckout";
import Input from "../../components/Input/Input";
import Select from "../../components/Input/Select";

const checkoutData = [
  {
    image: IMAGES.map,
    title: "Delivery address",
    text: "123 Main Street, Anytown, USA 12345",
    navigate: "DeliveryAddress",
  },
  {
    image: IMAGES.card2,
    title: "Payment",
    text: "XXXX XXXX XXXX 3456",
    navigate: "Payment",
  },
];

type CheckoutScreenProps = StackScreenProps<RootStackParamList, "Checkout">;

const Checkout = ({ navigation, route }: CheckoutScreenProps) => {
  const theme = useTheme();
  const { accountrecievable }: any = route.params;
  const { colors }: { colors: any } = theme;
  const checkoutItem = useSelector((state: any) => state.checkout.checkoutItem);
  const totalPrice = checkoutItem.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );
  const [coinData, setCoinData] = useState<any>({ name: "martin" });
  const [modalShow, setModal] = useState<boolean>(true);

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header
        title="Checkout"
        leftIcon="back"
        titleRight
        //titleLeft
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={[
            GlobalStyleSheet.container,
            { paddingTop: 5, marginTop: 10, flex: 1 },
          ]}
        >
          <GestureHandlerRootView>
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
        </View>
      </ScrollView>
      <View style={[GlobalStyleSheet.container, { paddingBottom: 0 }]}>
        <View style={[styles.bottomCard, { backgroundColor: colors.card }]}>
          <View style={{ paddingVertical: 5 }}>
            <Text style={[styles.title1, { color: colors.title }]}>
              Price Details
            </Text>
          </View>
          <View style={[GlobalStyleSheet.flex, { gap: 15 }]}>
            <View style={{ width: "50%" }}>
              <Text
                style={[
                  styles.title2,
                  { color: colors.title, marginBottom: 5 },
                ]}
              >
                Agency
              </Text>
              <View style={{ marginBottom: 15, marginTop: 5, width: "100%" }}>
                <Select
                  modal={setModal}
                  defaultText={"Agency"}
                  value={coinData.name}
                />
              </View>
            </View>
            {accountrecievable && (
              <View style={{ width: "50%" }}>
                <Text
                  style={[
                    styles.title2,
                    { color: colors.title, marginBottom: 5 },
                  ]}
                >
                  Customer
                </Text>
                <View style={{ marginBottom: 15, marginTop: 5, width: "100%" }}>
                  <Select
                    modal={setModal}
                    defaultText={"Customer"}
                    value={coinData.name}
                  />
                </View>
              </View>
            )}
          </View>
          <View>
            <View style={GlobalStyleSheet.flex}>
              <Text style={[styles.title2, { color: colors.title }]}>
                Price ({checkoutItem.length} Items)
              </Text>
              <Text style={[styles.title2, { color: colors.title }]}>
                ${totalPrice}
              </Text>
            </View>
            <View style={[GlobalStyleSheet.flex, { paddingVertical: 5 }]}>
              <Text style={[styles.title2, { color: colors.title }]}>
                Discount Amount
              </Text>
              <Text style={[styles.title2, { color: colors.title }]}>$0</Text>
            </View>
          </View>
          <View style={[GlobalStyleSheet.flex, { paddingVertical: 5 }]}>
            <Text style={[styles.title1, { color: colors.title }]}>
              Total Amount
            </Text>
            <Text style={[styles.title1, { color: "#8ABE12" }]}>
              ${totalPrice}
            </Text>
          </View>
        </View>
      </View>

      <View style={[GlobalStyleSheet.container, GlobalStyleSheet.flex]}>
        <Button
          title="Order"
          color={COLORS.primary}
          text={COLORS.card}
          onPress={() => navigation.navigate("Myorder")}
          style={{ borderRadius: 48 }}
        />
        <Button
          title="Order and Printing"
          color={COLORS.primary}
          text={COLORS.card}
          onPress={() => navigation.navigate("Myorder")}
          style={{ borderRadius: 48 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
    resizeMode: "contain",
  },
  AddressCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    height: 70,
    borderRadius: 15,
    marginBottom: 10,
  },
  AddressCardimage: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.background,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 15,
    color: COLORS.title,
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.inputborder,
    paddingBottom: 50,
  },
  BottomCard: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
    marginHorizontal: -15,
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginTop: 5,
  },
  CardTitle: {
    ...FONTS.fontMedium,
    fontSize: 16,
    color: COLORS.title,
  },
  CardTitle2: {
    ...FONTS.fontRegular,
    fontSize: 14,
    color: COLORS.title,
  },
  BottomTitle: {
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
    marginHorizontal: -15,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomBtn: {
    height: 75,
    width: "100%",
    backgroundColor: COLORS.card,
    justifyContent: "center",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title1: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 12,
    color: COLORS.title,
  },
  bottomCard: {
    paddingHorizontal: 25,
    backgroundColor: COLORS.card,
    borderRadius: 15,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.borderColor,
    padding: 10,
    marginHorizontal: -25,
    paddingHorizontal: 25,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginVertical: 5,
    paddingVertical: 15,
  },
});

export default Checkout;

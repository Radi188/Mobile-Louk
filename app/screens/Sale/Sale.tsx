import React, { useImperativeHandle, useRef, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Cardstyle2 from "../../components/Card/Cardstyle2";
import ListStyle1 from "../../components/List/ListStyle1";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addToCheckoutItem } from "../../redux/reducer/checkoutReducer";
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutSheet from "../../components/BottomSheet/CheckoutSheet";

const profilecartData = [
  {
    id: "1",
    title: "Creamy Latte\nCoffee",
    subtitle: "Beverages",
    image: IMAGES.item15,
    product: [
      {
        id: "0",
        image: IMAGES.item1,
        title: "Hot Creamy Cappuccino Latte Ombe",
        price: 12,
        brand: "Coffee",
      },
      {
        id: "1",
        image: IMAGES.item2,
        title: "Hot Cappuccino Latte with Mocha",
        price: 13.6,
        brand: "Coffee",
      },
      {
        id: "2",
        image: IMAGES.item3,
        title: "Sweet Lemon Indonesian Tea",
        price: 51.6,
        brand: "Tea, Lemon",
      },
      {
        id: "3",
        image: IMAGES.item13,
        title: "Arabica Latte Ombe Coffee",
        price: 51.6,
        brand: "Coffee",
      },
      {
        id: "4",
        image: IMAGES.item14,
        title: "Original Latte Ombe Hot Coffee ",
        price: 51.6,
        brand: "Coffee",
      },
    ],
  },
  {
    id: "2",
    title: "Ombe Ice Coffee \n Latte",
    subtitle: "Beverages",
    image: IMAGES.item16,
    product: [
      {
        id: "1",
        image: IMAGES.item2,
        title: "Hot Cappuccino Latte with Mocha",
        price: 13.6,
        brand: "Coffee",
      },
      {
        id: "0",
        image: IMAGES.item1,
        title: "Hot Creamy Cappuccino Latte Ombe",
        price: 12.6,
        brand: "Coffee",
      },
      {
        id: "4",
        image: IMAGES.item14,
        title: "Original Latte Ombe Hot Coffee ",
        price: 51.6,
        brand: "Coffee",
      },
      {
        id: "3",
        image: IMAGES.item13,
        title: "Arabica Latte Ombe Coffee",
        price: 51.6,
        brand: "Coffee",
      },

      {
        id: "2",
        image: IMAGES.item3,
        title: "Sweet Lemon Indonesian Tea",
        price: 51.6,
        brand: "Tea, Lemon",
      },
    ],
  },
  {
    id: "3",
    title: "Ombe Ice Coffee \n Latte",
    subtitle: "Beverages",
    image: IMAGES.item11,
    product: [],
  },
  {
    id: "4",
    title: "Ombe Ice Coffee \n Latte",
    subtitle: "Beverages",
    image: IMAGES.item12,
    product: [
      {
        id: "0",
        image: IMAGES.item1,
        title: "Hot Creamy Cappuccino Latte Ombe",
        price: 12.6,
        brand: "Coffee",
      },
      {
        id: "1",
        image: IMAGES.item2,
        title: "Hot Cappuccino Latte with Mocha",
        price: 13.6,
        brand: "Coffee",
      },
      {
        id: "2",
        image: IMAGES.item3,
        title: "Sweet Lemon Indonesian Tea",
        price: 51.6,
        brand: "Tea, Lemon",
      },
      {
        id: "3",
        image: IMAGES.item13,
        title: "Arabica Latte Ombe Coffee",
        price: 51.6,
        brand: "Coffee",
      },
      {
        id: "4",
        image: IMAGES.item14,
        title: "Original Latte Ombe Hot Coffee ",
        price: 51.6,
        brand: "Coffee",
      },
    ],
  },
  {
    id: "5",
    title: "Ombe Ice Coffee \n Latte",
    subtitle: "Beverages",
    image: IMAGES.item16,
    product: [
      {
        id: "0",
        image: IMAGES.item1,
        title: "Hot Creamy Cappuccino Latte Ombe",
        price: 12.6,
        brand: "Coffee",
      },
      {
        id: "1",
        image: IMAGES.item2,
        title: "Hot Cappuccino Latte with Mocha",
        price: 13.6,
        brand: "Coffee",
      },
      {
        id: "2",
        image: IMAGES.item3,
        title: "Sweet Lemon Indonesian Tea",
        price: 51.6,
        brand: "Tea, Lemon",
      },
      {
        id: "3",
        image: IMAGES.item13,
        title: "Arabica Latte Ombe Coffee",
        price: 51.6,
        brand: "Coffee",
      },
      {
        id: "4",
        image: IMAGES.item14,
        title: "Original Latte Ombe Hot Coffee ",
        price: 51.6,
        brand: "Coffee",
      },
    ],
  },
];

const Sale = ({ navigation, ref }: any) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeSheet, setActiveSheet] = useState<any>("");
  const refRBSheet = useRef<any>();
  const checkoutItem = useSelector((state: any) => state.checkout.checkoutItem);

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    openSheet: async (value: string) => {
      await setActiveSheet(value);
      await refRBSheet.current.open();
    },
    closeSheet() {
      refRBSheet.current.close();
    },
  }));

  const onPressList = async () => {
    await refRBSheet.current.open();
  };

  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const onAddToCheckout = (item: any) => {
    dispatch(addToCheckoutItem(item));
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <Header title="Sale" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          marginTop: 20,
          backgroundColor: colors.card,
        }}
      >
        <View>
          <TextInput
            placeholder="Search items for You"
            style={[
              styles.TextInput,
              { color: COLORS.title, backgroundColor: "#FAFAFA" },
            ]}
            placeholderTextColor={"#929292"}
          />
          <View style={{ position: "absolute", top: 15, right: 20 }}>
            <Feather name="search" size={24} color={"#C9C9C9"} />
          </View>
        </View>
      </View>
      <View
        style={[
          GlobalStyleSheet.container,
          {
            padding: 0,
            marginBottom: 0,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.borderColor,
          },
        ]}
      >
        <View
          style={{
            paddingTop: 20,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 30 }}
          >
            <View style={[styles.profilecard]}>
              {profilecartData.map((data: any, index: number) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setActiveCategory(index);
                    }}
                    key={index}
                    style={[
                      styles.arrivaldata,
                      {
                        backgroundColor:
                          index === activeCategory
                            ? COLORS.primary
                            : COLORS.primaryLight,
                        borderColor: COLORS.primary,
                        borderWidth: index === activeCategory ? 0 : 1,
                      },
                    ]}
                  >
                    <View
                      style={[
                        GlobalStyleSheet.flexcenter,
                        { gap: 20, justifyContent: "space-around" },
                      ]}
                    >
                      <Image
                        style={{
                          height: 100,
                          width: 100,
                          resizeMode: "contain",
                        }}
                        source={data.image}
                      />
                      <View>
                        <Text
                          numberOfLines={1}
                          style={{
                            ...FONTS.fontMedium,
                            fontSize: 16,
                            color:
                              index === activeCategory
                                ? COLORS.card
                                : COLORS.primary,
                          }}
                        >
                          {data.title}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <Text
                            style={{
                              ...FONTS.fontRegular,
                              fontSize: 14,
                              color:
                                index === activeCategory
                                  ? COLORS.card
                                  : COLORS.primary,
                              opacity: 0.8,
                            }}
                          >
                            {data.subtitle}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          paddingBottom: 100,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: 120,
            height: 40,
            backgroundColor: COLORS.primaryLight,
            borderRadius: SIZES.radius_lg,
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          <FontAwesome name="product-hunt" color={COLORS.primary} size={16} />
          <Text
            style={{
              ...FONTS.fontSemiBold,
              fontSize: 16,
              color: COLORS.primary,
            }}
          >
            {"Product"}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            GlobalStyleSheet.container,
            { padding: 15, alignItems: "center" },
          ]}
        >
          <View>
            {profilecartData[activeCategory].product.map(
              (data: any, index: any) => {
                return (
                  <View key={index} style={{ marginBottom: 15 }}>
                    <Cardstyle2
                      id={data.id}
                      brand={data.brand}
                      image={data.image}
                      price={data.price}
                      countnumber={data.countnumber}
                      title={data.title}
                      onPress={() => navigation.navigate("ProductsDetails")}
                      onPress2={() => onAddToCheckout(data)}
                    />
                  </View>
                );
              }
            )}
            {profilecartData[activeCategory].product.length === 0 && (
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
                  <Feather color={COLORS.primary} size={24} name="heart" />
                </View>
                <Text
                  style={{ ...FONTS.h5, color: colors.title, marginBottom: 8 }}
                >
                  Your Product is Empty!
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
      <View
        style={{
          bottom: 90,
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        <ListStyle1
          arrowDown
          onPress={onPressList}
          icon={
            <Feather name={"shopping-cart"} size={15} color={COLORS.primary} />
          }
          title={"Checkout Item"}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={
          checkoutItem.length < 4 && checkoutItem.length > 0
            ? checkoutItem.length * 130 + 80
            : 550
        }
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
          title={"Checkout Items"}
          type={"Sale"}
        />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    width: 380,
    height: 60,
    borderRadius: 61,
    paddingHorizontal: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    backgroundColor: "#FAFAFA",
  },
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    //width:'100%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  sectionimg: {
    height: 104,
    width: 104,
    borderRadius: 150,
    backgroundColor: COLORS.primary,
    overflow: "hidden",
    marginBottom: 25,
  },
  brandsubtitle2: {
    ...FONTS.fontRegular,
    fontSize: 12,
  },
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  profilecard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  cardimg: {
    height: 54,
    width: 54,
    borderRadius: 55,
    backgroundColor: COLORS.card,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Sale;

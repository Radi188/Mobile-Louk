import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { openDrawer } from "../../redux/actions/drawerAction";
import BasicPieChart from "../../components/Charts/PieChart";
import BasicBarChart from "../../components/Charts/BarChart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeBox from "../../components/SwipeBox";
import ClassicTable from "../../components/Tables/ClassicTable";
import TabButtonStyle1 from "../../components/Tabs/TabButtonStyle1";
import BasicLineChart from "../../components/Charts/LineChart";
import Card from "../Components/Card";

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

const CardData = [
  {
    title: "Income This Month",
    amount: "2286.45",
    percentage: "10.2",
  },
  {
    title: "Expense This Month",
    amount: "1243.22",
    percentage: "-17.2",
  },
  {
    title: "Total AR This Month",
    amount: "8902.82",
    percentage: "20.9",
  },
  {
    title: "Total AP This Month",
    amount: "3908.92",
    percentage: "-8.3",
  },
];

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const Home = ({ navigation }: HomeScreenProps) => {
  const dispatch = useDispatch();
  const [lists, setLists] = useState<any>(SwipeData);
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const scrollViewHome = useRef<any>();

  const buttons = ["Pie Chart", "Line Chart", "Bar Chart"];

  const scrollX = useRef(new Animated.Value(0)).current;
  const onCLick = (i: any) =>
    scrollViewHome.current.scrollTo({ x: i * SIZES.width - 60 });

  return (
    <View style={{ backgroundColor: colors.card, flex: 1, paddingBottom: 60 }}>
      <View
        style={[
          GlobalStyleSheet.container,
          { paddingHorizontal: 30, paddingTop: 10 },
        ]}
      >
        <View style={[GlobalStyleSheet.flex]}>
          <View>
            <Text
              style={{
                ...FONTS.fontRegular,
                fontSize: 14,
                color: colors.title,
              }}
            >
              Good Morning
            </Text>
            <Text
              style={{
                ...FONTS.fontSemiBold,
                fontSize: 24,
                color: colors.title,
              }}
            >
              Williams
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
              activeOpacity={0.5}
              style={[GlobalStyleSheet.background3, {}]}
            >
              <Image
                style={[
                  GlobalStyleSheet.image3,
                  { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                ]}
                source={IMAGES.Notification}
              />
              <View
                style={[
                  styles.notifactioncricle,
                  {
                    backgroundColor: colors.card,
                  },
                ]}
              >
                <View
                  style={{
                    height: 13,
                    width: 13,
                    borderRadius: 13,
                    backgroundColor: COLORS.primary,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              //onPress={() => navigation.openDrawer()}
              onPress={() => dispatch(openDrawer())}
              style={[GlobalStyleSheet.background3, {}]}
            >
              <Image
                style={[
                  GlobalStyleSheet.image3,
                  { tintColor: theme.dark ? COLORS.card : "#5F5F5F" },
                ]}
                source={IMAGES.grid6}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View
          style={[
            {
              paddingHorizontal: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            },
          ]}
        >
          {CardData.map((item, index: number) => {
            return (
              <View style={{ marginBottom: 15 }} key={index}>
                <Card
                  title={item.title}
                  amount={item.amount}
                  percentage={item.percentage}
                />
              </View>
            );
          })}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[GlobalStyleSheet.card, { backgroundColor: colors.card }]}>
          <View style={GlobalStyleSheet.cardBody}>
            <View style={{ paddingBottom: 15 }}>
              <TabButtonStyle1
                buttons={buttons}
                onClick={onCLick}
                scrollX={scrollX}
              />
            </View>
            <ScrollView
              ref={scrollViewHome}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              scrollEnabled={false}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            >
              <View style={[styles.tabBody]}>
                <View
                  style={[
                    GlobalStyleSheet.card,
                    { backgroundColor: colors.card },
                  ]}
                >
                  <BasicPieChart />
                </View>
              </View>

              <View style={[styles.tabBody]}>
                <BasicLineChart />
              </View>

              <View style={[styles.tabBody]}>
                <BasicBarChart />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={GlobalStyleSheet.container}>
          <View
            style={[
              GlobalStyleSheet.cardHeader,
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: -30,
              },
            ]}
          >
            <Text
              style={[
                styles.brandsubtitle2,
                { fontSize: 16, color: colors.title },
              ]}
            >
              Recent Transaction
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.brandsubtitle3,
                  { fontSize: 12, color: COLORS.primary, padding: 3 },
                ]}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <GestureHandlerRootView style={{ paddingHorizontal: 15 }}>
            {lists.map((data: any, index: any) => {
              return (
                <View
                  style={{
                    marginBottom: 5,
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
          <View
            style={[
              GlobalStyleSheet.cardHeader,
              {
                borderBottomColor: COLORS.inputborder,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <Text
              style={[
                styles.brandsubtitle2,
                { fontSize: 16, color: colors.title },
              ]}
            >
              Top Expense
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.brandsubtitle3,
                  { fontSize: 12, color: COLORS.primary, padding: 3 },
                ]}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ClassicTable />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBody: {
    width: SIZES.width - 35,
    marginTop: 15,
  },
  notifactioncricle: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 2,
    right: 2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  TextInput: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    height: 60,
    borderRadius: 61,
    paddingHorizontal: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    backgroundColor: "#FAFAFA",
  },
  brandsubtitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 12,
    color: COLORS.card,
  },
  brandsubtitle3: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
  },
  title1: {
    ...FONTS.fontBold,
    fontSize: 28,
    color: COLORS.title,
  },
  title2: {
    ...FONTS.fontRegular,
    fontSize: 12,
    color: COLORS.title,
  },
  title3: {
    ...FONTS.fontSemiBold,
    fontSize: 24,
    color: "#8ABE12",
    //textAlign:'right'
  },
  colorCard: {},
  colorCardTitle: {
    ...FONTS.fontMedium,
    fontSize: 12,
    color: COLORS.title,
    lineHeight: 20,
    textAlign: "center",
  },
  arrivaldata: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    width: 199,
    paddingHorizontal: 10,
    paddingLeft: 25,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    shadowColor: "rgba(4,118,78,.6)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 18.27,
    elevation: 4,
  },
});

export default Home;

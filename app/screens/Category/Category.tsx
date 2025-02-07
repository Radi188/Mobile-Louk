import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { COLORS, FONTS } from "../../constants/theme";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { IMAGES } from "../../constants/Images";
import AccordionHighlight from "../../components/Accordion/AccordionHighlight";
import fetchData from "../../api/fetchdata";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
//import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const SECTIONS = [
  {
    title: "Coins 1$",
    content: {
      Description: "Testing",
    },
  },
  {
    title: "Coins 5$",
    content: {
      Description: "Testing",
    },
  },
  {
    title: "Coins 10$",
    content: {
      Description: "Testing",
    },
  },
  {
    title: "Coins 20$",
    content: {
      Description: "Testing",
    },
  },

  {
    title: "Coins 50$",
    content: {
      Description: "Testing",
    },
  },
  {
    title: "Coins 100$",
    content: {
      Description: "Testing",
    },
  },
  {
    title: "Coins Cut Stock",
    content: {
      Description: "Testing",
    },
  },
];

type CategoryScreenProps = StackScreenProps<RootStackParamList, "Category">;

const Category = ({ navigation }: CategoryScreenProps) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchData("Category/List");
    console.log(res);
    if (res.status === 200) {
      setData(res);
    }
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header
        title="Categories"
        leftIcon="back"
        rightIcon5={"plus"}
        onPress5={() => navigation.navigate("InsertItemStock")}
      />
      {Object.keys(data).length > 0 && (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}>
          {data.content ? (
            <View style={GlobalStyleSheet.cardBody}>
              <AccordionHighlight data={data?.content} />
            </View>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 25,
              }}
            >
              <AntDesign
                name={"filetext1"}
                size={72}
                color={COLORS.secondary}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: COLORS.label,
                  paddingTop: 10,
                }}
              >
                No {data?.header} item{" "}
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sideData: {
    padding: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.card,
  },
  sideTitle: {
    ...FONTS.fontRegular,
    fontSize: 13,
    color: COLORS.title,
    marginTop: 5,
    textAlign: "center",
  },
  maincardData: {
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
    paddingBottom: 15,
  },
  cardData: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  imagecard: {
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
  },
  imageTitle: {
    ...FONTS.fontRegular,
    fontSize: 13,
    color: COLORS.title,
    marginTop: 10,
  },
  imageTitle2: {
    ...FONTS.fontSemiBold,
    fontSize: 16,
    color: COLORS.card,
  },
  image: {
    height: undefined,
    width: "100%",
    borderRadius: 15,
  },
  imageoverlay: {
    height: undefined,
    width: "100%",
    aspectRatio: 1 / 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Category;

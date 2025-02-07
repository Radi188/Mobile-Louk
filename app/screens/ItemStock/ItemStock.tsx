import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import AccordionHighlight from "../../components/Accordion/AccordionHighlight";
import fetchData from "../../api/fetchdata";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const SECTIONS = [
  {
    title: "Coins 1$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
  {
    title: "Coins 5$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
  {
    title: "Coins 10$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,

      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
  {
    title: "Coins 20$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },

  {
    title: "Coins 50$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
  {
    title: "Coins 100$",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
  {
    title: "Coins Cut Stock",
    content: {
      Price: 1,
      Quantity: 100,
      Cost: 0.8,
      "Net income": 0.2,
      Category: "Coins",
      "Stock Count": "19032310",
    },
  },
];

const ItemStock = () => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const navigation = useNavigation<any>();

  const [data, setData] = useState<any>({});
  const [moreaction, setMoreaction] = useState<any>();

  const onPressPlus = useCallback((url: any, header: string) => {
    navigation.navigate("StandardForm", { url, formUrl: header });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchData("/Product/List");
    setData(res);
    setMoreaction(res.more_action);
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      {moreaction && (
        <Header
          title={data.header}
          leftIcon={"back"}
          rightIcon5={moreaction.icon}
          onPress5={() => onPressPlus(moreaction.url, data.header)}
        />
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 50,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {Object.keys(data).length > 0 && (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}
          >
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
      </ScrollView>
    </View>
  );
};

export default ItemStock;

const styles = StyleSheet.create({});

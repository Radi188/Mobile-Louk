import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../layout/Header";
import { useNavigation, useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import AccordionHighlight from "../../components/Accordion/AccordionHighlight";

const SECTIONS = [
  {
    title: "Purchase Coin Stock",
    content: {
      Description: "Testing",
      Date: "02-12-2024",
      "Total Price": 5000,
      "Stock Count": "25000",
      Product: "Coin",
      "Unit of Measure": "Coin",
    },
  },
  {
    title: "Purchase Food Stock Refrige",
    content: {
      Description: "Testing",
      Date: "01-11-2024",
      "Stock Count": 10,
      Product: "Vegetable",
      "Unit of Measure": "Kilogram",
    },
  },
  {
    title: "Purchase Gas Station",
    content: {
      Description: "Testing",
      Date: "12-10-2024",
      "Stock Count": 5000,
      Product: "Gas",
      "Unit of Measure": "Litre",
    },
  },
  {
    title: "Purchase Coffee",
    content: {
      Description: "Testing",
      Date: "10-09-2024",
      "Stock Count": 2500,
      Product: "Coffee",
      "Unit of Measure": "Package",
    },
  },
];

const PurchaseStock = () => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const navigation = useNavigation<any>();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header
        title="Purchase Order"
        leftIcon="back"
        rightIcon5={"plus"}
        onPress5={() => navigation.navigate("InsertItemStock")}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 90 }}>
        <View style={GlobalStyleSheet.cardBody}>
          <AccordionHighlight data={SECTIONS} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PurchaseStock;

const styles = StyleSheet.create({});

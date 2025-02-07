import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
//import { SvgXml } from 'react-native-svg';
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { COLORS, FONTS } from "../../constants/theme";
import Header from "../../layout/Header";
import ListStyle1 from "../../components/List/ListStyle1";
import ListStyle2 from "../../components/List/ListStyle2";

const pic1 = require("../../assets/images/small/pic1.jpg");
const pic2 = require("../../assets/images/small/pic2.jpg");
const pic3 = require("../../assets/images/small/pic3.jpg");
const pic4 = require("../../assets/images/small/pic4.jpg");

const ListScreen = () => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.dark ? colors.background : colors.card,
      }}
    >
      <View
        style={{
          flex: 1,
          //backgroundColor:colors.background,
        }}
      >
        <Header title={"List Styles"} leftIcon={"back"} titleRight />
        <ScrollView>
          <View style={GlobalStyleSheet.container}>
            <View
              style={[
                GlobalStyleSheet.card,
                {
                  backgroundColor: theme.dark ? colors.card : colors.background,
                },
              ]}
            >
              <View
                style={[
                  GlobalStyleSheet.cardHeader,
                  { borderBottomColor: COLORS.inputborder },
                ]}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: colors.title,
                  }}
                >
                  Default list
                </Text>
              </View>
              <View style={GlobalStyleSheet.cardBody}>
                <ListStyle1 arrowRight title={"Who Can Benefit from Crypto?"} />
                <ListStyle1
                  arrowRight
                  title={"10 Ways to Maximize Your Profits."}
                />
                <ListStyle1
                  arrowRight
                  title={"Exploring the Benefits of Crypto"}
                />
                <ListStyle1
                  arrowRight
                  title={"The Impact of Crypto on Business"}
                />
              </View>
            </View>

            <View
              style={[
                GlobalStyleSheet.card,
                {
                  backgroundColor: theme.dark ? colors.card : colors.background,
                },
              ]}
            >
              <View
                style={[
                  GlobalStyleSheet.cardHeader,
                  { borderBottomColor: COLORS.inputborder },
                ]}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: colors.title,
                  }}
                >
                  List with icon
                </Text>
              </View>
              <View style={GlobalStyleSheet.cardBody}>
                <ListStyle1
                  arrowRight
                  icon={
                    <Feather
                      name={"shopping-cart"}
                      size={15}
                      color={COLORS.primary}
                    />
                  }
                  title={"Cart Checkout Sheet"}
                />
                <ListStyle1
                  arrowRight
                  icon={
                    <Feather
                      name={"check-circle"}
                      size={15}
                      color={COLORS.primary}
                    />
                  }
                  title={"Success Sheet"}
                />
                <ListStyle1
                  arrowRight
                  icon={
                    <Feather
                      name={"log-out"}
                      size={15}
                      color={COLORS.primary}
                    />
                  }
                  title={"Login Sheet"}
                />
                <ListStyle1
                  arrowRight
                  icon={
                    <Feather
                      name={"file-text"}
                      size={15}
                      color={COLORS.primary}
                    />
                  }
                  title={"Register Sheet"}
                />
              </View>
            </View>

            <View
              style={[
                GlobalStyleSheet.card,
                {
                  backgroundColor: theme.dark ? colors.card : colors.background,
                },
              ]}
            >
              <View
                style={[
                  GlobalStyleSheet.cardHeader,
                  { borderBottomColor: COLORS.inputborder },
                ]}
              >
                <Text
                  style={{
                    ...FONTS.fontMedium,
                    fontSize: 14,
                    color: colors.title,
                  }}
                >
                  List with image
                </Text>
              </View>
              <View style={GlobalStyleSheet.cardBody}>
                <ListStyle1 arrowRight image={pic1} title={"James"} />
                <ListStyle1 arrowRight image={pic2} title={"Robert"} />
                <ListStyle1 arrowRight image={pic3} title={"John Doe"} />
                <ListStyle1 arrowRight image={pic4} title={"David geta"} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ListScreen;

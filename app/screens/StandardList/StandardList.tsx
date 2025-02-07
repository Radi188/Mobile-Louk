import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Header from "../../layout/Header";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import AccordionHighlight from "../../components/Accordion/AccordionHighlight";
import fetchData from "../../api/fetchdata";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";

const StandardList = (param: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const navigation = useNavigation<any>();

  const [data, setData] = useState<any>({});
  const [moreaction, setMoreaction] = useState<any>();

  const onPressPlus = useCallback((url: any, header: string) => {
    navigation.navigate("StandardForm", { url, formUrl: header });
  }, []);

  const { url, header } = param.route.params;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetchData(url);
    setData(res);
    setMoreaction(res.more_action);
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1 }}>
      <Header
        title={data.header || header}
        leftIcon={"back"}
        rightIcon5={moreaction?.icon}
        onPress5={() => onPressPlus(moreaction.url, data.header)}
      />

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
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 90,
            }}
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
                  paddingTop: 40,
                  width: 430,
                }}
              >
                <AntDesign name={"filetext1"} size={72} color={COLORS.label} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: COLORS.label,
                    paddingTop: 10,
                  }}
                >
                  There No {header}'s Data
                </Text>
              </View>
            )}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default StandardList;

const styles = StyleSheet.create({});

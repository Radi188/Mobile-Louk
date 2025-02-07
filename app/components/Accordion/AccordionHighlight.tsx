import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import FeatherIcon from "react-native-vector-icons/Feather";

import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { GlobalStyleSheet } from "../../constants/StyleSheet";

const AccordionHighlight = ({ data }: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;

  const [activeSections, setActiveSections] = useState([0]);
  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  function isProperCurrencyFormat(input: any) {
    // Regular expression to check if the string is in 'XX.XX' format
    const currencyRegex = /^\d+(\.\d{1,2})$/;

    return currencyRegex.test(input);
  }

  const AccordionHeader = (item: any, _: any, isActive: any) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 15,
          borderRadius: SIZES.radius_sm,
          backgroundColor: isActive ? COLORS.primary : COLORS.primaryLight,
        }}
      >
        <Text
          style={[
            FONTS.fontMedium,
            { color: isActive ? COLORS.card : colors.title, width: "85%" },
          ]}
        >
          {item.title}
        </Text>
        <View
          style={[
            GlobalStyleSheet.flex,
            {
              backgroundColor: COLORS.primaryLight,
              borderRadius: 24,
              gap: 10,
            },
            isActive && {
              backgroundColor: COLORS.primary,
            },
          ]}
        >
          <TouchableOpacity>
            <FeatherIcon
              size={20}
              color={
                isActive
                  ? COLORS.primaryLight
                  : theme.dark
                  ? "rgba(255,255,255,0.5)"
                  : COLORS.primary
              }
              name={"edit-2"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon
              size={20}
              color={
                isActive
                  ? COLORS.warning
                  : theme.dark
                  ? "rgba(255,255,255,0.5)"
                  : COLORS.danger
              }
              name={"trash-2"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const AccordionBody = (item: any, _: any, isActive: any) => {
    return (
      <View
        style={{
          width: "100%",
          marginBottom: 15,
          marginTop: 10,
          paddingHorizontal: 15,
          gap: 5,
        }}
      >
        {Object.keys(item.content).map((label, index) => {
          if (label !== "_id" && label !== "__v" && label !== "categoryID") {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={[
                    FONTS.fontSm,
                    FONTS.fontSemiBold,
                    { width: "100%", color: colors.text, lineHeight: 20 },
                  ]}
                >
                  {label
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  :{"  "}
                  <Text
                    style={[
                      FONTS.fontSm,
                      { width: "100%", color: colors.text, lineHeight: 20 },
                    ]}
                  >
                    {item.content[label] == true
                      ? "Enabled"
                      : item.content[label] == false
                      ? "Disbaled"
                      : item.content[label]}
                    {isProperCurrencyFormat(item.content[label]) && "$"}
                  </Text>
                </Text>
              </View>
            );
          }
        })}
      </View>
    );
  };

  return (
    <>
      <Accordion
        sections={data}
        sectionContainerStyle={{ marginBottom: 10 }}
        duration={300}
        activeSections={activeSections}
        onChange={setSections}
        touchableComponent={TouchableOpacity}
        renderHeader={AccordionHeader}
        renderContent={AccordionBody}
      />
    </>
  );
};

export default AccordionHighlight;

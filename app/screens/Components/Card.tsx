import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

const Card = ({
  title,
  amount,
  percentage,
}: {
  title: any;
  amount: any;
  percentage: any;
}) => {
  return (
    <View
      style={{
        width: SIZES.width / 2.25,
        backgroundColor: COLORS.background,
        height: 100,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: 1,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View>
          <Text
            style={{ color: COLORS.label, fontSize: 12, fontWeight: "600" }}
          >
            {title}
          </Text>
        </View>
        <Text
          style={[styles.brandsubtitle2, { fontSize: 14, color: COLORS.title }]}
        >
          $ {amount}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 5,
          }}
        >
          <Text
            style={{
              color: percentage > 0 ? COLORS.success : COLORS.danger,
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            %{percentage > 0 ? `+${percentage}` : percentage}
          </Text>
          <Text style={{ color: COLORS.label }}>
            {percentage > 0 ? "Increase" : "Decrease"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

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

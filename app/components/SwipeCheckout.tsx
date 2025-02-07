import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { COLORS, FONTS } from "../constants/theme";
import { IMAGES } from "../constants/Images";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCheckoutItem,
} from "../redux/reducer/checkoutReducer";
import store from "../redux/store";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class SwipeCheckout extends Component {
  rightSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [45, 90],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        onPress={() => {
          this.close();
          store.dispatch(removeFromCheckoutItem(this.props.data));
        }}
        activeOpacity={0.6}
      >
        <View style={[styles.deleteBox, { backgroundColor: COLORS.primary }]}>
          <Animated.View>
            <Image
              style={{
                height: 24,
                width: 24,
                resizeMode: "contain",
                tintColor: COLORS.card,
              }}
              source={IMAGES.delete}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  updateRef = (ref) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };

  render() {
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        renderRightActions={this.rightSwipe}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: this.props.colors.card,
            borderRadius: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{ height: 60, width: 60, borderRadius: 10 }}
              source={this.props.data.image}
            />
            <View>
              <Text
                style={{
                  ...FONTS.fontSemiBold,
                  fontSize: 14,
                  color: this.props.colors.title,
                }}
              >
                {this.props.data.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    store.dispatch(decrementQuantity(this.props.data))
                  }
                  activeOpacity={0.8}
                  style={{
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    backgroundColor: COLORS.primary,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.fontRegular,
                      fontSize: 14,
                      fontWeight: "600",
                      color: COLORS.white,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.fontRegular,
                    fontSize: 18,
                    color: this.props.colors.title,
                  }}
                >
                  {this.props.data.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    store.dispatch(incrementQuantity(this.props.data))
                  }
                  activeOpacity={0.8}
                  style={{
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    backgroundColor: COLORS.primary,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.fontRegular,
                      fontSize: 14,
                      fontWeight: "600",
                      color: COLORS.white,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: COLORS.success,
              alignSelf: "flex-end",
            }}
          >
            ${this.props.data.price}
          </Text>
        </View>
      </Swipeable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    padding: 20,
  },
  deleteBox: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 65,
    right: 0,
    borderRadius: 15,
    marginLeft: 10,
  },
});

import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, SIZES, FONTS } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { updateFormValue } from "../../redux/reducer/formValueReducer";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  type?: string;
  numberOfLines?: any;
  icon?: any;
  inputSm?: any;
  inputLg?: any;
  inputRounded?: any;
  style?: any;
  multiline?: boolean;
  backround?: any;
  keyboardType?: any;
  inputBorder?: any;
  text?: any;
  isFocused?: any;
  inputicon?: any;
  isError?: any;
  title: any;
  inputType?: any;
  onEndEdit?: any;
  require?: any;
  formUrl?: any;
  item?: any;
};

const Input = ({
  placeholder,
  value,
  defaultValue,
  onChangeText,
  // onBlur,
  type,
  numberOfLines,
  multiline,
  icon,
  inputSm,
  inputLg,
  inputRounded,
  style,
  backround,
  inputBorder,
  text,
  keyboardType,
  // isFocused,
  inputicon,
  isError,
  title,
  inputType,
  onEndEdit,
  require,
  formUrl,
  item,
}: Props) => {
  const [showPass, setShowPass] = useState<boolean>(true);
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const dispatch = useDispatch();

  const _onChangeText = (value: any) => {
    dispatch(updateFormValue({ key: item.key, value, formUrl }));
  };

  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      {icon && (
        <View
          style={[
            {
              position: "absolute",
              height: "100%",
              width: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRightWidth: 1,
              borderRightColor: COLORS.inputborder,
              zIndex: 25,
            },
            inputBorder && {
              borderRightWidth: 0,
              width: 25,
            },
            inputicon && {
              borderRightWidth: 0,
              width: 48,
              paddingLeft: 20,
              zIndex: 25,
            },
          ]}
        >
          {icon}
        </View>
      )}
      <Text style={styles.title}>
        {title}
        {require && (
          <Text
            style={{
              color: COLORS.danger,
              fontSize: 18,
            }}
          >
            {" "}
            *
          </Text>
        )}
      </Text>
      <TextInput
        onEndEditing={onEndEdit}
        style={[
          styles.input,
          {
            backgroundColor: backround ? colors.card : colors.input,
            //borderColor:colors.,
            color: colors.title,
            fontSize: backround ? 16 : 16,
          },
          numberOfLines && {
            height: "auto",
            paddingVertical: 14,
            textAlignVertical: "top",
          },
          icon && {
            paddingLeft: 60,
          },
          inputRounded && {
            borderRadius: 45,
          },
          inputSm && {
            height: 40,
          },
          inputLg && {
            height: 60,
          },
          inputBorder && {
            borderWidth: 0,
            borderBottomWidth: 2,
            borderRadius: 0,
            backgroundColor: theme.dark ? null : colors.card,
          },
          style && {
            ...style,
          },
          isError && {
            borderColor: COLORS.danger,
          },
          isFocused && {
            borderColor: COLORS.primary,
          },
        ]}
        multiline={multiline ? multiline : false}
        secureTextEntry={type === "password" ? showPass : false}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={inputBorder ? onChangeText : _onChangeText}
        onFocus={onFocus}
        keyboardType={inputType}
        onBlur={onBlur}
        numberOfLines={numberOfLines}
        placeholderTextColor={
          inputBorder
            ? COLORS.text
            : theme.dark
            ? "rgba(255,255,255,.5)"
            : "#666666"
        }
      />
      {text && (
        <View style={{ position: "absolute", top: 12, left: 35 }}>
          <Text
            style={[FONTS.fontRegular, { fontSize: 16, color: colors.title }]}
          >
            {text}
          </Text>
        </View>
      )}
      {type === "password" && (
        <TouchableOpacity
          style={[styles.passBtn, { height: backround ? 55 : 55 }]}
          onPress={() => setShowPass(!showPass)}
        >
          {/* <FeatherIcon size={18} color={colors.title} name={showPass ? 'eye-off' : 'eye'} /> */}
          <FeatherIcon
            color={COLORS.primary}
            size={18}
            name={showPass ? "eye-off" : "eye"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    ...FONTS.fontRegular,
    fontSize: 16,
    height: 55,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.inputborder,
    color: COLORS.title,
  },
  passBtn: {
    position: "absolute",
    right: 5,
    top: 0,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
  title: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Input;

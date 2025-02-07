import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateFormValue } from "../../redux/reducer/formValueReducer";

const SelectField = ({ title, placeholder, item, formUrl, require }: any) => {
  let options = [{ key: "None", label: "--None--" }, ...item.field.choices];
  const value = useSelector(
    (state: any) => state.formValue.form_value[formUrl][item.key]
  );
  const [modalVisible, setModalVisible] = useState<any>(false);
  const [selectedValue, setSelectedValue] = useState(value || options[0].label);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const onEndEdit = (value: any) => {
    dispatch(updateFormValue({ key: item.key, value, formUrl }));
  };

  const selectedItem = options.find((el) => el.key === selectedValue);
  const label = selectedItem ? selectedItem.label : options[0].label;

  const _renderItem = ({ item, index }: any) => {
    let item_label = "";
    if (item.label !== undefined) {
      item_label = item.label.replace(/\s*$/, "");
    }

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (typeof onEndEdit === "function") {
            onEndEdit(item.key);
          }
          if (!item.text) {
            setModalVisible(false);
          }
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.itemStyle}>
            {item_label == "true"
              ? "Enabled"
              : item_label == "false"
              ? "Disbaled"
              : item_label}
          </Text>
          {item.label === label && (
            <MaterialCommunityIcons
              name={"check"}
              style={{ fontSize: 18 }}
              color={COLORS.primary}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
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
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.input}>
          <Text style={{ fontSize: 16, color: COLORS.title }}>
            {label == "false"
              ? "Disabled"
              : label == "true"
              ? "Enabled"
              : label}
          </Text>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={COLORS.label}
          />
        </View>
      </TouchableOpacity>
      {modalVisible ? (
        <View style={styles.modal(options)}>
          <FlatList
            data={options}
            keyboardShouldPersistTaps={"handled"}
            renderItem={_renderItem}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : null}
    </View>
  );
};

export default SelectField;

const styles = StyleSheet.create<any>({
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
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    marginBottom: 10,
  },
  itemStyle: {
    fontSize: 16,
    flex: 1,
    marginVertical: 16,
  },
  modal: (options: any) => ({
    height: options.length < 5 ? options.length * 50 : 250,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    justifyContent: "center",
    paddingHorizontal: 12,
    shadowOpacity: 0.2,
    shadowOffset: 1,
    shadowRadius: 1,
  }),
});

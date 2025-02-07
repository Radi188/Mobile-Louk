import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Input from "../../components/Input/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import fetchData from "../../api/fetchdata";
import { useDispatch, useSelector } from "react-redux";
import { updateBatchFormValue } from "../../redux/reducer/formValueReducer";

let prev_form_url = "";
let is_first = true;

const InsertItemStock = (param: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [data, setData] = useState([]);
  const { url, formUrl }: string = param.route.params;
  const [form_value, setFormValue] = useState<any>({});
  const props_form_value = useSelector(
    (state: any) => state.formValue.form_value
  );

  console.log(props_form_value);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  console.log(formUrl);

  const getData = async () => {
    const res = await fetchData(url);
    if (res.data.statusCode === 200) {
      res.data.field?.forEach((field: any) => {
        const key = field?.key;
        form_value[key] = field?.value;
      });
      if (prev_form_url !== formUrl || is_first) {
        is_first = false;
        prev_form_url = formUrl;
        dispatch(updateBatchFormValue({ form_value, formUrl }));
      }
    }
  };

  return (
    <View style={{ backgroundColor: colors.card, flex: 1, marginBottom: 0 }}>
      <Header title="Insert Item" leftIcon={"back"} rightIcon5={"plus"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ padding: 15 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Product Title</Text>
            <Input
              placeholder="Enter Title..."
              backround
              onChangeText={(value) => console.log(value)}
              style={{ width: SIZES.width - 40 }}
            />
          </View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.title}>Product Price</Text>
              <Input
                placeholder="Enter Price..."
                backround
                onChangeText={(value) => console.log(value)}
                style={{ width: SIZES.width / 2 - 30 }}
              />
            </View>
            <View>
              <Text style={styles.title}>Product Cost</Text>
              <Input
                placeholder="Enter Cost..."
                backround
                onChangeText={(value) => console.log(value)}
                style={{ width: SIZES.width / 2 - 30 }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Product Quantity</Text>
            <Input
              placeholder="Enter Quantity..."
              backround
              onChangeText={(value) => console.log(value)}
              style={{ width: SIZES.width - 40 }}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>Product Stock</Text>
            <Input
              placeholder="Enter Stock..."
              backround
              onChangeText={(value) => console.log(value)}
              style={{ width: SIZES.width - 40 }}
            />
          </View>
          <Text style={styles.title}>Attachment</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: SIZES.width / 2 - 75,
              height: 75,
              borderWidth: 1,
              borderColor: COLORS.inputborder,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: COLORS.primaryLight,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}
            >
              <FontAwesome5
                name="file-image"
                color={COLORS.primary}
                size={25}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 0 }}>
        <Button
          title="Submit"
          onPress={() => console.log("Submit Button")}
          style={{ borderBottomEndRadius: 30 }}
          color={COLORS.primary}
          size={"lg"}
        />
      </View>
    </View>
  );
};

export default InsertItemStock;

const styles = StyleSheet.create({
  title: {
    ...FONTS.fontRegular,
    fontSize: 16,
    color: COLORS.title,
    marginBottom: 10,
  },
});

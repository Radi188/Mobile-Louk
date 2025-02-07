import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import { useNavigation, useTheme } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import Input from "../../components/Input/Input";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import fetchData from "../../api/fetchdata";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFormValue,
  updateBatchFormValue,
} from "../../redux/reducer/formValueReducer";
import StandardField from "../../components/StandardField/StandardField";

let prev_form_url = "";
let is_first = true;

const StandardForm = (param: any) => {
  const theme = useTheme();
  const { colors }: { colors: any } = theme;
  const [field, setField] = useState([]);
  const { url, formUrl }: any = param.route.params;
  const [form_value, setFormValue] = useState<any>({});
  const props_form_value = useSelector(
    (state: any) => state.formValue.form_value
  );

  const navigation = useNavigation();

  const onPostData = async () => {
    const response = await fetchData(formUrl, props_form_value[formUrl]);
    console.log(response);
    if (response.status === 200) {
      navigation.goBack();
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetFormValue({ formUrl }));
    };
  }, []);

  const getData = async () => {
    const res = await fetchData(url);
    if (res.data.statusCode === 200) {
      setField(res.data.field);
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
      <Header title={formUrl} leftIcon={"back"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ padding: 15 }}>
          {field &&
            props_form_value[formUrl] &&
            field.map((item: any, index: any) => {
              return <StandardField field={item} formUrl={formUrl} />;
            })}
        </View>
      </ScrollView>
      <View style={{ marginBottom: 0 }}>
        <Button
          title="Submit"
          onPress={onPostData}
          style={{ borderBottomEndRadius: 30 }}
          color={COLORS.primary}
          size={"lg"}
        />
      </View>
    </View>
  );
};

export default StandardForm;

const styles = StyleSheet.create({});

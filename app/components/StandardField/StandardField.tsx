import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../Input/Input";
import { SIZES } from "../../constants/theme";
import SelectField from "../SelectField/SelectField";
import { updateFormValue } from "../../redux/reducer/formValueReducer";
import { useDispatch, useSelector } from "react-redux";

const StandardField = ({ field, formUrl }: any) => {
  const { value, name, choices, key, type, require } = field;
  const item = { key, field };
  const props_form_value = useSelector(
    (state: any) => state.formValue.form_value[formUrl]
  );

  const dispatch = useDispatch();

  function formatToCurrency(input: any) {
    // Convert the number to a fixed 2 decimal format
    const number = parseFloat(input);
    if (isNaN(number)) {
      return "0.00";
    }
    return number.toFixed(2);
  }

  switch (true) {
    case type === "TextField":
      return (
        <View style={{ paddingBottom: 10 }}>
          <Input
            title={name}
            placeholder={`-- Enter ${name} --`}
            backround
            style={{ width: SIZES.width - 40 }}
            inputType="default"
            require={require}
            formUrl={formUrl}
            item={item}
            value={props_form_value[item.key]}
          />
        </View>
      );
    case type === "NumberField":
      return (
        <View style={{ paddingBottom: 10 }}>
          <Input
            title={name}
            placeholder={`-- Enter ${name} --`}
            backround
            style={{ width: SIZES.width - 40 }}
            inputType="numeric"
            require={require}
            formUrl={formUrl}
            item={item}
            value={props_form_value[item.key]}
          />
        </View>
      );

    case type === "CurrencyField":
      return (
        <View style={{ paddingBottom: 10 }}>
          <Input
            title={name}
            placeholder={`-- Enter ${name} --`}
            backround
            onEndEdit={(e: any) =>
              dispatch(
                updateFormValue({
                  key: item.key,
                  value: formatToCurrency(e.nativeEvent.text),
                  formUrl,
                })
              )
            }
            style={{ width: SIZES.width - 40 }}
            inputType="numeric"
            require={require}
            formUrl={formUrl}
            item={item}
            value={props_form_value[item.key]}
          />
        </View>
      );
    case type === "SelectField":
      return (
        <View style={{ paddingBottom: 10 }}>
          <SelectField
            title={name}
            item={item}
            formUrl={formUrl}
            placeholder={`-- Enter ${name} --`}
            require={require}
          />
        </View>
      );
    default:
      break;
  }
};

export default StandardField;

const styles = StyleSheet.create({});

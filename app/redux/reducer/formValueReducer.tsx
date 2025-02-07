import { createSlice } from "@reduxjs/toolkit";

export const formValueSlice = createSlice({
  name: "formvalue",
  initialState: {
    data: {},
    form_value: {},
    message: {},
    tab_error: {},
    prev_title: "Home",
    title: "",
    url: "/",
    fields: {},
  },
  reducers: {
    updateFormValue: (state: any, action: any) => {
      const { key, value, formUrl }: any = action.payload;
      state.form_value[formUrl][key] = value;
    },
    updateBatchFormValue: (state: any, action: any) => {
      const { form_value, formUrl } = action.payload;
      state.form_value[formUrl] = {
        ...state.form_value[formUrl],
        ...form_value,
      };
    },
    resetFormValue: (state: any, action: any) => {
      const { formUrl } = action.payload;
      state.form_value[formUrl] = {};
      state.tab_error[formUrl] = {};
      state.message = {};
    },
  },
});

export const { updateFormValue, updateBatchFormValue, resetFormValue } =
  formValueSlice.actions;

export default formValueSlice.reducer;

/* eslint-disable dot-notation */
// Import Library
import axios from "axios";
// import NetInfo from '@react-native-community/netinfo';
// import crashlytics from '@react-native-firebase/crashlytics';
// import _ from 'lodash';

// Import redux store
// import {
//   TOKEN_EXPIRE,
//   STORE_CACHE_DATA,
//   UPDATE_FORM,
//   UPDATE_FORM_VALUE,
//   LOADING,
//   VISIBLE_MODAL_QUICK_RE_LOGIN,
// } from '../actions/actions';
// import {resetStoredToken, getStoredUsername} from '../util/Authentication';
// import {bootstrapAsync, cacheData, formValue, clearAppData} from '../actions';

// Import Cofiguration
// import {BASE_URL} from '../configuration/URL';
// import {BASE_URL, HOME_URL, VALIDATE_DEVICE} from '../src/configuration/URL';
// Import Utility
// import Alert from '../util/Alert';
// import {resetStoredToken, setStoredToken} from '../util/Authentication';
// import {setToken, setVisibleQuickReLogin} from '../redux/slice/appDataSlice';
// import {ModalType} from '../modal';
// import {setModal} from '../redux/slice/modalSlice';
// import GetDeviceInfo from '../src/utility/GetDeviceInfo';

// Request configuration
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.timeout = 30000;
const MESSAGE_DURATION = 15000;

/**
 * Function fetch data from the server both post & get method.
 *
 * @param {string} url - The URL to be fetched data.
 * @param {boolean} [formdata=false] - The formdata to be posted to the server.
 * @param {boolean} [is_offline_record=false] - If fetching in offline_mode.
 * @param {boolean} [is_show_alert=true] - Show dropdown alert after fetched data or not.
 * @param {boolean} [ignore_cache=false] - Fetch data from the server instead of loading from cache.
 */
function fetchData(
  url,
  formdata = false,
  isAttachment = false,
  is_show_alert = true,
  ignore_cache = false,
  fileName = ""
) {
  axios.defaults.baseURL = "http://localhost:3000";
  return new Promise(async (resolve, reject) => {
    let message = "";
    let response = {};
    let status = 500;
    let data = null;
    try {
      if (formdata) {
        let config = {};
        axios.defaults.headers.common["Content-Type"] = formdata?._parts
          ? "multipart/form-data"
          : "application/json";
        response = await axios.post(url, formdata, config);
      } else {
        response = await axios.get(url);
      }
      const newToken = response?.data?.token || null;
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = newToken;
      }
      resolve(response.data);
    } catch (error) {
      response = error.response;
      let issue_type = "Fetch Data: Error";
      let issue_log = JSON.stringify(error);
      if (error.response) {
        data = error.response.data;
        issue_type = "Fetch Data: Error Response";
        issue_log = JSON.stringify(response);

        status = error.response.status;
        if (data.message) {
          const message_key = Object.keys(data.message)[0];
          message = `${
            message_key === "message" ? "" : "[" + message_key + "]"
          }${data.message[message_key][0] || ""}`;
        }

        resolve(error.response.data);
      } else if (error.request) {
        console.log(error);
        resolve(error.request);
        // await resetStoredToken();
        // store.dispatch(setToken(false));
        data = {};
      } else {
        // Something happened in setting up the request that triggered an Error
        message = error.message;
        data = {};
      }
      // Send Logs to Google Crashlytics

      // await store.dispatch(bootstrapAsync());
      // resolve(response.data);
    }
    // reject({url, message, status});
  });
}

// function isAllowCaching(url, type_url) {
//   const fixed_url = ['/', '/View/Application'];
//   const is_fixed_url = fixed_url.includes(url);
//   const is_main_form = type_url === 'MainForm';
//   const is_form = type_url === 'Form' && url.includes('/New');
//   if (is_fixed_url || is_main_form || is_form) {
//     return true;
//   }
//   return false;
// }

export default fetchData;

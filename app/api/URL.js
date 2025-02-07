// import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let URL = APP_URL;
export let URLS = [
  { description: process.env.RELEASE_TYPE, url: URL, status: true },
];

export function pushAsyncStorageUrl(description, url, status) {
  URLS.push([{ description, url, status }]);
  AsyncStorage.setItem("URLS", JSON.stringify(URLS));
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveStorageData = async (token: string, data: string) => {
  try {
    await AsyncStorage.setItem(token, data);
  } catch (error) {
    console.error("Error saving data", error);
  }
};

export const getStorageData = async (token: string) => {
  try {
    return await AsyncStorage.getItem(token);
  } catch (error) {
    console.error("Error retrieving data", error);
  }
};

export const removeStorageData = async (token: string) => {
  try {
    await AsyncStorage.removeItem(token);
  } catch (error) {
    console.error("Error clearing storage", error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing storage", error);
  }
};

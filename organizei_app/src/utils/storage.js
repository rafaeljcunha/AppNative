import AsyncStorage from '@react-native-community/async-storage';

export async function storageSetItem(key, data) {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
}

export async function storageGetItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export async function storageRemoveItem(key) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
}

export async function storageClear() {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
}

export async function storageGetAll() {
  try {
    let storageKeys = [];
    storageKeys = await AsyncStorage.getAllKeys();
    return storageKeys;
  } catch (error) {
    return null;
  }
}

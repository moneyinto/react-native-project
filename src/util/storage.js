import AsyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const setStorage = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, typeof data == 'string' ? data : JSON.stringify(data));
    } catch (error) {
      console.error('setStorage error:', data, error)
    }
};

const getStorage = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error('getStorage error:', error)
    }
}

export { setStorage, getStorage };
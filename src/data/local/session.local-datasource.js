import { AsyncStorage } from 'react-native';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
const USER_NAME_KEY = 'USER_NAME_KEY';

export const SessionLocalDataSource = {
  async saveToken(token) {
    await safeSave(AUTH_TOKEN_KEY, token);
  },

  async fetchToken() {
    return safeGet(AUTH_TOKEN_KEY);
  },

  async saveUserName(name) {
    await safeSave(USER_NAME_KEY, name);
  },

  async fetchUserName() {
    return safeGet(USER_NAME_KEY);
  }
}

async function safeSave(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
}

async function safeGet(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
  }
}

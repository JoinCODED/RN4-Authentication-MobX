import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      this.user = jwt_decode(token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      await AsyncStorage.setItem("token", token);
    } else {
      this.user = null;
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("token");
    }
  };

  signup = async newUser => {
    try {
      const res = await instance.post("/signup/", newUser);
      const user = res.data;
      await this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  login = async newUser => {
    try {
      const res = await instance.post("/login/", newUser);
      const user = res.data;
      await this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logout = async () => {
    await this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;

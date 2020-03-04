import React, { Component } from "react";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "../styles";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    console.log("SIGN IN ", this.state);
  };

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.handlePress}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("SignupScreen")}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}

Login.navigationOptions = {
  title: "Login"
};

export default observer(Login);

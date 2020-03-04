import React, { Component } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "../styles";

class Signup extends Component {
  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
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
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => this.props.navigation.navigate("ListScreen")}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          Click here to login!
        </Text>
      </View>
    );
  }
}

Signup.navigationOptions = {
  title: "Signup"
};

export default Signup;

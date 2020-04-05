import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";

// Styles
import styles from "../styles";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://previews.123rf.com/images/sonyakamoz/sonyakamoz1708/sonyakamoz170800092/84638000-flatlay-of-pastel-pink-strawberry-and-coconut-ice-cream-scoops-sweet-waffle-cones-on-white-plate-ove.jpg"
      }}
      style={styles.container}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.topStyling}>
          <Text style={styles.homeTitle}>THE ICECREAM GALLERY</Text>
          <Button
            transparent
            light
            style={styles.buttonStyling}
            onPress={() => navigation.navigate("ListScreen")}
          >
            <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

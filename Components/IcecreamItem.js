import React from "react";
import { withNavigation } from "react-navigation";
import { ListItem, Text } from "native-base";

// Styles
import styles from "../styles";

const IcecreamItem = ({ flavor, navigation }) => {
  return (
    <ListItem
      onPress={() =>
        navigation.navigate("DetailScreen", {
          flavorID: flavor.id,
          flavorName: flavor.flavorName
        })
      }
    >
      <Text style={styles.flavorList}>{flavor.flavorName}</Text>
    </ListItem>
  );
};

export default withNavigation(IcecreamItem);

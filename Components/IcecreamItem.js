import React from "react";
import { ListItem, Text } from "native-base";

// Styles
import styles from "../styles";

const IcecreamItem = ({ flavor }) => {
  return (
    <ListItem onPress={() => alert("IceCream Details")}>
      <Text style={styles.flavorList}>{flavor.flavorName}</Text>
    </ListItem>
  );
};

export default IcecreamItem;

import React from "react";
import { Container, Content, List, ListItem, Text, View } from "native-base";

// Data
import data from "../data";

// Styles
import styles from "../styles";

const ListScreen = () => {
  let icecreamFlavors = data.map(flavor => (
    <ListItem key={flavor.id} onPress={() => alert("IceCream Details")}>
      <Text style={styles.flavorList}>{flavor.flavorName}</Text>
    </ListItem>
  ));

  return (
    <Container>
      <Content>
        <View>
          <List>{icecreamFlavors}</List>
        </View>
      </Content>
    </Container>
  );
};

export default ListScreen;

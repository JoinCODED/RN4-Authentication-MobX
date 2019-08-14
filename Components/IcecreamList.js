import React from "react";
import { Container, Content, List, View } from "native-base";

// Data
import data from "../data";

// Components
import IcecreamItem from "./IcecreamItem";

const IcecreamList = () => {
  let icecreamFlavors = data.map(flavor => (
    <IcecreamItem key={flavor.id} flavor={flavor} />
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

export default IcecreamList;

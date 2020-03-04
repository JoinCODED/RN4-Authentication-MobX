import React from "react";
import { Button, Image, View, Text } from "react-native";
import { Body, Card, CardItem, Content, Container } from "native-base";

// Styles
import styles from "../styles";

// Data
import flavors from "../data";

const IcecreamDetail = ({ navigation }) => {
  const flavorID = navigation.getParam("flavorID");
  const flavor = flavors.find(_flavor => _flavor.id === flavorID);
  return (
    <Container>
      <Content>
        <View>
          <Card>
            <CardItem>
              <Body>
                <Image
                  style={styles.icecreamImage}
                  source={{ uri: flavor.image_url }}
                />
              </Body>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>
  );
};

IcecreamDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("flavorName")
});

export default IcecreamDetail;

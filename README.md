https://docs.google.com/presentation/d/13R--TesKM2gdmbTHNXRoIfTLVCnzL2CGjya6D2WPxT4/edit#slide=id.p

1.  Setup: install react-navigation

    yarn add react-navigation

2.  Create a folder called `Navigation`. Inside it create a file called `RootStack.js`. Inside it:

```javascript
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Detail: DetailScreen
});

export default RootStack;
```

3.  Initial Route Name:

```javascript
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default RootStack;
```

4. Create a file called "index.js" for our App Container:

```javascript
import {createAppContainer} from "react-navigation";
import RootStack from "./RootStack";
...

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

```

5.  Go to List Screen:

```javascript
<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => props.navigation.navigate("List")}
>
```

6.  Go to Detail Screen (without parameters first):

```javascript
<ListItem onPress={() => props.navigation.navigate("Detail")}>
  <Text style={styles.flavorList}>{flavorScoop.flavorName}</Text>
</ListItem>
```

7.  Add parameters for Detail Navigation:

(List.js)

```javascript
<ListItem
  onPress={() =>
    props.navigation.navigate("Detail", { flavor: flavorScoop })
  }
>
```

(Detail.js)

```javascript
render() {
  let flavor = props.navigation.getParam("flavor", {
    flavorName: "Chocolate",
    image_url: "http://www.theold27icecreamshop.com/images/icecream.png"
  });
  ...

  <Image
    source={{
      uri: flavor.image_url
    }}/>

    ...
  <Text>FLAVOR: {flavor.flavorName}</Text>
```

8.  Back Button

```javascript
<Button
  title="BACK"
  color="#6C788E"
  onPress={() => props.navigation.goBack()}
/>
```

9.  navigate vs push

```javascript
<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => props.navigation.navigate("Home")}
/>

<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => props.navigation.push("Home")}
/>
```

10. Home & List Header Titles

```javascript
class HomeScreen extends Component {
static navigationOptions = {
  title: "Home"
}
  ...
```

11. Detail Header Title

```javascript
static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("flavor").flavorName
  };
};
```

12. Header Styling

```javascript
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#90d4ed"
    },
    headerTextStyle: {
      fontWeight: "bold"
    }
  }
}
```

13. Customized Header Style for Home Page

```javascript
class HomeScreen extends Component {
static navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: "#ffd1dc"
  }
}
```

14. Remove Header from Home Page

```javascript
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
```

15. Add a button on the right side of the header

```javascript
static navigationOptions = {
  title: "LIST",
  headerRight: (
    <Button title="Press Me" color="white" onPress={() => alert("HELLO!")} />
  )
};
```

16. Change title when pressing on the button:

```javascript
static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name")
  }
}

<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => this.props.navigation.setParams({ name: "Lailz" })}
>
  <Text style={styles.buttonTextStyling}>Set title name to 'Lailz'</Text>
</Button>
```

17. Add a counter to the header:

```javascript
headerRight: <Button
  transparent
  light
  onPress={navigation.getParam("increaseCount")}
>
  <Text style={styles.buttonTextStyling}>ICECREAM!!</Text>
</Button>;

-------------

state = {
    count: 0
  };

componentDidMount() {
  this.props.navigation.setParams({ increaseCount: this._increaseCount });
}

_increaseCount = () => {
  this.setState({ count: this.state.count + 1 });
};

----------------

<Text style={styles.buttonTextStyling}>{this.state.count}</Text>
```

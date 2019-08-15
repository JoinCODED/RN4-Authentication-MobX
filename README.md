https://docs.google.com/presentation/d/13R--TesKM2gdmbTHNXRoIfTLVCnzL2CGjya6D2WPxT4/edit#slide=id.p

1.  Setup: install react-navigation

    yarn add react-navigation

2.  Create a folder called `Navigation`. Inside it create a file called `StackNav.js`. Inside it:

```javascript
import { createStackNavigator } from "react-navigation";

import Home from "../Components/Home";
import IcecreamList from "../Components/IcecreamList";
import IcecreamDetail from "../Components/IcecreamDetail";

const StackNav = createStackNavigator({
  HomeScreen: Home,
  ListScreen: IcecreamList,
  DetailScreen: IcecreamDetail
});

export default StackNav;
```

3.  Initial Route Name:

```javascript
const StackNav = createStackNavigator(
  {
    HomeScreen: Home,
    ListScreen: IcecreamList,
    DetailScreen: IcecreamDetail
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default StackNav;
```

4. Create a file called "index.js" for our App Container:

```javascript
import {createAppContainer} from "react-navigation";
import StackNav from "./StackNav";
...

const AppContainer = createAppContainer(StackNav);
export default AppContainer;

```

5. Go to `App.js` and render the `AppContainer`:

```jsx
import AppContainer from "./Navigation";

export default function App() {
  return <AppContainer />;
}
```

6.  Go to List Screen:

```jsx
<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => props.navigation.navigate("ListScreen")}
>
```

7.  Go to `IcecreamItem.js` (without parameters first):

```jsx
<ListItem onPress={() => props.navigation.navigate("DetailScreen")}>
  <Text style={styles.flavorList}>{flavorScoop.name}</Text>
</ListItem>
```

8. Explain why navigation won't work in `IcecreamItem.js`. Pass `navigation` as props.

```jsx
const icecreamFlavors = flavors.map(flavor => (
  <IcecreamItem key={flavor.id} flavor={flavor} navigation={navigation} />
));
```

9.  Add parameters for Detail Navigation:

(IcecreamItem.js)

```jsx
<ListItem
  onPress={() =>
    props.navigation.navigate("DetailScreen", {
          flavorID: flavor.id
        })
  }
>
```

(IcecreamDetail.js)

```jsx
 {
   const flavorID = props.navigation.getParam("flavorID");
   const flavor = flavors.find(flavor => flavor.id === flavorID);

  ...

  <Image
    source={{
      uri: flavor.image_url
    }}/>

    ...
  <Text>FLAVOR: {flavor.name}</Text>
```

10. Back Button

```jsx
<Button
  title="BACK"
  color="#6C788E"
  onPress={() => props.navigation.goBack()}
/>
```

11. navigate vs push

```jsx
<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => props.navigation.navigate("HomeScreen")}
/>

<Button
  title="TAKE ME AWAY"
  color="#6C788E"
  onPress={() => props.navigation.push("HomeScreen")}
/>
```

12. Home & List Header Titles

```jsx
Home.navigationOptions = {
  title: "Home"
}
  ...

IcecreamList.navigationOptions = {
  title: "Flavors",
};
```

13. Detail Header Title

```jsx
IcecreamDetail.navigationOptions = ({ navigation }) => {
  const flavorID = navigation.getParam("flavorID");
  return {
    title: flavors.find(flavor => flavor.id === flavorID).name
  };
};
```

14. Header Styling

```javascript
{
  initialRouteName: "HomeScreen",
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#90d4ed"
    },
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
}
```

15. Customized Header Style for Home Page

```javascript
Home.navigationOptions = {
  title: "Home Screen",
  headerStyle: {
    backgroundColor: "#ffd1dc"
  }
};
```

16. Remove Header from Home Page

```javascript
Home.navigationOptions = {
  header: null
};
```

17. Create a button component

```jsx
const PressMe = () => (
  <Button title="Press Me" color="white" onPress={() => alert("HELLO!")} />
);
```

18. Add a button on the right side of the header

```jsx
IcecreamList.navigationOptions = {
  title: "Flavors List",
  headerRight: <PressMe />
};
```

19. In `Home.js`, change title when pressing on the button:

```jsx
Home.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name")
  };
};

<Button
  transparent
  light
  style={styles.buttonStyling}
  onPress={() => props.navigation.setParams({ name: "Lailz" })}
>
  <Text style={styles.buttonTextStyling}>Set title name to 'Lailz'</Text>
</Button>;
```

20. Add a counter to the header:

```jsx

const IncreaseCount = () => (
<Button
  transparent
  light
  onPress={navigation.getParam("increaseCount")}
>
  <Text style={styles.buttonTextStyling}>ICECREAM!!</Text>
</Button>
)

------------

Home.navigationOptions = {
  headerRight: <IncreaseCount />
}

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

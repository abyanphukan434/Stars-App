import * as React from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ListData: [],
      url: 'http://localhost:5000/'
    }
  }

getPlanets = () => {
  const {url} = this.state
  axios
  .get(url).then(response => {
    return this.setState({
      ListData: response.data.data
    })
  })
  .catch(error => {
    Alert.alert(error.message);
  })
}

componentDidMount() {
  this.getPlanets();
}

renderItem = ({item, index}) => (
  <ListItem
    key = {index}
     title = {`Star : ${item.name}`}
     subtitle = {`Distance From Earth: ${item.distance_from_earth}`}
     titleStyle = {styles.title}
     containerStyle = {styles.listContainer}
     bottomDivider
     chevron
     onPress = {() => {this.props.navigation.navigate('Details', {star_name: item.name})}}
  />
) 

keyExtractor = (item, index) => index.toString()

  render() {
    const {ListData} = this.state
    if (ListData.length == 0) {
      return(
        <View style = {styles.emptyContainer}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    }

    return(
      <View style = {styles.container}>
        <SafeAreaView/>
        <View style = {styles.upperContainer}>
          <Text style = {styles.headerText}>
            Stars World
          </Text>
        </View>
        <View style = {styles.lowerContainer}>
          <FlatList
            keyExtractor = {this.keyExtractor}
            data = {this.state.ListData}
            renderItem = {this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#edc988"
},

upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
},

headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#132743"
},

lowerContainer: {
    flex: 0.9
},

emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},

title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d7385e"
},

listContainer: {
    backgroundColor: "#eeecda"
    }
})
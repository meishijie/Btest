import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.data1 = [{key: 'a',selected:true}, {key: 'b',selected:true},{key: 'c',selected:true},{key: 'f',selected:true},{key: 'r',selected:true}]
    this.data2 = [{key: 'a',selected:true}, {key: 'b',selected:true},{key: 'c',selected:true},{key: 'f',selected:true},{key: 'r',selected:true}]
    this.state = { count: 0,dataSource:this.data1 }
  }
  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
    this.data1.push({key: 'a',selected:true})
  }
  _onPressButton = (item) => {
        var arrtoo = this.state.dataSource.slice(0);

        var tempi = arrtoo.find(
          function(i,v,arr){
            return i.key == item.key
          }
        )
        console.log(tempi.selected);
        tempi.selected = !tempi.selected
        console.log(tempi.selected);
        //arrtoo['a'].selected = false;
        this.setState({
            dataSource:arrtoo
        });
  }


 render() {
   return (

     <View style={styles.container}>
        <View style={styles.viewItem1}>
          <FlatList style={styles.viewItemsub}
          data={this.state.dataSource}
          renderItem={({item}) => item.selected ?
            <TouchableOpacity onPress={this._onPressButton.bind(this,item)}><Text style={styles.itemS}>{item.key}</Text></TouchableOpacity>:
            <TouchableOpacity  onPress={this._onPressButton.bind(this,item)}><Text style={styles.itemN}>{item.key}</Text></TouchableOpacity>}
          />
          <FlatList style={styles.viewItemsub}
          data={this.data2}
          renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
          <Text> Touch Here </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  viewItem1:{
    flex:1,
    flexDirection:'row',
    height:300,
    backgroundColor:'#eeeeee'
  },
  itemS:{
    backgroundColor:'#dddddd'
  },
  itemN:{
    backgroundColor:'#FFFFFF'
  },
  viewItemsub:{
    paddingHorizontal:10,
    flex:1,
    height:80,
    backgroundColor:'#eeeeee'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  alist:{
    backgroundColor:'#eeeeee'
  },
  countText: {
    color: '#FF00FF'
  }
})


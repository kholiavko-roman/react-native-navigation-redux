import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

export default class FirstPage extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    }
  }

  render() {
    console.log('First page, props');
    console.log(JSON.stringify(this.props));

    return (
      <View style={{flex: 1, backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 100}}>{this.props.screenProps.counter}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: 200, marginBottom: 15}}>
          <Button title={'Decrease'} onPress={() => this.props.screenProps.decrease()} />
          <Button title={'Increase'} onPress={() => this.props.screenProps.increase()} />
        </View>

        <Button title={'Reset'} onPress={() => this.props.screenProps.reset()} color='black' />

        <View style={{ flexDirection: 'column', marginTop: 10, marginBottom: 15}}>
          <TextInput
            style={{width: 150, height: 40, borderColor: '#ececec', borderWidth: 1, marginBottom: 6, color: '#fff'}}
            placeholder={'You counter number'}
            placeholderTextColor={'white'}
            keyboardType='numeric'
            onChangeText={(number) => this.setState({number})}
          />
          <Button title={'Set number'} onPress={() => this.props.screenProps.setNumber(this.state.number)} />
        </View>

        <Button title={'Second Page'} onPress={() => this.props.navigation.navigate('SecondPage')} color='#7c4dff' />

      </View>
    )
  }
}
import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const barWidth = Dimensions.get('screen').width - 120;
const progressCustomStyles = {
  backgroundColor: 'red',
  borderRadius: 0,
  height: 4,
  borderColor: 'black',
};
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Contest extends Component {
  state = {
    progressCustomized: 1,
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            maxValue={600}
            value={this.state.progressCustomized}
          />
          <View style={styles.buttonContainer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: '#000000' }}>"$ 40"</Text>
              <Button
                title="join"
                onPress={this.increase.bind(this, 'progressCustomized', 1)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 20,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
    width: '30%',
    height: '10%',
    borderColor: 'orange',
  },
});

export default Contest;

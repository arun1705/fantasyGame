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
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export class Contests extends Component {
  state = {
    progressCustomized: 1,
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  };

  // renderRow = (rowData, sectionID, rowID) => (
  //   <TouchableOpacity style={styles.buttonContents} onPress={this.onPress}>
  //     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  //       <Image source={require('../assets/team1.png')} />
  //       <Text style={styles.subTitle}>{rowData.subtitle}</Text>
  //       <Image source={require('../assets/team2.png')} />
  //     </View>
  //   </TouchableOpacity>
  // );

  render() {
    return (
      // <ListView
      //   style={styles.listview}
      //   dataSource={this.state.dataSource}
      //   renderRow={this.renderRow}
      // />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Custom style with max value in 30%</Text>
          <ProgressBarAnimated
            style={styles.progressCustomStyles}
            width={barWidth}
            maxValue={300}
            value={this.state.progressCustomized}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonInner}>
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
    marginTop: 50,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
    width: '20%',
    height: '8%',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  progressCustomStyles: {
    backgroundColor: 'red',
    borderRadius: 0.5,
    height: 4,
    borderColor: 'grey',
  },
});

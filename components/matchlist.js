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
} from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentWillMount() {
    var response = [
      {
        match_id: 19884,
        title: 'India vs Australia',
        subtitle: 'India vs Australia Odi',
        status_str: 'Upcoming',
        date_start: '2017-09-01 00:00:00',
        teama: {
          team_id: 18243,
          name: 'INDIA',
          short_name: 'IND',
          logo_url: 'assets/india.jpg',
        },
        teamb: {
          team_id: 18248,
          name: 'AUSTRALIA',
          short_name: 'AUS',
          logo_url: 'assets/aus.jpeg',
        },
      },
    ];

    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(response),
    });
  }
  onPress = () => {
    this.props.navigation.navigate('Contests');
  };

  renderRow = (rowData, sectionID, rowID) => (
    <TouchableOpacity style={styles.buttonContents} onPress={this.onPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require('../assets/team1.png')} />
        <Text style={styles.subTitle}>{rowData.subtitle}</Text>
        <Image source={require('../assets/team2.png')} />
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const styles = StyleSheet.create({
  listview: {
    backgroundColor: '#B0C4DE',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    paddingVertical: 30,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
  },

  subTitle: {
    paddingLeft: '10px',
    textAlign: 'bottom',
    color: '#000000',
  },
});


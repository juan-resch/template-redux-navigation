import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StatusBar } from 'react-native';

import styles from './styles';

const Home = props => {
  return(
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
      <View style={styles.header}>
        <Text>Simple Template</Text>
      </View>
    </View>
  );
}

const mapStateToProps = state => (
  {
      items: state.AppReducer.items,
      carrinho: state.AppReducer.carrinho
  }
)

export default connect(mapStateToProps, { })(Home);

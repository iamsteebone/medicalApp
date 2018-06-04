import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreenMainStack } from '../../redux/navigation/actions'
import { deviceInit } from '../../redux/device/actions';

import styles from './styles';

class SpashScreenView extends Component {

// sample

  componentWillMount() {
    setTimeout(() => {
      this.props.deviceInit();
      this.props.navigateToScreenMainStack('AuthScreen')
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
            <Text>Sample</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToScreenMainStack: (route) => dispatch(navigateToScreenMainStack(route)),
    deviceInit:() => dispatch(deviceInit())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpashScreenView)

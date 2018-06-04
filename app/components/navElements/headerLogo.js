
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import commonStyle from '../../styles/commonStyles';


export default class HeaderLogo extends Component {
    render() {
        return (
            <View style={commonStyle.headerLogo}>
                <Text>Sample</Text>
            </View>
        )
    }
}

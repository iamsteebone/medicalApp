import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import commonStyle from '../styles/commonStyles'
import { View } from 'react-native';

//---------- Screens ------------ >>>>>>>>>>>>>
import SpashScreenView from '../containers/splashScreenView';
import LoginView from '../containers/loginView';
import RegisterView from '../containers/registerView';
import ForgotPasswordView from '../containers/forgotPasswordView';
import HomeView from '../containers/homeView';

//---------- Nav buttons ------------ >>>>>>>>>>>>>
import NavButton from '../components/navElements/navButton';

export const AuthStack = StackNavigator({
  LoginScreen: {
    screen: LoginView,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    },
  },
  RegisterScreen: {
    screen: RegisterView,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    },
  },
});



export const AppStackRoot = StackNavigator({
  SplashScreen: {
    screen: SpashScreenView,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    },
  },
  AuthScreen: {
    screen: AuthStack,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    },
  },
});




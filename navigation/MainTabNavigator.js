import React from 'react';
import {Platform, TouchableHighlight, View, Text} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, StackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ModalScreen from '../screens/ModalScreen';
import ModalScreen2 from '../screens/ModalScreen2';
import SobreNosotros from '../screens/SobreNosoros';
import MuseoNacional from '../screens/MuseoNacional';
//import DrawerScreen from './drawerScreen'

const config = Platform.select({
    web: {headerMode: 'screen', headerTitle:'PARADISE'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,

        MyModal: {
            screen: ModalScreen,
        },
        MyModal2: {
            screen: ModalScreen2,
        },
        mode: 'modal',
    },
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

LinksStack.path = '';

const SobreNosotrosStack = createStackNavigator(
    {
        Links: SobreNosotros,
    },
    config
);

SobreNosotrosStack.navigationOptions = {
    tabBarLabel: 'Sobre Nosotros',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

SobreNosotrosStack.path = 'SobreNosotros';

const MuseoNacionalStack = createStackNavigator(
    {
        Links: MuseoNacional,
    },
    config
);

MuseoNacionalStack.navigationOptions = {
    tabBarLabel: 'Museo Nacional',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

MuseoNacionalStack.path = 'MuseoNacional';

const tabNavigator = createBottomTabNavigator({
    SobreNosotrosStack,
    MuseoNacionalStack//,
    // HomeStack,
    // LinksStack
});

tabNavigator.path = '';

export default tabNavigator;
//export default DrawerNavigation;

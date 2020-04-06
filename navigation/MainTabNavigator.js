import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ModalScreen from '../screens/ModalScreen';
import ModalScreen2 from '../screens/ModalScreen2';

const config = Platform.select({
    web: {headerMode: 'screen'},
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

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,

});

tabNavigator.path = '';

export default tabNavigator;

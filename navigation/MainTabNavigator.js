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
import Expo1 from '../screens/Expo1';
import Expo2 from '../screens/Expo2';
import PreguntasExpo1 from '../screens/PreguntasExpo1';
import PreguntasExpo2 from '../screens/PreguntasExpo2';
import Mapa from '../screens/Mapa';
import Presentacion from '../screens/Presentacion';
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

const Expo1Stack = createStackNavigator(
    {
        Links: Expo1,
    },
    config
);

Expo1Stack.navigationOptions = {
    tabBarLabel: 'Expo1',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

Expo1Stack.path = 'Expo1';

const Expo2Stack = createStackNavigator(
    {
        Links: Expo2,
    },
    config
);

Expo2Stack.navigationOptions = {
    tabBarLabel: 'Expo2',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

Expo2Stack.path = 'Expo2';

const PreguntasExpo1Stack = createStackNavigator(
    {
        Links: PreguntasExpo1,
    },
    config
);

PreguntasExpo1Stack.navigationOptions = {
    tabBarLabel: 'Preguntas Expo1',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

PreguntasExpo1Stack.path = 'PreguntasExpo1';

const PreguntasExpo2Stack = createStackNavigator(
    {
        Links: PreguntasExpo2,
    },
    config
);

PreguntasExpo2Stack.navigationOptions = {
    tabBarLabel: 'Preguntas Expo2',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

PreguntasExpo2Stack.path = 'PreguntasExpo2';

const MapaStack = createStackNavigator(
    {
        Links: Mapa,
    },
    config
);

MapaStack.navigationOptions = {
    tabBarLabel: 'Mapa',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

MapaStack.path = 'Mapa';

const PresentacionStack = createStackNavigator(
    {
        Links: Presentacion,
    },
    config
);

PresentacionStack.navigationOptions = {
    tabBarLabel: 'Presentacion',
    tabBarVisible: false,
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

PresentacionStack.path = 'Presentacion';

const tabNavigator = createBottomTabNavigator({
    PresentacionStack,
    SobreNosotrosStack,
    MuseoNacionalStack,
    Expo1Stack,
    Expo2Stack,
    PreguntasExpo1Stack,
    PreguntasExpo2Stack,
    MapaStack
});

tabNavigator.path = '';

export default tabNavigator;
//export default DrawerNavigation;

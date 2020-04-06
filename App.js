import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

var route = [];
var table = [{
    location: 'Museo nacional, salon principal',
    routes: [{
        routename: 'Puerta de entrada al baño',
        route: [
            {
                "Data": 344,
                "Type": 'Step',
                "Description": '',
            },
            {
                "Data": 311,
                "Type": 'Step',
                "Description": '',
            },
            {
                "Data": 50,
                "Type": 'Step',
                "Description": 'Statue to left',
            },
            {
                "Data": 52,
                "Type": 'Step',
                "Description": 'Statue to left',
            },
            {
                "Data": 55,
                "Type": 'Stair',
                "Description": 'Small Stairs',
            },
            {
                "Data": 56,
                "Type": 'Stair',
                "Description": 'Small Stairs',
            },
            {
                "Data": 66,
                "Type": 'Stair',
                "Description": 'Small Stairs',
            },
            {
                "Data": 200,
                "Type": 'Step',
                "Description": 'Small Stairs',
            },
            {
                "Data": 210,
                "Type": 'Step',
                "Description": '',
            },
            {
                "Data": 300,
                "Type": 'Door',
                "Description": '',
            }],
    },
        {
            routename: 'Puerta de entrada a la sala uno',
            route: [
                {
                    "Data": 344,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 311,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 50,
                    "Type": 'Step',
                    "Description": 'Statue to left',
                },
                {
                    "Data": 52,
                    "Type": 'Step',
                    "Description": 'Statue to left',
                },
                {
                    "Data": 55,
                    "Type": 'Stair',
                    "Description": 'Small Stairs',
                },
                {
                    "Data": 56,
                    "Type": 'Stair',
                    "Description": 'Small Stairs',
                },
                {
                    "Data": 66,
                    "Type": 'Stair',
                    "Description": 'Small Stairs',
                },
                {
                    "Data": 200,
                    "Type": 'Step',
                    "Description": 'Small Stairs',
                },
                {
                    "Data": 210,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 300,
                    "Type": 'Door',
                    "Description": '',
                }],
        }
    ]
},
    {
        location: 'Escultura uno',
        routes: [{
            routename: 'Puerta de entrada al baño',
            route: [
                {
                    "Data": 344,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 311,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 50,
                    "Type": 'Step',
                    "Description": 'Estatua a la izquierda',
                },
                {
                    "Data": 52,
                    "Type": 'Step',
                    "Description": 'Estatua a la izquierda',
                },
                {
                    "Data": 55,
                    "Type": 'Stair',
                    "Description": 'Escaleras pequeñas',
                },
                {
                    "Data": 56,
                    "Type": 'Stair',
                    "Description": 'Escaleras pequeñas',
                },
                {
                    "Data": 66,
                    "Type": 'Stair',
                    "Description": 'Escaleras pequeñas',
                },
                {
                    "Data": 200,
                    "Type": 'Step',
                    "Description": 'Escaleras pequeñas',
                },
                {
                    "Data": 210,
                    "Type": 'Step',
                    "Description": '',
                },
                {
                    "Data": 300,
                    "Type": 'Door',
                    "Description": '',
                }],
        },

        ],
    }
];
var requesttable = [
    "L,l",
    "Baño a puerta principal,salon museo nacional",
];

//used for searching route and requesting
function gettable() {
    return table;
}

function edittable(table2) {
    table = table2;
}

function getroute() {
    return route;
}

function setroute(route2) {
    route = route2;
}

function getrequest() {
    return requesttable;
}

function setrequest(table2) {
    requesttable = table2;
}

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <AppNavigator/>
            </View>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export {gettable, edittable, getroute, setroute, getrequest, setrequest};

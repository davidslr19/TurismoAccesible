import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Dialog from "react-native-dialog";
import * as Speech from 'expo-speech';
import {MonoText} from '../components/StyledText';
import {Magnetometer} from 'expo-sensors';

import {NavigationActions, StackNavigation} from 'react-navigation';

var i = 0;
var i2 = 0;
var table = [
    {
        location: 'WSU Cub',
        routes: [{
            routename: 'Front Door to Bathroom',
            route: [],
        },

        ],
    },
    {
        location: 'WSU Carpenter Hall',
        routes: [{
            routename: 'Front Door to Bathroom',
            route: [],
        },
            {
                routename: 'Front Door to Office',
                route: [],
            }
        ]
    },
    {
        location: 'WSU Cub',
        routes: [{
            routename: 'Front Door to Bathroom',
            route: [],
        },

        ],
    },


];//used for searching route and requesting


//To Do, 
//Get rid of top bar
//Change Tab bar bottom height to be bigger
//Create Functionalaity for buttons
//search will be used to request a route
//Working on magentometter function-Sean
//get text to speech
export default class ModalScreen extends React.Component {
//lazy and have two listeners so I can always get data easily
    state = {
        MagnetometerData: {},
        first: false,
        route: false,

    };

    componentDidMount() {

        console.log(table);
        var thingToSay = 'Estás en el museo nacional, ¿es correcto?';
        Speech.speak(thingToSay);
        Speech.speak('Presione arriba a la izquierda para no y arriba a la derecha para sí');

    }

    componentWillUnmount() {

    }


    _help = () => {
        if (this.state.route == false) {
            i = i + 1;
            Speech.speak('Está usted en ');
            var obj = table[i];

            Speech.speak(obj.location);

            Speech.speak('Presione arriba a la izquierda para no y arriba a la derecha para sí');
        } else {
            i2 = i2 + 1;
            if (i2 > 1) {
                this.props.navigation.navigate(NavigationActions.navigate({
                    routeName: 'HomeStack',
                    action: NavigationActions.navigate({routeName: 'MyModal2'})
                }));

            } else {
                Speech.speak('Estás buscando ');
                var obj = table[i];
                var obj2 = obj.routes[i2];
                Speech.speak(obj2.routename);
            }
        }
    }
    _search = () => {
        if (this.state.first == false) {
            this.setState({first: true});
            Speech.speak('Has seleccionado que estás en el museo nacional');
            Speech.speak('Está usted en ');
            var obj = table[i];

            Speech.speak(obj.location);

            Speech.speak('Presione arriba a la izquierda para no y arriba a la derecha para sí');
        } else {
            if (this.state.route == false) {
                this.setState({route: true});
                Speech.speak('Estás buscando ');
                var obj = table[i];
                var obj2 = obj.routes[i2];
                Speech.speak(obj2.routename);

            } else {

                Speech.speak('Usted ha seleccionado');
                var obj = table[i];
                var obj2 = obj.routes[i2];
                Speech.speak(obj2.routename);
                Speech.speak('Tu ruta comenzará ahora');
                this.props.navigation.goBack();

            }

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this._help()}>
                    <View
                        style={{
                            backgroundColor: 'black',
                            position: 'absolute',//use absolute position to show button on top of the map
                            //for center align
                            alignSelf: 'flex-start', //for align to right
                            borderRadius: 50,
                            padding: 65,
                        }}>
                        <Text style={{color: 'white', fontSize: 16}}>
                            No
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._search()}>
                    <View
                        style={{
                            backgroundColor: 'black',
                            position: 'absolute',
                            //for center align
                            alignSelf: 'flex-end', //for align to right
                            borderRadius: 50,
                            padding: 65,
                        }}>
                        <Text style={{color: 'white', fontSize: 16}}>
                            Yes
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

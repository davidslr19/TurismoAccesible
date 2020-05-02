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
import { MonoText } from '../components/StyledText';
import { Magnetometer } from 'expo-sensors';

import { NavigationActions, StackNavigation } from 'react-navigation';
import { getroute, setroute } from '../App.js';

var i = 0;
const buttonPadding = 70;

//To Do, 
//Get rid of top bar
//Change Tab bar bottom height to be bigger
//Create Functionality for buttons
//search will be used to request a route
//Working on magnetometer function-Sean
//get text to speech
export default class MuseoNacional extends React.Component {
    //lazy and have two listeners so I can always get data easily
    state = {
        MagnetometerData: {},
        dialogVisible: false,
        route: [],
        search: "Search",
        start: "Start",
    };

    textoSobreNosotros = "Aplicación web progresiva basada en los estándares de iniciativa de accesibilidad web con el fin de fomentar el turismo accesible en Bogotá para personas con discapacidad visual centrándonos en el museo nacional. Esta aplicación llamada PARADISE lo que busca es brindarle al Museo Nacional y al Instituto Nacional para Ciegos (INCI) una herramienta funcional, que permita a una persona con discapacidad visual disfrutar de una atracción turística, tal como lo es la historia no solo de Colombia sino de varios personajes y objetos representativos narradas por el lector de pantalla.";

    componentDidMount() {
        var thingToSay = 'Presiona en la esquina inferior derecha para obtener ayuda';
        Speech.speak(thingToSay);
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _toggle = () => {
        if (this._subscription) {
            this._unsubscribe();
        } else {
            this._subscribe();
        }
    };


    _help = () => {
        Speech.speak('Presione la esquina inferior izquierda para ir al la pagina de Sobre nosotros');
        Speech.speak('Presione en cualquiera de las exposiciones que se encuentran el parte superior para saber sobre la exposición');
    }

    _expo = ( valor ) => {
        Speech.speak('Explicacion detallada de la expo ' + valor);
        //Speech.speak(this.textoSobreNosotros);
    }

    _SobreNosotros = () => {
        Speech.speak('Acaba de dirigirse a la pagina del Sobre nosotros');
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'SobreNosotrosStack'
        }))

    }

    _subscribe = () => {
        this._subscription = Magnetometer.addListener(result => {

            this.setState({ MagnetometerData: result });
        });
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={{ flex: 6 , flexDirection: 'column'}}>
                <TouchableOpacity onPress={() => this._expo(1)} style={{

                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    position: 'relative',
                    justifyContent: 'center',
                    height: '20%',
                    width: '100%',
                    padding: 5,
                }}>
                    <Image
                        source={require('./assets/Exposiciones/Expo1.png')}
                        style={{
                            width: '100%',
                            height: '75%'
                        }}
                        accessibilityLabel='Texto alternativo imagen expo 1'

                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        padding: 5,
                        textAlign: "center",
                        fontWeight:'bold'
                    }}>
                        Expo1
                    </Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._expo(2)} style={{

                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    position: 'relative',
                    justifyContent: 'center',
                    height: '20%',
                    width: '100%',
                    padding: 5,
                }}>
                    <Image
                        source={require('./assets/Exposiciones/Expo2.png')}
                        style={{
                            width: '100%',
                            height: '75%'
                        }}
                        accessibilityLabel='Texto alternativo imagen expo 2'

                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        padding: 5,
                        textAlign: "center",
                        fontWeight:'bold'
                    }}>
                        Expo2
                    </Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._expo(3)} style={{

                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    position: 'relative',
                    justifyContent: 'center',
                    height: '20%',
                    width: '100%',
                    padding: 5,
                }}>
                    <Image
                        source={require('./assets/Exposiciones/Expo3.png')}
                        style={{
                            width: '100%',
                            height: '75%'
                        }}
                        accessibilityLabel='Texto alternativo imagen expo 3'

                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        padding: 5,
                        textAlign: "center",
                        fontWeight:'bold'
                    }}>
                        Expo3
                    </Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._expo(4)} style={{

                    backgroundColor: '#ffffff',
                    alignItems: 'stretch',
                    position: 'relative',
                    justifyContent: 'center',
                    height: '20%',
                    width: '100%',
                    padding: 5,
                }}>
                    <Image
                        source={require('./assets/Exposiciones/Expo4.png')}
                        style={{
                            width: '100%',
                            height: '75%'
                        }}
                        accessibilityLabel='Texto alternativo imagen expo 4'

                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 16,
                        padding: 5,
                        textAlign: "center",
                        fontWeight:'bold'
                    }}>
                        Expo4
                    </Text>


                </TouchableOpacity>

                <View style={{ flex: 2 , flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this._SobreNosotros()} style={{
                    
                    backgroundColor: 'rgb(0,0,255)',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'center', //for align to right
                    height: '100%',
                    width: '50%',
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        Sobre Nosotros
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._help()} style={{
                    
                    backgroundColor: 'rgb(255,0,0)',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'center', //for align to right
                    bottom: 0,
                    height: '100%',
                    width: '50%',
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>
                        Help
                    </Text>

                </TouchableOpacity>
                </View>

            </View>
        );
    }
}
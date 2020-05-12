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
export default class Expo2 extends React.Component {
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
        //var thingToSay = 'Presiona en la esquina inferior derecha para obtener ayuda';
        //Speech.speak(thingToSay);
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
        //Speech.speak('Presione la esquina inferior izquierda para ir al la pagina de Sobre nosotros');
        //Speech.speak('Presione en cualquiera de las exposiciones que se encuentran el parte superior para saber sobre la exposición');
    }

    _expo = ( valor ) => {
        //Speech.speak('Explicacion detallada de la expo ' + valor);
        //Speech.speak(this.textoSobreNosotros);
    }

    _SobreNosotros = () => {
        //Speech.speak('Acaba de dirigirse a la pagina del Sobre nosotros');
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'SobreNosotrosStack'
        }))

    }

    _Questionario = () => {
        //Speech.speak('Acaba de dirigirse a la pagina del Sobre nosotros');
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'PreguntasExpo2Stack'
        }))

    }

    _MuseoNacional = () => {
        //Speech.speak('Acaba de dirigirse a la pagina del Sobre nosotros');
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'MuseoNacionalStack'
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
            <TouchableOpacity style={{

                backgroundColor: '#ffffff',
                alignItems: 'stretch',
                position: 'relative',
                justifyContent: 'center',
                height: '70%',
                width: '100%',
                padding: 5,
            }}>
                <Image
                    source={require('./assets/Exposiciones/CoronaSimonBolivar.png')}
                    style={{
                        width: '100%',
                        height: '50%'
                    }}
                    accessibilityLabel='Corona hecha en oro con incrustaciones de perlas y diamantes, esta formada en forma de aro formado con 47 hojas de laurel, 49 perlas incrustadas, 9 diamantes, 274 chispas de diamantes y 10 cuentas de oro. Tiene un peso de 763 gramos.'

                />
                <Text style={{
                    color: 'black',
                    fontSize: 17,
                    padding: 5,
                    textAlign: "center",
                    fontWeight:'bold'
                }}>
                    Ofrecida al Libertador después de su entrada triunfal al Cuzco. Bolívar se la quitó de sus sienes y se la colocó a Antonio José de Sucre, juzgando que era él quien la merecía.  El Mariscal de Ayacucho, a su vez, en nombre del ejército libertador la obsequió al Congreso de Colombia y expresó: “Que aquella joya correspondía únicamente a los representantes del pueblo de Colombia, que le habían enviado al Perú para vengar los ultrajes inferidos a los antiguos hijos del Sol”. El Senado aceptó la corona y la destinó al Museo Nacional de Colombia.

Cargada de enorme simbolismo patrio, la Guirnalda ha sido descrita en innumerables oportunidades como tesoro inapreciable, corona del triunfo o la victoria.
                </Text>


            </TouchableOpacity>
            

            <View style={{ flex: 2 , flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this._Questionario()} style={{
                
                backgroundColor: 'rgb(0,0,255)',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',             //for center align
                alignSelf: 'center', //for align to right
                height: '30%',
                width: '50%',
            }}>
                <Text style={{ color: 'white', fontSize: 16 }}>
                    Questionario
                </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._MuseoNacional()} style={{
                
                backgroundColor: 'rgb(255,0,0)',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',             //for center align
                alignSelf: 'center', //for align to right
                bottom: 0,
                height: '30%',
                width: '50%',
            }}>
                <Text style={{ color: 'white', fontSize: 16 }}>
                    Museo Nacional
                </Text>

            </TouchableOpacity>
            </View>

        </View>
        );
    }
}
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Alert,
    Image,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {MonoText} from '../components/StyledText';
import {Magnetometer} from 'expo-sensors';
//To Do, 
//Save on double tap of step(or something else)
//each step saves the orientation of the screen
// Clicking one of the top corner options will reiterate that to the user
import * as Speech from 'expo-speech';
import {gettable, edittable, getrequest, setrequest} from '../App.js';

import {NavigationActions, StackNavigation} from 'react-navigation';

export default class LinkScreen extends React.Component {
    state = {
        MagnetometerData: {},
        Steps: [],
        text: '',
        description: '',
    };
    static navigationOptions = {
        //To hide the ActionBar/NavigationBar
        header: null,
        tabBarVisible: false,
    };

    componentDidMount() {
        this._toggle();
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
        console.log('Help');
        Speech.speak('Estás en el área de construcción de rutas');
        Speech.speak('Para salir presione la esquina inferior derecha');
        Speech.speak('Cree una ruta presionando una de las tres opciones y luego agregue una descripción opcional en la barra superior');
        Speech.speak('Presione la esquina superior derecha para agregar la puerta');
        Speech.speak('Presione la esquina inferior izquierda para agregar la escalera');
        Speech.speak('Presione el botón central para agregar el paso');
        Speech.speak('Envíe dando un nombre en la barra inferior, ruta de coma de ubicación');
        Speech.speak('Esto guardará y borrará su ruta actual');
        Speech.speak('Solicitudes actuales');
        var i = 0;
        var request = getrequest()
        while (i < request.length) {

            Speech.speak(request[i]);
            i++;
        }
    }
    _create = () => {
        Speech.speak('Estás de vuelta en la navegación');
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'HomeStack'
        }))

    }

    _door() {

        var obj = {};
        obj["Data"] = this._angle(this.state.MagnetometerData);
        obj["Type"] = "door";
        obj["Description"] = this.state.description;
        this.setState({description: ''});
        this.state.Steps.push(obj);
        Speech.speak('Puerta agregada');

        console.log(this.state.Steps);
    }

    _stair() {

        var obj = {};
        obj["Data"] = this._angle(this.state.MagnetometerData);
        obj["Type"] = "stair";
        console.log(this.state.description);
        obj["Description"] = this.state.description;
        this.setState({description: ''});
        this.state.Steps.push(obj);
        console.log(this.state.Steps);
        Speech.speak('Escalera agregada');
    }

    _step() {
        var obj = {};
        obj["Data"] = this._angle(this.state.MagnetometerData);
        obj["Type"] = "step";
        obj["Description"] = this.state.description;
        this.setState({description: ''});
        this.state.Steps.push(obj);
        console.log(this.state.Steps);
        Speech.speak('Paso agregado');
    }

    end() {
        var table = gettable();
        var obj = {};
        var obj2 = {};
        var i = 0;
        var i2 = 0;
        var checker = 0;
        var splitter = this.state.text.split(',');

        if (splitter.length != 2) {

            Alert.alert(
                'Route name , location'
            );
        } else {

            var request = getrequest()
            while (i < request.length) {
                console.log(this.state.text);
                if (this.state.text == request[i]) {
                    request.splice(i, 1);
                }
                i++;
            }
            setrequest(request);
            i = 0;
            var location = splitter[1];
            var route = splitter[0];
            while (i != table.length) {
                obj = table[i];
                if (obj["location"] == location) {
                    i2 = 0;
                    while (i2 != obj["routes"].length) {
                        obj2 = obj["routes"][i2];

                        if (obj2["routename"] == route) {
                            checker = 1;
                        }
                        i2++;
                    }
                }
                i++;
            }
            i = 0;
            if (checker == 0) {
                cheker = 0;
                while (i != table.length) {
                    obj = table[i];
                    if (obj["location"] == location) {
                        var obj3 = {
                            routename: route,
                            route: this.state.Steps,
                        }
                        obj["routes"].push(obj3);
                        table[i] = obj;
                        checker = 1;
                        table = gettable();
                        console.log(table);
                    }
                    i++;
                }
                if (checker == 0) {
                    var obj3 =
                        {
                            routename: route,
                            route: this.state.Steps
                        }
                    var obj4 =
                        {
                            location: location,
                            routes: [obj3]
                        }
                    table.push(obj4);
                    edittable(table);
                    table = gettable();
                    console.log(table);
                    this.setState({Steps: []});
                }
                Alert.alert(
                    'Sumbited'
                );
            } else {
                Alert.alert(
                    'AlreadyIn'
                );
            }
        }
        Speech.speak('Saved Route');
    }

    _subscribe = () => {
        this._subscription = Magnetometer.addListener(result => {

            this.setState({MagnetometerData: result});
        });
    };
    _angle = (magnetometer) => {
        if (magnetometer) {
            let {x, y, z} = magnetometer;

            if (Math.atan2(y, x) >= 0) {
                angle = Math.atan2(y, x) * (180 / Math.PI);
            } else {
                angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
            }
        }

        return Math.round(angle);
    };
    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this._help()} style={{

                    backgroundColor: '#077ee0',
                    position: 'absolute',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'flex-start', //for align to right
                    height: '20%',
                    width: '45%',
                    alignItems: 'center',
                }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                        Help
                    </Text>


                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._door()} style={{

                    backgroundColor: '#0ad15d',
                    position: 'absolute',
                    height: '20%',
                    width: '45%',
                    alignItems: 'center',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'flex-end', //for align to right

                }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                        Door
                    </Text>

                </TouchableOpacity>
                <View
                    style={{
                        top: '25%',
                    }}>
                    <TextInput
                        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Description"}
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}
                    />
                </View>
                <TouchableOpacity onPress={() => this._step()} style={{
                    top: '40%',
                    backgroundColor: '#0ad15d',
                    position: 'absolute',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'center', //for align to right
                    height: '20%',
                    width: '80%',
                    alignItems: 'center',
                }}>

                    <Text style={{color: 'white', fontSize: 16}}>
                        Step
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._create()} style={{
                    bottom: 0,
                    backgroundColor: '#e39517',
                    position: 'absolute',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'flex-end', //for align to right
                    height: '20%',
                    width: '45%',
                    alignItems: 'center',
                }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                        Home
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._stair()} style={{

                    backgroundColor: '#0ad15d',
                    position: 'absolute',
                    justifyContent: 'center',             //for center align
                    alignSelf: 'flex-start', //for align to right
                    bottom: 0,
                    height: '20%',
                    width: '45%',
                    alignItems: 'center'
                }}>
                    <Text style={{color: 'white', fontSize: 16}}>
                        Stair
                    </Text>

                </TouchableOpacity>
                <View
                    style={{
                        top: '55%',
                    }}>
                    <TextInput
                        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
                        placeholder={"Routename, Location"}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        onSubmitEditing={(argument) => this.end()}
                    />
                </View>

            </View>
        );
    }
}

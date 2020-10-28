import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
    //VARIAVEIS GLOBAIS DO APP
    state = {
        peso: 0,
        altura: 0,
        imc: 0,
        legenda: 'Indeterminado',
        cor: '#bdc3c7',
    };

    //CALCULO
    calcularIMC = () => {
        const resultado = this.state.peso / (this.state.altura * this.state.altura);

        this.setState({
            imc: Math.ceil(resultado),
        });

        if (resultado < 18.5) {
            this.setState({
                legenda: 'Magreza',
                cor: '#e74c3c',
            });
        } else if (resultado >= 18.5 && resultado < 25) {
            this.setState({
                legenda: 'Normal',
                cor: '#2ecc71',
            });
        } else if (resultado >= 25 && resultado < 30) {
            this.setState({
                legenda: 'Sobrepeso',
                cor: '#f1c40f',
            });
        } else if (resultado >= 30 && resultado < 40) {
            this.setState({
                legenda: 'Obesidade',
                cor: '#e67e22',
            });
        } else if (resultado >= 40) {
            this.setState({
                legenda: 'Obesidade Grave',
                cor: '#e74c3c',
            });
        }
    };

    //FUNÇÃO LIMPAR
    clearInput = () => {
        this.textInputRef.clear();
    };

    render() {
        return ( <
            View >
            <
            View style = { styles.app } >
            <
            Text style = { styles.legenda } > Seu IMC < /Text>

            <
            View style = {
                [styles.painel, { backgroundColor: this.state.cor }] } >
            <
            Text style = { styles.resultado } > { this.state.imc } < /Text> <
            Text style = { styles.diagnostico } > { this.state.legenda } < /Text> <
            /View>

            <
            View >
            <
            TextInput ref = {
                (comp) => {
                    this.textInputRef = comp;
                }
            }
            style = { styles.peso }
            label = "Peso"
            onChangeText = {
                (valor) => {
                    this.setState({ peso: valor.replace(',', '.') });
                }
            }
            /> <
            TextInput ref = {
                (comp) => {
                    this.textInputRef = comp;
                }
            }
            style = { styles.altura }
            label = "Altura"
            onChangeText = {
                (valor) => {
                    this.setState({ altura: valor.replace(',', '.') });
                }
            }
            /> <
            /View> <
            Button mode = "contained"
            onPress = { this.calcularIMC } >
            Calcular <
            /Button> <
            Button mode = "contained"
            onPress = { this.clearInput } >
            Limpar <
            /Button> <
            /View> <
            /View>
        );
    }
}

//ESTILO
const styles = StyleSheet.create({
    //IMC
    app: {
        padding: 10,
    },
    painel: {
        alignSelf: 'center',
        borderRadius: 10,
        width: 150,
        marginVertical: 10,
        padding: 10,
    },
    legenda: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    resultado: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    diagnostico: {
        textAlign: 'center',
        fontSize: 16,
    },
    peso: {
        marginVertical: 10,
    },
    altura: {
        marginVertical: 10,
    },
});
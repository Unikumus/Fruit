import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function FlatCartButton(props) {

    let ButtonText
    let cart = props.inCart

    if (props.inCart == false) {

    return (
        <TouchableOpacity onPress={() => props.cartPressHandler(props.id)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>В корзину</Text>
            </View>
        </TouchableOpacity>
    )
}

else {
        return (
            <TouchableOpacity onPress={() => props.cartPressHandler(props.id)}>
                <View style={styles.buttonInCart}>
                    <Text style={styles.buttonTextCart}>В корзине</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderColor: "#00c56a",
        borderWidth: 1,
    },

    buttonInCart:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#00c56a",
    },

    buttonText:{
        color: "#00c56a",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: "center"
    },

    buttonTextCart:{
        color: "#ffffff",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: "center"
    }
})

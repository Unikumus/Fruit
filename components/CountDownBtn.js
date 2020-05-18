import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function CountDownBtn(props) {

    let ButtonText
    let cart = props.inCart

    return (
        <TouchableOpacity onPress={() => props.counting(-1, props.id)}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>^</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#bdbdbd",
        margin:2
    },

    buttonText:{
        color: "white",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
        textAlign: "center",
        transform: [{ rotate: '180deg'}]

    }
})

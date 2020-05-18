import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default function FlatButton(props) {
    return(
        <TouchableOpacity  onPress={props.pressHandler}>
            <View style={styles.button}>
                <Text style={styles.buttonText} >{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: "#00c56a",
    },

    buttonText:{
        color: "white",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: "center"
    }
})

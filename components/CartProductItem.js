import React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'
import FlatCartButton from "./CartButton";
import {myImages} from '../global'
import CountUpBtn from './CountUpBtn'
import CountDownBtn from './CountDownBtn'

export const CartProductItem =(props) => {

    let imgPath = props.previewImage
    return(
        <View style={styles.item} >
            <Image
                style={styles.image}
                source={myImages.itemImage[imgPath]}
            />

            <View style={styles.titleBlock} >

                <Text style={styles.itemText} >{props.name}</Text>
                <Text style={styles.itemTextPrice} >Цена: {props.price} руб.</Text>
                <Text style={styles.itemTextAmount} >Кол-во: {props.count}</Text>

            </View>

            <View style={styles.coutBtnBlock} >
                <CountUpBtn id = {props.id} counting={props.counting}></CountUpBtn>
                <CountDownBtn id = {props.id} counting={props.counting}></CountDownBtn>
            </View>

            <FlatCartButton  inCart={props.inCart} id = {props.id} name = {props.name} cartPressHandler={props.cartPressHandler} />

        </View>
    )
}

const styles = StyleSheet.create({
    coutBtnBlock:{
        // flex:1,
        flexDirection: 'column',
        marginHorizontal:10
    },

    item:{
        flex:1,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image:{ height: 80,  width: 80,  borderRadius: 80,  marginRight: 20, },
    itemText:{ flex:1, fontSize: 20,},
    itemTextPrice:{ flex:1,  fontSize: 14, },
    itemTextAmount:{ flex:1, fontSize: 14,},
    titleBlock:{
        flex:1,
    },
    cartText:{ backgroundColor: "#5182e5",  borderRadius: 80,  padding: 5,  paddingLeft: 10,  paddingRight: 10,
        color: 'white',  textAlign: 'center',  fontSize: 12,  lineHeight: 12,}
});
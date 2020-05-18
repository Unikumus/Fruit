import React from 'react';
import {View, StyleSheet, FlatList, AsyncStorage} from 'react-native';
import {ProductItem} from "../components/ProductItem";
import FlatButton from "../components/Button";
import {useState, useEffect} from 'react';

export default function Home (props) {

    const [modalOpen, setModalOpen] = useState(false)
    const [state, setState] = useState({data: [{},]})

    useEffect(() => {
        getData()
    }, [])

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            // await AsyncStorage.clear()
            await AsyncStorage.setItem('My_Key', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('My_Key')
            if(jsonValue !== null) {
                const value = JSON.parse(jsonValue)
                setState(value)
            }
            else {
                setState(      {
                    data: [
                        {key: 0, name:'Абрикос', price:35, previewImage:'1', inCart: false, count: 1},
                        {key: 1, name:'Авокадо', price:90, previewImage:'2', inCart: false, count: 1},
                        {key: 2, name:'Ананас', price:32, previewImage:'3', inCart: false, count: 1},
                        {key: 3, name:'Апельсин', price:25, previewImage:'4', inCart: false, count: 1},
                        {key: 4, name:'Бананы', price:20, previewImage:'5', inCart: false, count: 1},
                        {key: 5, name:'Виноград', price:45, previewImage:'6', inCart: false, count: 1},
                        {key: 6, name:'Гранат', price:65, previewImage:'7', inCart: false, count: 1},
                        {key: 7, name:'Киви', price:70, previewImage:'8', inCart: false, count: 1},
                        {key: 8, name:'Персик', price:80, previewImage:'9', inCart: false, count: 1},
                        {key: 9, name:'Яблоки', price:25, previewImage:'10', inCart: false, count: 1},
                    ]
                } )
            }
        } catch(e) {
            // error reading value
        }
    }

    let inputData
    const grabInputData = (val)=>{
        inputData = val.toString()
    }

    const pressHandlerFilter = () => {
        storeData(state)
        props.navigation.navigate("Корзина")
    }

    const cartPressHandler = (key) =>{

        let copyState = JSON.parse(JSON.stringify(state));
        copyState.data[key].inCart == false
            ?(copyState.data[key].inCart = true)
            :(copyState.data[key].inCart = false)
        setState(copyState)
    }

    return (
        <View style={styles.container}>

            <View style={styles.itemContainer}>

               <FlatList
               data={state.data}
               renderItem={ ({item}) => (
                   <ProductItem  key = {item.key}
                                 inCart={item.inCart} id = {item.key}
                                 cartPressHandler={cartPressHandler}
                                 name = {item.name}
                                 price = {item.price}
                                 previewImage = {item.previewImage} />
               )}

               keyExtractor = { (item, index) => index.toString() }
               />


            </View>
            <View style={styles.footer}>

                <FlatButton pressHandler={pressHandlerFilter}  text={'Перейти в корзину'}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    itemContainer: {
        flex:8,
        backgroundColor: "#ffffff",
    },
    footer:{
        flex:1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    modalContent:{
    }
})
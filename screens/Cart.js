import React from 'react';
import {View, Text, StyleSheet, FlatList, AsyncStorage} from 'react-native';
import {CartProductItem} from "../components/CartProductItem";
import FlatButton from "../components/Button";
import {useState, useEffect} from 'react';

export default function Cart(props) {

    const [state, setState] = useState({data: [{},]});
    const [totalCost, setTotalCost]=useState(0);

    useEffect(() => {
        getData()
    }, []);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('My_Key', jsonValue)
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('My_Key');
            if(jsonValue !== null) {
                const value = JSON.parse(jsonValue);
                setState(value);
                totalCostCalc(value)
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
                } );
                totalCostCalc()
            }
        } catch(e) {
            // error reading value
        }
    };

    let inputData;
    const grabInputData = (val)=>{
        inputData = val.toString()
    };

    const pressHandler = () => {
        props.navigation.navigate("Каталог");
        storeData(state)
    };

    const counting = (val, id) =>{
        let copyState = JSON.parse(JSON.stringify(state));
        let amount = copyState.data[id].count+val;
        if(amount >=1 && amount < 11 ){
            copyState.data[id].count = (amount);
            setState(copyState)
        }
        totalCostCalc(copyState)
    };

    const totalCostCalc = (val) =>{
        let calc = 0;
        let i;
        for (i = 0; i < val.data.length; i++) {
            if(val.data[i].inCart == true){
                calc += val.data[i].price*val.data[i].count
            }
        }
        setTotalCost(calc)
    };

    const cartPressHandler = (key) =>{
        let copyState = JSON.parse(JSON.stringify(state));
        copyState.data[key].inCart == false
            ?(copyState.data[key].inCart = true)
            :(copyState.data[key].inCart = false);
        setState(copyState);
        totalCostCalc(copyState)
    }

    const createDataTable = (val) =>{

        let tableData=[]
        let i
        for (i = 0; i < val.data.length; i++) {

            if (val.data[i].inCart == true) {
                let itemData=[]
                itemData[0] = val.data[i].name;
                itemData[1] = val.data[i].price  + " руб.";
                itemData[2] = val.data[i].count + " шт.";
                itemData[3] = (val.data[i].count * val.data[i].price) + " руб.";
                tableData.push(itemData)
            }
        }

        let itemDataTotal=[];
        itemDataTotal[0] = 'Общая стоимость покупки: '+ totalCost + " руб.";
        tableData.push(itemDataTotal);

        let   dataTableNew = {
            tableHead: ['Товар', 'Цена', 'Кол-во', 'Итого'],
            tableData: tableData
        };
        return dataTableNew
    };

    const buyItems =()=>{
        let mytable = createDataTable(state)
        props.navigation.navigate("Чек", {mytable})
    };

    return (
        <View style={styles.container}>

            <View style={styles.itemContainer}>


                <FlatList


                    data={state.data.filter(el => el.inCart == true)}
                    renderItem={ ({item}) => (
                        <CartProductItem  key = {item.key}
                                          counting={counting}
                                          count={item.count}
                                          inCart={item.inCart}
                                          id = {item.key}
                                          cartPressHandler={cartPressHandler}
                                          name = {item.name}
                                          price = {item.price}
                                          previewImage = {item.previewImage}  />
                        )
                    }
                    keyExtractor = { (item, index) => index.toString() }
                />

            </View>
            <View style={styles.footer}>

                <Text style={styles.totalCost} >Общая стоимость:  {totalCost} руб. </Text>
                <FlatButton pressHandler={buyItems}  text={'Купить'}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    totalCost:{paddingHorizontal: 20,  textAlign: 'center', paddingBottom: 25, paddingTop: 5,},
    container: { flex:1,},
    itemContainer: { flex:8, backgroundColor: "#ffffff",},
    footer:{ flex:2,  paddingVertical: 20,  paddingHorizontal: 20,},
});
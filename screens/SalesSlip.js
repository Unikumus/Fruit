import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Row, Rows, Table, TableWrapper} from "react-native-table-component";
import {useState, } from 'react';


export default function salesSlip(props) {

    let table = props.navigation.getParam("mytable")
    const [state, setState] = useState(table)

    return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 1}}>
                <Row data={state.tableHead} flexArr={[2, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>

                <TableWrapper style={styles.wrapper}>
                    <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                </TableWrapper>
            </Table>

            <View style={styles.footer}>
                <Text style={styles.totalCost} >Спасибо за покупку!</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#daf0e6'  },
    wrapper: { flexDirection: 'row' },
    row: {  height: 28  },
    text: { textAlign: 'left', margin: 3 },
    footer:{
        marginTop: 20,
    },
});



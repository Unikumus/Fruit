import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import SalesSlip from '../screens/SalesSlip'
import Home from '../screens/Home'
import Cart from '../screens/Cart'

const screens = {
    Каталог:{
        screen: Home
    },
    Корзина: {
        screen: Cart
    },
    Чек: {
        screen: SalesSlip
    },
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
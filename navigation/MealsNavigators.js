import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import { Platform } from 'react-native';
import Colors from '../data/constants/Colors';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'


const options = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    MealDetails: MealDetailsScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    }
}, {
    initialRouteName: 'Categories', // this is default
    defaultNavigationOptions: {...options}
})


const MealTabNavigation = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meal',
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
})

export default createAppContainer(MealTabNavigation);

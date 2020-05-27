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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FilterScreen from '../screens/FilterScreen';


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
    defaultNavigationOptions: options
})

const FavMealNavigator = createStackNavigator({
    Favorites: { screen: FavoriteScreen },
    MealDetails: MealDetailsScreen
}, {defaultNavigationOptions: options})

const tabScreens = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meal',
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavMealNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}
const MealTabNavigator = Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreens, {
        activeColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreens, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    })

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
}, {defaultNavigationOptions: options});


const RootNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealTabNavigator,
        navigationOptions: {drawerLabel: 'Meals'}
    },
    Filters: FilterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 16
        }
    }
})

export default createAppContainer(RootNavigator);

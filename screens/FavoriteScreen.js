import React from 'react';

import { MEALS } from '../data/dummy';
import MealList from '../components/MealList';
import ToggleDrawer from '../components/ToggleDrawer';

const FavoriteScreen = props => {
    const displayedMeals = MEALS;

    return <MealList listData={displayedMeals} navigation={props.navigation} />
}


FavoriteScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorite',
        headerLeft: () => <ToggleDrawer navigation={navData.navigation}/>
    }
}

export default FavoriteScreen;
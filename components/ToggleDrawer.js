import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButtons from '../components/HeaderButton';


const ToggleDrawer = props => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
        <Item
            title='optional'
            iconName='ios-menu'
            onPress={() => props.navigation.toggleDrawer()}
        />
    </HeaderButtons>
)

export default ToggleDrawer;
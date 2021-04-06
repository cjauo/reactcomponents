import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Registration';
import Welcome from './screens/Welcome';

const stackNavigationOption = {
    headerShown:false
}

const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Welcome:{screen:Welcome},
},
{
    defaultNavigationOption: stackNavigationOption
});

export default createAppContainer(AppNavigator);
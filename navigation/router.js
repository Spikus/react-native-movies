import { createStackNavigator,Header } from 'react-navigation';
import { ListState } from 'MoviesApp/navigation/list';
import { CommentState } from 'MoviesApp/navigation/comment';


Header.HEIGHT = 20;
const StackNavigatorConfig = {
    initialRouteName: 'List'
}

const AppStack = createStackNavigator({
    'List': { screen: ListState },
    'Comment': { screen: CommentState },
}, StackNavigatorConfig);

export { AppStack }
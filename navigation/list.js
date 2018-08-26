import React from 'react';
import { View, FlatList } from 'react-native';

import { MovieCard } from 'MoviesApp/components/movie-card';
import { UserModal } from 'MoviesApp/components/modal';

import { AppData } from 'MoviesApp/model/main';

class ListState extends React.Component {

    static navigationOptions = {
        title: 'Movies'
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    _navigateToComment(index) {
        this.props.navigation.navigate('Comment', {
            'movieTitle': AppData.movies[index].title,
        });
    }

    _keyExtractor = (item, ind) => `${ind}`;

    render() {
        return <View>
            <FlatList
                data={AppData.movies}
                scrollEventThrottle={16}
                keyExtractor={this._keyExtractor}
                renderItem={({ item, index }) => <MovieCard navigation={this._navigateToComment.bind(this, index)} movie={item} />}
            />
            <UserModal ref={component => this.state.userModal = component} />
        </View>
    }

    componentDidMount() {
        if (!AppData.userName) {
            this.state.userModal._toggleModal(true)
        } else {
            //console.log(AppData.userName)
        }
    }
}

export { ListState }
import React from 'react';
import { View, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import { CommentList } from 'MoviesApp/components/comments-list';
import { CommentPanel } from 'MoviesApp/components/comments-panel';

import { AppData } from 'MoviesApp/model/main';

class CommentState extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('movieTitle', 'A Nested Details Screen')
        };
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const movieTitle = navigation.getParam('movieTitle', 'A Nested Details Screen');
        this.state = {
            isLoading: true,
            myComment: '',
            movieKey: this._makeKey(movieTitle),
            comments: []
        }
    }

    _makeKey(string) {
        // not the best key gen;
        return string.toLowerCase().replace(/[^a-zA-Z]/g, "");
    }

    _sendComment = async (text) => {
        let arr = this.state.comments || [];

        arr.push({
            'name': AppData.userName,
            'text': text
        });

        this.setState({
            comments: arr
        });
        let readyData = await AppData.sendComment(this.state.movieKey, arr);
        console.log(readyData);
    }

    _getData = async () => {
        let readyData = await AppData.getComments(this.state.movieKey);
        this.setState({
            comments: readyData,
            isLoading: false
        })
    }

    render() {
        if (this.state.isLoading) {
            this._getData();
            return <View  style={{ flex: 1 }}>
                <ActivityIndicator style={{ flex: 1, marginTop: 30 }} />
            </View>
        } else {
            return <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <CommentList comments={this.state.comments} />
                <CommentPanel updateFun={this._sendComment.bind(this)} />
            </KeyboardAvoidingView>
        }
    }
}

export { CommentState }
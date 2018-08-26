import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';

import { CommentItem } from 'MoviesApp/components/comments-item';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyListText: {
        fontFamily: cuteFont,
        fontSize: 16,
        color: '#363839',
        textAlign: 'left'
    }
});

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    _keyExtractor = (item, ind) => `${ind}`;

    _renderBody() {
        const { comments } = this.props;
        if (comments) {
            return <FlatList
                ref={component => this.state.list = component}
                extraData={this.props}
                data={comments}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => <CommentItem item={item} />}
                />
        } else {
            return <View style={styles.emptyList}>
                <Text style={styles.emptyListText}> WOW! no comment's yet!  You can be first </Text>
            </View>
        }
    }

    componentDidUpdate() {
        this.state.list && this.state.list.scrollToEnd({animated: true})
    }

    render() {
        
        return <View style={styles.list}>
            {this._renderBody()}
        </View>
    }
}

export { CommentList }
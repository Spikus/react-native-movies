import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import { UserShiba, LeftArrow } from 'MoviesApp/components/svg';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    comment: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 10
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#363839',
    },
    commentBody: {
        flex: 1
    },
    commentWrap: {
        flex: 1,
        padding: 10,
        backgroundColor: '#00b8ff',
        borderRadius: 5,
        marginBottom: 5,
        minHeight: 60
    },
    arrow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    commentText: {
        fontFamily: cuteFont,
        fontSize: 12,
        color: '#fff',
        textAlign: 'left'
    },
    name: {
        fontFamily: cuteFont,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left'
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
    _keyExtractor = (item, ind) => `${ind}`;

    renderComment(item) {
        return <View style={styles.comment}>
            <View style={styles.avatar}>
                <UserShiba fill={'#363839'} size={30} />
            </View>
            <View style={styles.arrow}>
                <LeftArrow size={20} />
            </View>
            <View style={styles.commentBody}>
                <View style={styles.commentWrap}>
                    <Text style={styles.commentText}>
                        {item.text}
                    </Text>
                </View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </View>
    }

    renderBody() {
        const { comments } = this.props;
        if (comments) {
            return <FlatList
                data={comments}
                keyExtractor={this._keyExtractor}
                renderItem={({ item, index }) => this.renderComment(item)}
            />
        } else {
            return <View style={styles.emptyList}>
                <Text style={styles.emptyListText}> WOW! no comment's yet!  You can be first </Text>
            </View>
        }
    }

    render() {
        return <View style={styles.list}>
            {this.renderBody()}
        </View>
    }
}

export { CommentList }
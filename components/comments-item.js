import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { UserShiba, LeftArrow, DisableSvg } from 'MoviesApp/components/svg';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
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
    }
});

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderAvatar(isSending) {

        if (isSending) {
            return <DisableSvg fill={'#363839'} size={30} />
        } else {
            return <UserShiba fill={'#363839'} size={30} />
        }
    }

    render() {
        const { item } = this.props;
        console.log(item);
        return <View style={styles.comment}>
            <View style={styles.avatar}>
                {this._renderAvatar(item.isSending)}
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
}

export { CommentItem }
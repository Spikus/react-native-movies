import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput , TouchableOpacity } from 'react-native';
import { SendSvg } from 'MoviesApp/components/svg';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
    commentPanel: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#FFF'
    },
    textInput: {
        flex:1,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        color: '#000',
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#b0b0b0',
        borderRadius: 5,
    },
    button: {
        marginLeft: 10,
        backgroundColor: '#00b8ff',
        borderRadius: 30,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

class CommentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myComment: ''
        }
    }

    _sendComment() {
        this.props.updateFun(this.state.myComment);
        this.setState({ myComment: null });
    }

    render() {
        return <View style={styles.commentPanel}>
            <TextInput
                value={this.state.myComment}
                onChangeText={(text) => this.setState({ myComment: text })}
                underlineColorAndroid={'transparent'}
                style={styles.textInput}
                multiline={true}
                placeholderTextColor="#454545"
                placeholder='Your Comment' />
            <TouchableOpacity onPress={this._sendComment.bind(this)} style={styles.button}>
                <SendSvg size={'20'} />
            </TouchableOpacity>
        </View>
    }
}

export { CommentPanel }
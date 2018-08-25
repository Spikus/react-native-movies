import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Platform, TextInput } from 'react-native';
import { UserShiba } from 'MoviesApp/components/svg';

import { AppData } from 'MoviesApp/model/main';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#b0b0b0'
    },
    userPanel: {
        maxWidth: '70%',
        paddingTop: 20,
        alignItems: 'center',
    },
    userPanelText: {
        fontFamily: cuteFont,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#b0b0b0',
        textAlign: 'center'
    },
    userNameInput: {
        padding: 10,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        color: '#000',
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor: '#b0b0b0',
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontFamily: cuteFont,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#00b8ff',
        borderRadius: 5,
        padding: 5,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class UserModal extends Component {
    state = {
        modalVisible: false,
        name: ''
    };

    _updateName = async () => {
        let responce = await AppData.SetUserName(this.state.name);
        this._toggleModal(false);
    }

    _toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.body}>

                        <View style={styles.avatar}>
                            <UserShiba fill={'#b0b0b0'} size={'70'} />
                        </View>
                        <View style={styles.userPanel}>
                            <Text style={styles.userPanelText}>Hey buddy! Please enter your name for commenting.</Text>
                            <TextInput
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}
                                underlineColorAndroid={'transparent'}
                                style={styles.userNameInput}
                                placeholderTextColor="#454545"
                                placeholder='User Name' />
                            <TouchableOpacity onPress={this._updateName.bind(this)} style={styles.button}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export { UserModal }
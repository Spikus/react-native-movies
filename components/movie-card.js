import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { LeftSvg } from 'MoviesApp/components/svg';

const cuteFont = Platform.OS === 'ios' ? 'Helvetica' : 'Roboto';
const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
        backgroundColor: '#FFF'
    },
    textInfo: {
        paddingRight: 15,
        flex: 1,
    },
    head: {
        fontFamily: cuteFont,
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: cuteFont,
        fontSize: 12,
    },
    additionals: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        paddingTop: 5
    },
    addItem: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        paddingRight: 10,
        minWidth: 80
    },
    addItemText: {
        fontFamily: cuteFont,
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 3
    },
    metascoreText: {
        fontFamily: cuteFont,
        fontSize: 10,
        fontWeight: 'bold',
    },
    metascore: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});

class MovieCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    _rednderMetascore(rate) {
        const bgColor = rate > 80 ? '#2fce00' : rate > 40 ? '#feff04' : '#fe0000';

        return <View style={[styles.metascore, { backgroundColor: bgColor }]}>
            <Text style={styles.metascoreText}>{rate}</Text>
        </View>
    }

    render() {
        const { movie } = this.props;
        return <TouchableOpacity
            onPress={this.props.navigation}
            style={styles.listItem}
            activeOpacity={0.5}>
            <View style={styles.textInfo}>
                <Text style={styles.head}>
                    {movie.title}
                </Text>
                <Text
                    style={styles.description}
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                >
                    {movie.description}
                </Text>
                <View style={styles.additionals}>
                    <View style={styles.addItem}>
                        <Text style={styles.addItemText}>Year:</Text>
                        <Text style={styles.addItemText}>{movie.year}</Text>
                    </View>
                    <View style={styles.addItem}>
                        <Text style={styles.addItemText}>Rating:</Text>
                        <Text style={styles.addItemText}>{movie.rating}</Text>
                    </View>
                    <View style={styles.addItem}>
                        <Text style={styles.addItemText}>Metascore:</Text>
                        {this._rednderMetascore(movie.metascore)}
                    </View>
                </View>
            </View>
            <LeftSvg size={'12'} />
        </TouchableOpacity>
    }
}

export { MovieCard }
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LoadSvg } from 'MoviesApp/components/svg';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


class PreloaderScreen extends React.Component {
    constructor(props) {
        super(props);
        const scrollAnimation = new Animated.Value(0);
        const loopAnimatiomn = Animated.loop(
            Animated.timing(
                scrollAnimation,
                {
                    toValue: 360,
                    duration: 600
                }
            ));

        this.state = {
            scrollAnimation,
            loopAnimatiomn
        }
    }

    componentWillUnmount() {
        this.state.loopAnimatiomn.stop();
    }

    componentDidMount() {
        this.state.loopAnimatiomn.start();
    }

    render() {
        const rotateStyle = this.state.scrollAnimation.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg'],
        });

        return <View style={styles.body}>
            <Animated.View style={{ transform: [{ rotate: rotateStyle }] }}>
                <LoadSvg size={100} />
            </Animated.View>

        </View>
    }
}

export { PreloaderScreen }
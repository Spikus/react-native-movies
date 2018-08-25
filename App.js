import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform, Alert } from 'react-native';

import { PreloaderScreen } from 'MoviesApp/navigation/preload';
import { AppStack } from 'MoviesApp/navigation/router';

import { AppData } from 'MoviesApp/model/main';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	safeArea: {
		flex: 1,
		justifyContent: 'flex-start',
		overflow: 'hidden',
		position: 'relative'
	}
});

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	_showAlert() {
		// Here must be like system Alert
	}

	_getData = async () => {
		let readyData = await Promise.all([AppData.getMoviesData(),AppData.getUserName()])
		if (readyData) {
			this.setState({ isLoading: false })
		} else {
			this._showAlert();
		}
	}

	_renderState() {
		if (this.state.isLoading) {
			this._getData();
			return <PreloaderScreen />
		} else {
			return <AppStack />
		}

	}

	render() {
		return <View style={styles.container} >
			<SafeAreaView style={styles.safeArea}>
				{this._renderState()}
			</SafeAreaView>
		</View>
	}

}



import React, { Component } from 'react';
import {
  Text,
	View,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

const btnBack = require('../img/btn_voltar.png');

export default class Navbar extends Component {
  render() {
		if(this.props.back){
			return (
				<View style={[styles.titleBar, {backgroundColor: this.props.colorBG}]}>
					<TouchableHighlight 
					underlayColor={this.props.colorBG}
					activeOpacity={0.5}
					onPress={ () => {this.props.navigator.pop();}} >
						<Image source={btnBack} />
					</TouchableHighlight>
					<Text style={styles.title}>ATM Consultoria</Text>
				</View>
			);
		}else{
			return (
				<View style={styles.titleBar}>
					<Text style={styles.title}>ATM Consultoria</Text>
				</View>
			);
		}
  }
}

const styles = StyleSheet.create({
	titleBar: {
		backgroundColor: '#ccc',
		padding: 25,
		height: 80,
		flexDirection: 'row',
	},
	title: {
		flex: 1,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#000'
	}
});

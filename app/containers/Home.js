import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	ScrollView,
	TextInpu,
	Image,
	TouchableHighlight,
	StyleSheet,
} from 'react-native'

class Home extends Component {

	searchPressed() {
		this.props.fetchRecipes()
	}

	render(){
		return (
			<View>
				<View>
					<TouchableHighlight style = {{marginTop: 20}}onPress={() => {this.searchPressed()}}>
						<Text> Fetch Recipes </Text>
					</TouchableHighlight>
					<TouchableHighlight style = {{marginTop: 20}}onPress={() => {console.log(this.props)}}>
						<Text> Fetch Recipes </Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}


function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	}
}

export default connect(mapStateToProps)(Home)

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, images } from '../constants/Data';

const LoadingScreen = ({ route, navigation }) => {
	const item = route.params.item;
	console.log(item);

	// if (item.result === true) {
	// 	console.log(item.message);
	// } else {
	// 	console.log(item.message);
	// 	navigation.navigate("Landing");
	// }

	return (
		<View style={styles.container}>
			<View style={{
				height: 300,
				width: 300,
				alignSelf: "center",
				justifyContent: "center",
			}}>
				<Image
					style={{
						flex: 1,
						alignSelf: "center",
					}}
					resizeMode="contain"
					source={images.academia}
				/>
			</View>
		</View>
	);
}

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
		alignItems: 'center',
		justifyContent: "center"
	},
});
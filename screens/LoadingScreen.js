import { StyleSheet, Text, View, Image } from 'react-native'
import React ,{useEffect}from 'react'
import { colors, images, users } from '../constants/Data';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../constants/Sever";

const LoadingScreen = ({ route, navigation }) => {

	useEffect(
		onAuthStateChanged(auth, (user) => {
			if (user) {
			  // User is signed in, see docs for a list of available properties
			  // https://firebase.google.com/docs/reference/js/firebase.User

				users.forEach((item) => {
					if (item.loginDetails.email === user.email) {
						navigation.navigate("Home", { item });
					}
					// }else{
					// 	navigation.goBack();
					// }
				});

			} else {
			  navigation.navigate("Landing");
			}
		})
	)

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
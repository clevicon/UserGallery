import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Navigator from './routes/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins"
import * as SplashScreen from 'expo-splash-screen';
import Globals from './global/Globals';
import { Provider } from 'react-redux';
import store from './redux/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontLoaded, fontError] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });
	const [appIsReady, setAppIsReady] = React.useState(false);

	React.useEffect(() => {
		if(fontLoaded) {
			setAppIsReady(true);
		}
	}, [fontLoaded]);

	const onLayoutRootView = React.useCallback(async () => {
		if(appIsReady){
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if(!appIsReady) {
		return null;
	}

	return (
		<SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<StatusBar backgroundColor='whitesmoke' barStyle="dark-content"/>
			<Provider store={store}>
				<Navigator/>
				<Globals.ShowResponse />
			</Provider>
			
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1
	},
	image: {
		width: "100%",
		flex: 1
	}
});

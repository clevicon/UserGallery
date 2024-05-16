import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; 
import useLogin from "../hooks/Login";

const Login = ({ navigation }) => {
    const { handleLogin, setShowPassword, showPassword, email, password, setEmail, setPassword, isLoading } = useLogin();

    return (
        <View style={styles.container}>
            <Text style={styles.logIn}>Log in</Text>
            <View style={{ height: 40 }} />

            <View style={{ paddingTop: 16, gap: 12, paddingHorizontal: 40 }}>
                <View style={{ width: "110%", alignSelf: "center" }}>
                    <Text style={{ fontSize: 13, color: "#030229", marginBottom: 8, fontFamily : "Poppins_400Regular", }}>
                        Email address
                    </Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="example@gmail.com"
                        placeholderTextColor="#6b7280"
                        style={{
                            height: 50,
                            borderColor: "lightgray",
                            borderRadius: 5,
                            paddingHorizontal: 12,
                            width: "100%",
                            backgroundColor: "#F7F7F8",
                            fontFamily : "Poppins_500Medium",
                        }}
                    />
                </View>

                <View style={{ width: "110%", alignSelf: "center" }}>
                    <Text style={{ fontSize: 13, color: "#030229", marginBottom: 8, fontFamily : "Poppins_400Regular", }}>
                        Password
                    </Text>
                    <View style={{ position: "relative" }}>
                        <TextInput
                            autoCorrect={false}
                            // keyboardType="visible-password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            secureTextEntry={!showPassword}
                            style={{
                                height: 50,
                                borderRadius: 5,
                                paddingHorizontal: 12,
                                width: "100%",
                                backgroundColor: "#F7F7F8",
                                fontFamily : "Poppins_500Medium",
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={{ position: "absolute", top: "40%", right: "5%" }}
                        >
                            <Icon
                                name={showPassword ? "eye" : "eye-slash"}
                                size={14}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={{ height: 40 }} />
            <TouchableOpacity
                style={{
                    paddingHorizontal: 22,
                }}
                onPress={handleLogin}
            >
                <View
                    style={{
                        backgroundColor: "#A10F7E", // Background color
                        marginTop: 6, // Margin top
                        height: 50,
                        paddingHorizontal: 18,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16, // Font size
                            color: "#fff", // Text color
                            fontFamily : "Poppins_500Medium",
                        }}
                    >
                        {isLoading ? <ActivityIndicator color="#fff"/> : "Log in"}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: 30 }} />
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text
                    style={{ alignSelf: "center", fontWeight: "200", fontSize: 13, fontFamily : "Poppins_500Medium", }}
                >
                    Dont have account yet?{" "}
                    <Text style={{ color: "#605BFF", fontWeight: "300" }}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    logIn: {
        fontSize: 25,
        fontWeight: "600",
        color: "#000",
        textAlign: "left",
        alignSelf: "center",
        fontFamily : "Poppins_500Medium",
    },
    bgIcon: {
        width: 150,
        height: 50,
        backgroundColor: "#F7F7F8",
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    formSpacer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
    },
    formSpacerText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#030229",
        lineHeight: 20,
        paddingHorizontal: 27,
        backgroundColor: "#fff",
        zIndex: 9,
    },
    formSpacerDivider: {
        borderBottomWidth: 2,
        borderColor: "#eff1f5",
        position: "absolute",
        top: 9,
        left: 0,
        right: 0,

        width: 300,
    },
});
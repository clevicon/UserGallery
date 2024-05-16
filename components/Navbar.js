import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeToken } from "../redux/actions";

const Navbar = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeToken())
        navigation.navigate("Login")
    }


    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" style={styles.back} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="power" style={styles.logout} />
            </TouchableOpacity>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#eee"
    },
    back: {
        fontSize: 20
    },
    logout: {
        fontSize: 20,
        color: "#A10F7E"
    }
})
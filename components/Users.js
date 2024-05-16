import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const Users = ({ item }) => {
    const { avatar, email, first_name, last_name } = item;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("UserDetails", { item })}>
            <View style={styles.imageWrapper}>
                <Image source={avatar} style={styles.image}/>
            </View>
            <View>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.name}>{first_name} {last_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const renderUsers = ({ item }) => {
    return <Users item={item}/>
}

export default renderUsers;

export const styles  = StyleSheet.create({
    wrapper : {
        padding : 10,
        backgroundColor : "#fff",
        marginVertical : 5,
        borderRadius : 15,
        display : "flex",
        flexDirection :"row",
        alignItems : "center",
        gap : 20

        // justifyContent :"space-between"
    },
    email : {
        fontSize: 13,
        fontFamily : "Poppins_500Medium"
    },
    name : {
        fontSize: 10,
        color : "darkgray",
        fontFamily : "Poppins_500Medium"
    },
    bio : {
        fontSize: 10,
        color : "darkgray",
        fontFamily : "Poppins_500Medium",
        width : 250
    },
    url: {
        fontSize: 10,
        color : "cornflowerblue",
        fontFamily : "Poppins_500Medium",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
    },
    imageWrapper : {
        display : "flex",
        flexDirection :"row",
        alignItems : "center",
        justifyContent :"center",
        width : 100,
    },
    image : {
        width : 100,
        height : 100,
        contentFit : "contain",
        borderRadius : 10,

    }
})
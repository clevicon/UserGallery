import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { styles } from "../components/Users";
import useUserDetails from "../hooks/UserDetails";
import * as Linking from 'expo-linking';
import Navbar from '../components/Navbar';

const UserDetails = ({ route }) => {
    const { item } = route.params;
    const { avatar, email, first_name, last_name, id } = item;
    const { userDetails, isLoading } = useUserDetails(id);

    const openURL = url => Linking.openURL(url);

    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={avatar} style={styles.image}/>
                </View>
                <View>
                    <Text style={styles.email}>{email}</Text>
                    <Text style={styles.name}>{first_name} {last_name}</Text>
                    {isLoading ? (
                        <ActivityIndicator/>
                    ) : (
                        <View>
                            <Text style={styles.bio}>{userDetails.support?.text}</Text>
                            <TouchableOpacity onPress={() => openURL(userDetails.support?.url)}>
                                <Text style={styles.url}>{userDetails.support?.url}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
            
        </View>
    )
    
}

export default UserDetails;
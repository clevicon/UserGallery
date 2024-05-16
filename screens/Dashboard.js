import React from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import renderUsers from "../components/Users";
import useDashboard from "../hooks/Dashboard";
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const { users, handleEndReached, noMoreData, isLoading } = useDashboard();
    const keyExtractor = (item) => item.id.toString();

    const Footer = () => {
        return !noMoreData && <ActivityIndicator/>
    }

    return (
        <View style={styles.wrapper}>
            <Navbar/>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <FlatList
                    data={users}
                    renderItem={renderUsers}
                    keyExtractor={keyExtractor}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0}
                    ListFooterComponent={<Footer/>}
                />
            )}
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    wrapper : {
        padding : 10,
    }
})
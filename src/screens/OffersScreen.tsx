import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffersScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Offer Screen</Text>
            <Text>Welcome to the Offer Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default OffersScreen;
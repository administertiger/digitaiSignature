import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Documents({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Documents Screen</Text>
            <Button
                title='Next Page'
                onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Documents;
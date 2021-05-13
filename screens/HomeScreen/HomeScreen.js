import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.box}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WorkFlow')}>
                <Text>
                    <Icon name='plus' /> NEW WORKFLOW
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        marginBottom: 80,
        height: 60,
        borderRadius: 4,
        borderStyle: 'dashed',
    },
    box: {
        flex: 1,
        justifyContent: 'flex-end',
        borderWidth: 1,
    }
})

export default HomeScreen;
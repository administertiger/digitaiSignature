import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as ImagePicker from "react-native-image-picker";
import uuid from 'react-native-uuid';


function WorkFlowScreen() {

    const [file, setFile] = useState([])

    //To access image library.
    function handleChooseFile() {
        const option = {};

        ImagePicker.launchImageLibrary(option, response => {
            console.log('response', response);
            //alert(response.fileSize);
            if (response.uri) {
                setFile(prevItems => {
                    return [{ id: uuid.v4(), fileName: response.fileName, fileSize: response.fileSize }, ...prevItems]
                })
            }
        })
    }

    function deleteItem(id) {
        return (
            setFile(prevItems => {
                return prevItems.filter(item => item.id != id)
            })
        )
    }

    //----------------------Render Items---------------------------

    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        setCurrentDate(date + '-' + month + '-' + year); //format: dd-mm-yy
    }, [])

    function Item({ fileName, fileSize, id }) {
        return (
            <View>
                <View style={styles.listBox}>
                    <Text style={styles.listText} numberOfLines={1}>{fileName}</Text>

                    <Menu>
                        <MenuTrigger style={{ width: 40 }} >
                            <Icon name='align-justify' size={15} style={{ marginHorizontal: 12 }} />
                        </MenuTrigger>
                        <MenuOptions>
                            <View style={{ borderBottomWidth: 1 }} >
                                <MenuOption onSelect={() => alert(`Not called`)} disabled={true}  >
                                    <View style={styles.menuBox}>
                                        <Text>File Name : </Text>
                                        <Text style={{ width: 110, color: '#919191' }}>{fileName}</Text>
                                    </View>
                                    <View style={styles.menuBox}>
                                        <Text>File Size : </Text>
                                        <Text style={styles.details}>{fileSize}kb</Text>
                                    </View>
                                    <View style={styles.menuBox}>
                                        <Text>Date : </Text>
                                        <Text style={styles.details}>{currentDate}</Text>
                                    </View>
                                </MenuOption>
                            </View>
                            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                            <MenuOption onSelect={() => { deleteItem(id) }} >
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>

                </View>
            </View>
        )
    }

    function renderItem({ item }) {
        return (<Item fileName={item.fileName}
            fileSize={item.fileSize}
            id={item.id} />)
    }

    //-------------------------------------------------

    return (
        <MenuProvider>

            <View style={styles.box}>
                <TouchableOpacity style={styles.buttonDropFile}
                    onPress={handleChooseFile}>
                    <Icon name='folder' />
                    <Text>
                        CHOOSE FILE
                </Text>
                </TouchableOpacity>

                <View style={styles.box2}>
                    <Text style={styles.title}>Documents</Text>
                    <FlatList data={file} renderItem={renderItem} />
                    <View style={styles.title2} >
                        <Text style={{ fontSize: 25 }}>Recipents</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }} >
                            <Icon name='user-plus' style={{ marginTop: 8, marginHorizontal: 0 }} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.boxSign} >
                    <TouchableOpacity style={styles.buttonSign}>
                        <Text>Sign <Icon name='arrow-right' /></Text>
                    </TouchableOpacity>
                </View>
            </View>

        </MenuProvider>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        //borderWidth: 2,
        marginTop: 10,
        marginBottom: 30,
    },
    buttonDropFile: {
        marginTop: 30,
        marginHorizontal: 30,
        borderWidth: 2,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#748c94',
        borderRadius: 4,
        borderStyle: 'dashed',
    },

    //--------------List items--------------

    box2: {
        marginHorizontal: 15,
    },
    listBox: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        marginBottom: 5,
        marginTop: 25,
    },
    title2: {
        flexDirection: 'row',
        fontSize: 25,
        marginBottom: 5,
        marginTop: 25,
        justifyContent: 'space-between',
    },
    listText: {
        marginHorizontal: 20,
        marginBottom: 5,
        width: 150,
        fontSize: 20,
    },
    boxSign: {
        flex: 1,
        //borderWidth: 1,
        justifyContent: 'flex-end',
    },
    buttonSign: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        marginHorizontal: 30,
        height: 50,
    },

    //--------------Menu--------------

    menuBox: {
        flexDirection: 'row',
        marginBottom: 5
    },
    details: {
        color: '#919191',
    }
})

export default WorkFlowScreen;